/*
 it was created with such script
  JSON.stringify(
    $$('tr').reduce(
      (res, node) => {
        res[node.childNodes[0].textContent] = node.childNodes[1].textContent;
        return res;
      }, {}
    ), null, 4
  )

  ran on http://electric-process.surge.sh/
*/
const oldToNewIconsNamesMap = require('./assets/oldToNewIconsNamesMap.json');
const oldIconNames = Object.keys(oldToNewIconsNamesMap);
const getOldIconName = value => oldIconNames.find(iconName => value.endsWith(`Icons/dist/components/${iconName}`));

const RED = '\x1b[31m';
const CYAN = '\x1b[36m';

const errors = [];
const migratedIcons = [];

const printDepricationMessage = error => {
  console.log(RED, error.text);
  console.log(CYAN, 'Problem happen in file', error.where);
  console.log(CYAN, 'On trying to migrate such value', error.fullValue);
  console.log('\n');
};

const doInternalMigration = (node, oldIconName, newIconName) => {
  if (node.value.source.value.includes(`/src/Icons/dist/components/${oldIconName}`)) {
    node.value.source.value = node.value.source.value
      .replace(`/src/Icons/dist/components/${oldIconName}`, `/icons/${newIconName}`);
  } else {
    node.value.source.value = node.value.source.value
      .replace(`/Icons/dist/components/${oldIconName}`, `/../icons/${newIconName}`);
  }
};

const doMigration = (node, file) => {
  const oldIconName = getOldIconName(node.value.source.value);
  const newIconName = oldToNewIconsNamesMap[oldIconName];
  if (!newIconName) {
    errors.push({
      text: `Icon with name "${oldIconName}" is not supported anymore, please ask your UX person to provide alternative`,
      where: file.path,
      fullValue: node.value.source.value
    });
  } else {
    migratedIcons.push({
      text: `Icon with name "${oldIconName}" was migrated, now it called "${newIconName}"`,
      where: file.path,
      fullValue: node.value.source.value
    });
    if (process.env.MIGRATION_ENV === 'internal') {
      doInternalMigration(node, oldIconName, newIconName);
    } else {
      node.value.source.value = `wix-style-react/icons/${newIconName}`;
    }
  }
};

const transformFile = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  root
    .find(j.ImportDeclaration)
    .filter(node => getOldIconName(node.value.source.value))
    .forEach(node => doMigration(node, file));

  return root.toSource({quote: 'single'});
};

module.exports = (file, api) => {
  const result = transformFile(file, api);

  console.log(CYAN, '\n', migratedIcons.length, 'icons was migrated, in file', file.path, '\n');

  if (errors.length) {
    console.log(RED, '\n', errors.length, ' icons was not migrated and require your attention: \n');
  }

  errors.forEach(printDepricationMessage);

  return result;
};

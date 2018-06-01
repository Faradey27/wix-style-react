const {getOldIconName, getNewIconName, getListOfImportedIcons} = require('./utils');

const transformIconsFromObjectSpread = ({file, node, icons, onError}) => {
  icons.forEach(icon => {
    const newIconName = getNewIconName(icon.name);
    if (newIconName && !newIconName.includes('system/')) {
      icon.name = newIconName;
    } else {
      console.log(icon.name);
      onError({
        oldIconName: icon.name,
        newIconName,
        where: file.path,
        fullValue: node.value.source.value
      });
    }
  });
};

const transformWSRObjectSpread = ({file, node, icons, onError}) => {
  const objectImportMask = '/Icons';
  const nodeValue = node.value.source.value;
  if (nodeValue.includes(`/src${objectImportMask}/dist/index`)) {
    node.value.source.value = nodeValue.replace(`/src${objectImportMask}/dist/index`, `/icons`);
  } else if (nodeValue.includes(`/src${objectImportMask}`)) {
    node.value.source.value = nodeValue.replace(`/src${objectImportMask}`, `/icons`);
  } else {
    node.value.source.value = node.value.source.value.replace(objectImportMask, `/../icons`);
  }
  transformIconsFromObjectSpread({file, node, icons, onError});
};

const transformExternalComponentsObjectSpread = ({file, node, icons, onError}) => {
  node.value.source.value = `wix-style-react/icons`;
  transformIconsFromObjectSpread({file, node, icons, onError});
};

const transformWSRComponents = ({node, oldIconName, newIconName}) => {
  const importMask = `/Icons/dist/components/${oldIconName}`;
  if (node.value.source.value.includes(`/src${importMask}`)) {
    node.value.source.value = node.value.source.value.replace(`/src${importMask}`, `/icons/${newIconName}`);
  } else {
    node.value.source.value = node.value.source.value
      .replace(importMask, `/../icons/${newIconName}`);
  }
};

const transformExternalComponents = ({node, newIconName}) => node.value.source.value = `wix-style-react/icons/${newIconName}`;

const changeGeneralImportsInFile = ({node, file, onError, onTick}) => {
  const oldIconName = getOldIconName(node);
  const newIconName = getNewIconName(oldIconName);
  console.log(node.value.source.value);
  if (!newIconName) {
    onError({oldIconName, newIconName, where: file.path, fullValue: node.value.source.value});
  } else {
    if (process.env.MIGRATION === 'wix-style-react') {
      transformWSRComponents({node, oldIconName, newIconName});
    } else {
      transformExternalComponents({node, newIconName});
    }
    onTick({oldIconName, newIconName, where: file.path, fullValue: node.value.source.value});
  }
};

const changeSpreadImportsInFile = ({node, file, onError, onTick}) => {
  const icons = getListOfImportedIcons(node);
  const oldIconsCache = icons.map(icon => icon.name).join(',');
  if (process.env.MIGRATION === 'wix-style-react') {
    transformWSRObjectSpread({file, node, icons, onError});
  } else {
    transformExternalComponentsObjectSpread({file, node, icons, onError});
  }
  onTick({
    oldIconName: oldIconsCache,
    newIconName: icons.map(icon => getNewIconName(icon.name)).join(','),
    where: file.path,
    fullValue: node.value.source.value
  });
};

/* import SomeIcon from './Icons/dist/components/SomIcon' to 'import SomeNewIcon from ./icons/SomeIcon'  */
module.exports.transformImports = ({file, api, onError, onTick}) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const imports = root.find(j.ImportDeclaration);
  imports
    .filter(node => getOldIconName(node))
    .forEach(node => changeGeneralImportsInFile({node, file, onError, onTick}));
  imports
    .filter(node => getListOfImportedIcons(node))
    .forEach(node => changeSpreadImportsInFile({node, file, onError, onTick}));
  return root;
};

/* eslint-disable operator-linebreak */
const {renameIdentifier, getOldIconName, getNewIconName, getListOfImportedIcons} = require('./utils');

const transformWSRComponents = ({node, oldIconName, newIconName}) => {
  const pathes = {
    commonSrcPath: `/src/Icons/dist/components/${oldIconName}`,
    commonPath: `/Icons/dist/components/${oldIconName}`,
    indexSrcPath: `/src/Icons/dist/index`,
    indexPath: `/Icons/dist/index`,
    rootSrcPath: `/src/Icons`,
    rootPath: `/Icons`
  };
  const {value} = node.value.source;
  const isWSRMigration = process.env.MIGRATION === 'wix-style-react';

  if (value.endsWith(pathes.indexSrcPath)) {
    node.value.source.value = isWSRMigration
      ? value.replace(pathes.indexSrcPath, '/icons')
      : 'wix-style-react/icons';
  } else if (value.endsWith(pathes.indexPath)) {
    node.value.source.value = isWSRMigration
      ? value.replace(pathes.indexPath, '/../icons')
      : 'wix-style-react/icons';
  } else if (value.endsWith(pathes.rootSrcPath)) {
    node.value.source.value = isWSRMigration
      ? value.replace(pathes.rootSrcPath, '/icons')
      : 'wix-style-react/icons';
  } else if (value.endsWith(pathes.rootPath)) {
    node.value.source.value = isWSRMigration
      ? value.replace(pathes.rootPath, '/../icons')
      : 'wix-style-react/icons';
  } else if (value.endsWith(pathes.commonSrcPath)) {
    node.value.source.value = isWSRMigration
      ? value.replace(pathes.commonSrcPath, `/icons/${newIconName}`)
      : `wix-style-react/icons/${newIconName}`;
  } else if (value.endsWith(pathes.commonPath)) {
    node.value.source.value = isWSRMigration
      ? value.replace(pathes.commonPath, `/../icons/${newIconName}`)
      : `wix-style-react/icons/${newIconName}`;
  }
};

const updateImports = ({root, j, file, onError, onTick}) => {
  const iconNames = [];
  const imports = root.find(j.ImportDeclaration);
  imports
    .forEach(node => {
      const iconName = getOldIconName(node);
      const importedIconNames = (getListOfImportedIcons(node) || []).map(icon => icon.name);
      if (iconName) {
        importedIconNames.push(iconName);
      }
      importedIconNames.forEach(name => {
        const newIconName = getNewIconName(name);
        const logObj = {
          newIconName,
          oldIconName: name,
          where: file.path,
          fullValue: node.value.source.value
        };
        if (newIconName) {
          onTick(logObj);
        } else {
          onError(logObj);
        }
      });
      if (importedIconNames.length) {
        const newIconName = getNewIconName(iconName);
        iconNames.push(...importedIconNames);
        transformWSRComponents({node, newIconName, oldIconName: iconName});
      }
    });

  return iconNames;
};

const updateIdentifiers = ({root, j, iconNames}) => {
  iconNames.forEach(name => {
    root
      .find(j.Identifier, {name})
      .paths()
      .forEach(path => {
        const newIconName = getNewIconName(name);
        if (newIconName) {
          renameIdentifier(path, newIconName.replace('system/', ''), j);
        }
      });
  });
};

/* import SomeIcon from './Icons/dist/components/SomIcon' to 'import SomeNewIcon from ./icons/SomeIcon'  */
module.exports.transformFile = ({file, api, onError, onTick}) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const iconNames = updateImports({root, j, file, onTick, onError});
  updateIdentifiers({root, j, iconNames});
  return root;
};

// TODO handle wix-style-react/Icons -> wix-style-react/icons

const fs = require('fs');
const MODULE_NAME = 'wix-ui-icons-common';
const ICONS_DIR = './icons2';

const getListOfFilesInFolder = dirname => fs.readdirSync(dirname);

const byJsExtension = filename => filename.endsWith('.js');

const createIconProxyFileContent = iconName => `module.exports = require('wix-ui-icons-common/${iconName}');\n`;

const createFile = (name, content, pathToFile) => fs.writeFileSync(pathToFile + name, content);

const getListOfCommonIcons = moduleName => {
  const pathToModuleRoot = require.resolve(moduleName);
  const pathToModuleFolder = pathToModuleRoot
    .substr(0, pathToModuleRoot.indexOf('wix-ui-icons-common') + moduleName.length);

  return getListOfFilesInFolder(pathToModuleFolder).filter(byJsExtension);
};

const getListOfSystemIcons = moduleName => {
  const pathToModuleRoot = require.resolve(moduleName);
  const pathToModuleFolder = pathToModuleRoot
    .substr(0, pathToModuleRoot.indexOf('wix-ui-icons-common') + moduleName.length);

  return getListOfFilesInFolder(`${pathToModuleFolder}/system`).filter(byJsExtension);
};

const prepareSystemIconsProxyFiles = moduleName => {
  const listOfSystemIcons = getListOfSystemIcons(moduleName);
  return listOfSystemIcons.reduce((res, iconName) => {
    res[iconName] = createIconProxyFileContent(`system/${iconName}`);
    return res;
  }, {});
};

const prepareCommonIconsProxyFiles = moduleName => {
  const listOfCommonIcons = getListOfCommonIcons(moduleName);
  return listOfCommonIcons.reduce((res, iconName) => {
    res[iconName] = createIconProxyFileContent(iconName);
    return res;
  }, {});
};

const createIconsProxyFiles = (moduleName, iconsDir) => {
  const commonIconProxyFileContents = prepareCommonIconsProxyFiles(moduleName);
  const systemProxyFileContents = prepareSystemIconsProxyFiles(moduleName);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }
  if (!fs.existsSync(`${iconsDir}/system`)) {
    fs.mkdirSync(`${iconsDir}/system`);
  }
  Object.keys(commonIconProxyFileContents)
    .forEach(iconName => createFile(iconName, commonIconProxyFileContents[iconName], `${iconsDir}/`));
  Object.keys(systemProxyFileContents)
    .forEach(iconName => createFile(iconName, systemProxyFileContents[iconName], `${iconsDir}/system/`));
};

createIconsProxyFiles(MODULE_NAME, ICONS_DIR);

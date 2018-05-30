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
console.log(oldToNewIconsNamesMap);

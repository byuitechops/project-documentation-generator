/*************************************************************************

*************************************************************************/
const fs = require('fs');
const path = require('path');
module.exports = function getCurrentPackageJson (packageJsonName = 'package.json') {
    var packageJsonLocation = path.resolve('./', packageJsonName);
    if (fs.existsSync(packageJsonLocation)){
        let packageJson = fs.readFileSync(packageJsonLocation);
        packageJson = JSON.parse(packageJson);
        return packageJson;
    } else {
        throw 'package.json doesn\'t exist. Run \nnpm init\nthen try running again.';
    }

};
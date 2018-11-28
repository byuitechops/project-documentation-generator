const fs = require('fs');
const path = require('path');

var thisFolderInfo = {
    isGitRepository () {
        return fs.existsSync(path.resolve('./.git')) ? fs.statSync(path.resolve('./.git')).isDirectory() ? true : false : false;
    },
    
    currentDirName () {
        return path.parse(path.resolve('./')).name;
    },

    hasUpdatedPackageInfo (packageJson) {
        packageJson = fs.readFileSync(path.resolve('./package.json'));
        packageJson = JSON.parse(packageJson); 
        if (packageJson.byui === undefined) return false;
        return packageJson.byui;
    }
};

module.exports = thisFolderInfo;
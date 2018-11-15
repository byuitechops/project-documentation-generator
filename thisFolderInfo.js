const fs = require('fs');
const path = require('path');

var thisFolderInfo = {
    isGitRepository () {
        return fs.existsSync(path.resolve('./.git')) ? fs.statSync(path.resolve('./.git')).isDirectory() ? true : false : false;
    },
    
    currentDirName () {
        return path.parse(path.resolve('./')).name;
    }
};

module.exports = thisFolderInfo;
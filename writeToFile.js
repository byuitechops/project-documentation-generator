const fs = require('fs');
const path = require('path');
const thisFolderInfo = require('./thisFolderInfo.js');

module.exports = function writeToFile(repositoryName, fileContents, fileName) {

    if (thisFolderInfo.isGitRepository() && thisFolderInfo.currentDirName() === repositoryName) {
        let outputLocation = path.resolve(path.join('./', fileName));
        fs.writeFile(outputLocation, fileContents, function (err) {
            if (err) {
                console.log('ERRoR: ' + err);
                return;
            }
        });
    }
};
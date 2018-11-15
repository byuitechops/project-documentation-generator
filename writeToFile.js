const fs = require('fs');
const path = require('path');
const thisFolderInfo = require('./thisFolderInfo.js');

module.exports = function writeToFile(repositoryName, fileContents, fileExtension) {
    let projectInfoNamingStandard = '/project-info' + fileExtension;

    if (thisFolderInfo.isGitRepository() && thisFolderInfo.currentDirName() === repositoryName) {
        let outputLocation = path.resolve(path.join('./', projectInfoNamingStandard));
        fs.writeFile(outputLocation, fileContents, function (err) {
            if (err) {
                console.log('ERRoR: ' + err);
                return;
            }
            console.log(`\nFile Written Successfully to ${outputLocation}`);
            console.log('feel free to use this command to commit these files to your repository:');
            console.log('git commit -a -m "Added project-documentation through generator"\n');
        });
    } else {
        let outputDirectory = './output';
        let repositoryDirectory = './output/' + repositoryName;
        let outputLocation = path.resolve(path.join(repositoryDirectory, projectInfoNamingStandard));
        //If the output folder does not exist, create it
        if (!fs.existsSync(outputDirectory)) fs.mkdirSync(outputDirectory);

        //If the repository folder does not exist, create it
        if (!fs.existsSync(repositoryDirectory)) fs.mkdirSync(repositoryDirectory);

        //Write the file to the output folder
        fs.writeFile(outputLocation, fileContents, function (err) {
            if (err) {
                console.log('ERRoR: ' + err);
                return;
            }
            console.log(`\nFile Written Successfully to ${outputLocation}`);
        });
    }
};
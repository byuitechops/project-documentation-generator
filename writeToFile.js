const fs = require('fs');
const path = require('path');

module.exports = function writeToFile(repositoryName, fileContents, fileExtension) {
    let projectInfoNamingStandard = '/project-info' + fileExtension;

    let dotGitExists = fs.existsSync(path.resolve('./.git')) ? fs.statSync(path.resolve('./.git')).isDirectory() ? true : false : false;
    let currentDirName = path.parse(path.resolve('./')).name;

    if (dotGitExists && currentDirName === repositoryName) {
        fs.writeFile(path.join('./', projectInfoNamingStandard), fileContents, function (err) {
            if (err) {
                console.log('ERROR: ' + err);
                return;
            }
            console.log(`\n${projectInfoNamingStandard} Written Successfully`);
            console.log('feel free to use this to commit these files to your repository');
            console.log('git commit -a -m "Added project-documentation through generator"\n');
        });
    } else {
        var outputDirectory = './output';
        var repositoryDirectory = './output/' + repositoryName;

        //If the output folder does not exist, create it
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory);
        }

        //If the repository folder does not exist, create it
        if (!fs.existsSync(repositoryDirectory)) {
            fs.mkdirSync(repositoryDirectory);
        }

        //Write the file to the output folder
        fs.writeFile(path.join(repositoryDirectory, projectInfoNamingStandard), fileContents, function (err) {
            if (err) {
                console.log('ERROR: ' + err);
                return;
            }
            console.log(`${projectInfoNamingStandard} Written Successfully`);
        });
    }

};
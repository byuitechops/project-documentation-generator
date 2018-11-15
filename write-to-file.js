const fs = require('fs');

module.exports = function writeToFile(repositoryName, fileContents, fileExtension) {

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
    fs.writeFile(repositoryDirectory + '/project-info.' + fileExtension, fileContents, function (err) {
        if (err) {
            console.log('ERROR: ' + err);
            return;
        }
        console.log('File Written Successfully');
    });


}
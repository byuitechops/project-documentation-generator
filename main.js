const writeToFile = require('./write-to-file.js');
const jsonToMd = require('./make-md.js');

function generateFiles() {

    const mdExt = 'md';
    const jsonExt = 'json';

    //1. Call the prompt function and put the JSON object returned into a variable
    var jsonFile = ""; //substitue "" with name of prompt function.

    //2. Convert the JSON object to an MD string and save it to a variable
    var mdFile = jsonToMd(jsonFile);

    //3. Output the jsonFile to a folder
    writeToFile(jsonFile.title, jsonFile, jsonExt);

    //4. Output the mdFile to the same folder
    writeToFile(jsonFile.title, mdFile, mdExt);


    return;

}
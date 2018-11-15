#!/usr/bin/env node
// Above line is required for npm to make a symlink to this file to run in the command line
// See https://docs.npmjs.com/files/package.json#bin for details
const getInput = require('./getInput.js');
const writeToFile = require('./writeToFile.js');
const jsonToMd = require('./makeMd.js');

async function generateFiles() {

    const mdExt = '.md';
    const jsonExt = '.json';

    //1. Call the prompt function and put the JSON object returned into a variable
    var jsonFile = await getInput();

    //2. Convert the JSON object to an MD string and save it to a variable
    var mdFile = jsonToMd(jsonFile);

    //3. Output the jsonFile to a folder
    writeToFile(jsonFile.title, JSON.stringify(jsonFile, null, 4), jsonExt);

    //4. Output the mdFile to the same folder
    writeToFile(jsonFile.title, mdFile, mdExt);

    return;
}

generateFiles();
#!/usr/bin/env node
// Above line is required for npm to make a symlink to this file to run in the command line
// See https://docs.npmjs.com/files/package.json#bin for details
const fs = require('fs');
const path = require('path');
const thisFolderInfo = require('./thisFolderInfo.js');
const getInput = require('./getInput.js');
const writeToFile = require('./writeToFile.js');
const jsonToMd = require('./makeMd.js');
const getCurrentPackageJson = require('./getCurrentPackageJson.js');
const updatePackageJson = require('./updatePackageJson.js');


async function generateFiles() {
    // 1. Call the prompt function and put the JSON object returned into a variable
    var userInput = await getInput();

    // 2. Update the package.json with the latest userInput
    var packageJson = getCurrentPackageJson();
    updatePackageJson(packageJson, userInput);
    writeToFile(userInput.title, JSON.stringify(packageJson, null, 4), 'package.json');

    // 3. Convert the input JSON object to an MD string and save it to a variable
    var mdFile = jsonToMd(userInput);

    // 4. Output the mdFile to the currentFolder
    writeToFile(userInput.title, mdFile, 'project-info.md');

    // 5. Print completion message:
    console.log('Process Completed.');
    console.log('Copy and paste this command to commit these changes');
    console.log('git commit -a -m "Added/Updated documentation on package.json and project-info.md"');
    return;
}

if (thisFolderInfo.isGitRepository()) {
    generateFiles();
} else {
    console.log('You don\'t appear to be in a git repository. Please navigate to a git directory and try again.');
}
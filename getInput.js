const cliPrompts = require('./cliPrompts.js');
const specifyObjectKeys = require('./specifyObjectKeys.js');
const inquirer = require('inquirer');
const moment = require('moment');

module.exports = async function () {
    var keysToKeep = [
        'title',
        'repositoryLink',
        'parentProject',
        'parentProjectLink',
        'description',
        'purpose',
        'stakeholders',
        'size',
    ];
    var inputs = specifyObjectKeys(await inquirer.prompt(cliPrompts), keysToKeep);
    inputs.timeThisDocCreated = moment().format('YYYY MMMM DD, hh:mm A');
    return inputs;
};
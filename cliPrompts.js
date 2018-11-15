const url = require('url');
const thisFolderInfo = require('./thisFolderInfo.js');
const baseUrl = 'https://github.com/byuitechops/';

function messagePadEnd (string) {
    let padding = 48;
    return string.padEnd(padding);
}

function noBlank (input, answerHash) {
    if (input !== undefined && input.replace(/\s/g, '') !== '') return true;
    else return 'this cannot be left blank!';
}

var nameQuestion = {
    name: 'title',
    type: 'input',
    message: messagePadEnd('Enter the (exact) name of the repository'),
    suffix: ':',
    transformer: (input, answerHash) => { // add link attribute to answers hash
        answerHash.repositoryLink = new url.URL(input, baseUrl).href;
        return input;
    },
    validate: noBlank,
    default: (answerHash) => {
        if (thisFolderInfo.isGitRepository()) {
            return thisFolderInfo.currentDirName();
        }
        return;
    }
};

var hasParentProjectQuestion = {
    name: 'hasParentProject',
    type: 'confirm',
    message: messagePadEnd('Is this a child-repository?'),
    suffix: ':',
    default: false,
};

var parentProjectNameQuestion = {
    name: 'parentProject',
    type: 'input',
    message: messagePadEnd('Enter the (exact) name of the parent repository'),
    suffix: ':',
    transformer: (input, answerHash) => { // add parentProjectLink attribute to answers hash
        answerHash.parentProjectLink = new url.URL(input, baseUrl).href;
        return input;
    },
    when: (answerHash) => answerHash.hasParentProject,
    validate: noBlank,
};

var descriptionQuestion = {
    name: 'description',
    type: 'input',
    message: messagePadEnd('Enter a description of what this repository does'),
    suffix: ':',
    validate: noBlank,
};

var purposeQuestion = {
    name: 'purpose',
    type: 'input',
    message: messagePadEnd('Why did our team work on this project?'),
    suffix: ':',
    validate: noBlank,
};

var stakeholdersQuestion = {
    name: 'stakeholders',
    type: 'input',
    message: messagePadEnd('Who is the recipient / stakeholder of this tool?'),
    suffix: ':',
    validate: noBlank,
};

var sizeValueToPromptAdapter = {
    mini:   'mini   - less than 1 week to complete',
    small:  'small  - less than 1 month to complete',
    medium: 'medium - less than 2 months to complete',
    large:  'large  - 2 months or more to complete',
};
var sizePromptToValueAdapter = {
    [sizeValueToPromptAdapter.mini]: 'mini',
    [sizeValueToPromptAdapter.small]: 'small',
    [sizeValueToPromptAdapter.medium]: 'medium',
    [sizeValueToPromptAdapter.large]: 'large',
};
var sizeQuestion = {
    name: 'size',
    type: 'list',
    message: messagePadEnd('What is the size of this project?'),
    suffix: ':',
    choices: Object.values(sizeValueToPromptAdapter),
    transformer: (input, answerHash) => sizePromptToValueAdapter[input],
    filter: (input) => sizePromptToValueAdapter[input],
};

module.exports = [
    nameQuestion,
    hasParentProjectQuestion,
    parentProjectNameQuestion,
    descriptionQuestion,
    purposeQuestion,
    stakeholdersQuestion,
    sizeQuestion,
];
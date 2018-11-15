const assert = require('assert');
const writeToFile = require('./writeToFile.js');
const jsonToMd = require('./makeMd.js');

function testJsonToMd() {
    var jsonObject = {
        title: "update-course-images",
        repositoryLink: "https://www.google.com",
        parentProject: null,
        parentProjectLink: "https://www.google.com",
        description: "This project is really hard",
        purpose: "This project will make us money",
        stakeholders: "BYU-Idaho both students and faculty",
        size: "large",
        timeThisDocCreated: "Nov 14th, 2018"
    }


    var mdObject = jsonToMd(JSON.stringify(jsonObject));

    //assert(mdObject);

    //TODO: finish writing tests for the methods.



}
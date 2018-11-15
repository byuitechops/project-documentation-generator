/**************************************************
 * Function: jsonToMd
 * 
 * Description: make-md takes a JSON object 
 * (in the format defined below), and outputs an md file
 * (in the format defined below).
 * 
 * Input: A JSON file in this format:
 * 
 * {
 *   "title": "[from CLI]",
 *   "repositoryLink": "[from title]",
 *   "parentProject": "[from CLI]",
 *   "parentProjectLink": "[from parentProject]"
 *   "description": "[from CLI]",
 *   "purpose": "[from CLI]",
 *   "stakeholders": "[from CLI]",
 *   "size": "[from CLI (options defined)]"
 *   "timeThisDocCreated": "[grab the date and time of Now]"
 * }
 *  
 * Output: An MD file in this format,
 * Where information enclosed in curly brackets ({ }) is taken from the json file or
 * from some other external input:
 * 
 * "#{title}
 *  [Go to the Repository]({repositoryLink})
 *  
 *  This subproject is part of the [{parentProject}]({parentProjectLink}) project.
 *  
 *  **Description**
 *  > {description}
 *  
 *  **Purpose**
 *  > {purpose}
 * 
 *  **Stakeholders**
 *  > {stakeholders}
 * 
 *  **Size**
 *  > **{size}** - {what does the size mean?}
 * 
 * This document created: {timeThisDocCreated}.
 * 
 * ************************************************/

module.exports = function jsonToMd(jsonFile) {
    //Create the sizes object (size to definition key-value map).
    var sizesAndDefinitions = {
        large: "2 months or more to complete",
        medium: "less than 2 months to complete",
        small: "less than 1 month to complete",
        mini: "less than 1 week to complete"
    };

    //Parse the input json file into an object
    var projectData = JSON.parse(jsonFile);

    //Generate and return the markdown string
    var markdown =
        `# ${makeTitleNice(projectData.title)}
[Go to the Repository](${projectData.repositoryLink})

${projectData.parentProject ? ("This is part of the [" + projectData.parentProject + "](" + projectData.parentProjectLink + ") project.\n\n") : ("")}**Description**
> ${projectData.description}    

**Purpose**
> ${projectData.purpose}
                
**Stakeholders**
> ${projectData.stakeholders}
                    
**Size**
> **${projectData.size}** - ${sizesAndDefinitions[projectData.size.toLowerCase()]}


This document created: ${projectData.timeThisDocCreated}.`;

    return markdown;
}

/**************************************************
 * Function: makeTitleNice
 * 
 * Description: Converts a title from a repository 
 * name to a better formatted title string.
 * 
 * Input: repo name in format: update-course-images
 * 
 * Output: title in format: Update Course Images
 * ************************************************/
function makeTitleNice(inputTitle) {

    //Capture each word of the title and put it in an array
    //'update-course-images' becomes ['update', 'course', 'images']
    var titleWords = inputTitle.split('-');

    //Capitalize each word
    //['update', 'course', 'images'] becomes ['Update', 'Course', 'Images']
    var titleWordsCapitalized = titleWords.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    });

    //Convert back to a string and return
    //['Update', 'Course', 'Images'] becomes 'Update Course Images'
    return titleWordsCapitalized.join(' ');

}


//Test object to test the jsonToMd method
var testObject = {
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

//console.log(jsonToMd(JSON.stringify(testObject)));
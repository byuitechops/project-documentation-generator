/**************************************************
 * Title: Make-Md
 * 
 * Description: make-md takes a JSON object 
 * (in the format defined below), and outputs an md file
 * (in the format defined below).
 * 
 * Input: A JSON file in this format:
 * 
 * {
 *	"title": "[from URL]",
 *	"repository-link": "[from URL]",
 *	"parent-project": "[from CLI]",
 *	"description": "[from CLI]",
 *	"purpose": "[from CLI]",
 *	"stakeholders": "[from CLI]",
 *	"size": "[from CLI (options defined)]"
 * }
 *  
 * Output: An MD file in this format:
 * Where information enclosed in square brackets is taken from the json file 
 * "#[title]
 *  link to repository [repository-link]
 *    
 * 
 * 
 * 
 * ************************************************/
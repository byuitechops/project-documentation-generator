/*************************************************************************

*************************************************************************/
module.exports = function updatePackageJsonObject (packageJson, updatedInfoObject) {
    if (packageJson.byui === undefined) packageJson.byui = {};
    Object.assign(packageJson.byui, updatedInfoObject);
    return packageJson;
};
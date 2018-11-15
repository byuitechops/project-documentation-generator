/*************************************************************************
 * 
 *************************************************************************/
module.exports = function specifyObjectKeysWrapper(object = {}, keysToKeep = []) {
    // This Function is faster, but may create keys on the output that didn't exist on the original object
    function specifyObjectKeys(object, keysToKeep = []) {
        return keysToKeep.reduce((acc, keyToKeep) => {
            acc[keyToKeep] = object[keyToKeep];
            return acc;
        }, {});
    }

    // Make sure we are limiting keys on an object or array
    // If not implicitly convert the value to an object
    if (object === null || typeof object !== 'object')
        object = {
            [object]: object
        }; 
    // Make sure the keys to keep come in the form of an array
    if (!Array.isArray(keysToKeep))
        throw 'in limitObjectKeys, the second parameter must be an array';
    return specifyObjectKeys(object, keysToKeep);
};

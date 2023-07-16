"use strict";
function moduleExists(moduleName) {
    try {
        require.resolve(moduleName);
        return true;
    }
    catch (error) {
        return false;
    }
}
module.exports = {
    moduleExists
};

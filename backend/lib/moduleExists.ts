function moduleExists(moduleName:string) {
    try {
      require.resolve(moduleName);
      return true;
    } catch (error) {
      return false;
    }
  }

module.exports = {
  moduleExists
}
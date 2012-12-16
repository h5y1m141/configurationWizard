var forwardCommand;

forwardCommand = (function() {

  function forwardCommand() {}

  forwardCommand.prototype.execute = function() {
    return Ti.API.info("forwardCommand start");
  };

  return forwardCommand;

})();

module.exports = forwardCommand;

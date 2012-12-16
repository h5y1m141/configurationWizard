var Client;

Client = (function() {

  function Client() {
    var Menu, screen;
    Menu = require("menu");
    this.forwardCommand = require("forwardCommand");
    this.goCommand = require("goCommand");
    this.Command = require("command");
    screen = require("screen");
    this.items = new screen();
    this.menu = new Menu();
  }

  Client.prototype.useMenu = function(selectedNumber) {
    this.menu.addCommands(new this.Command(this.items));
    return this.menu.run(selectedNumber);
  };

  return Client;

})();

module.exports = Client;

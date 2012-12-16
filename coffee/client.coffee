class Client
  constructor:() ->
    Menu = require("menu")
    @forwardCommand = require("forwardCommand")
    @goCommand = require("goCommand")
    @Command = require("command")
    screen = require("screen")
    @items = new screen()    
    @menu = new Menu()
    

  useMenu:(selectedNumber) ->
    @menu.addCommands(new @Command(@items))    
    @menu.run(selectedNumber)


    
module.exports = Client
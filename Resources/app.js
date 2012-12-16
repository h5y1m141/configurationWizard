var Client, Win, client, counter, win;

Win = require("window");

win = new Win();

Client = require("client");

client = new Client();

counter = 1;

client.useMenu(counter);

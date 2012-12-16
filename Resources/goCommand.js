var goCommand;

goCommand = (function() {

  function goCommand(obj) {
    this.items = obj;
  }

  goCommand.prototype.execute = function(menuList) {
    this.items.label.text = menuList.description;
    this.items.backBtn.title = menuList.back;
    this.items.nextBtn.title = menuList.next;
    counter++;
    return Ti.API.info("goCommand start. counter is " + counter);
  };

  return goCommand;

})();

module.exports = goCommand;

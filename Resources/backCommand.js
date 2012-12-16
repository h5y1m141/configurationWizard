var backCommand;

backCommand = (function() {

  function backCommand(obj) {
    this.items = obj;
  }

  backCommand.prototype.execute = function(menuList) {
    this.items.label.text = menuList.description;
    this.items.backBtn.title = menuList.back;
    this.items.nextBtn.title = menuList.next;
    this.items.nextBtn.addEventListener('click', function(e) {
      return counter++;
    });
    this.items.backBtn.addEventListener('click', function(e) {
      return counter--;
    });
    return Ti.API.info("backCommand start. counter is " + counter);
  };

  return backCommand;

})();

module.exports = backCommand;

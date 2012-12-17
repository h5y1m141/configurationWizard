var Command;

Command = (function() {

  function Command(obj) {
    this.items = obj;
    this.menuList = [
      {
        description: "ようこそ",
        backCommand: null,
        nextCommand: 1
      }, {
        description: "この画面では基本的な操作方法について解説します",
        backCommand: 0,
        nextCommand: 2
      }, {
        description: "この画面では応用編について開設します",
        backCommand: 1,
        nextCommand: 3
      }, {
        description: "アプリ起動します",
        backCommand: 2,
        nextCommand: null
      }
    ];
  }

  Command.prototype.moveNext = function(selectedNumber) {
    this._setValue(selectedNumber);
    this._buttonShowFlg();
    return this.items;
  };

  Command.prototype.moveBack = function(selectedNumber) {
    this._setValue(selectedNumber);
    this._buttonShowFlg();
    return this.items;
  };

  Command.prototype.execute = function(selectedNumber) {
    var self;
    self = this;
    this._setValue(selectedNumber);
    this._buttonShowFlg();
    this.items.backBtn.title = "前に戻る";
    this.items.nextBtn.title = "次に進む";
    this.items.nextBtn.addEventListener('click', function(e) {
      if (e.source.className !== null) {
        return self.moveNext(e.source.className);
      }
    });
    this.items.backBtn.addEventListener('click', function(e) {
      if (e.source.className !== null) {
        return self.moveBack(e.source.className);
      }
    });
    if (this.items.backBtn.title !== null) {
      win.add(this.items.backBtn);
    }
    if (this.items.nextBtn.title !== null) {
      win.add(this.items.nextBtn);
    }
    this.items.currentView.add(this.items.label);
    win.add(this.items.currentView);
    return win.open();
  };

  Command.prototype._setValue = function(selectedNumber) {
    this.items.label.text = this.menuList[selectedNumber].description;
    this.items.nextBtn.className = this.menuList[selectedNumber].nextCommand;
    this.items.backBtn.className = this.menuList[selectedNumber].backCommand;
    Ti.API.info("" + this.items.backBtn.className);
    return true;
  };

  Command.prototype._buttonShowFlg = function() {
    if (this.items.nextBtn.className === null) {
      this.items.nextBtn.hide();
    } else {
      this.items.nextBtn.show();
    }
    if (this.items.backBtn.className === null) {
      return this.items.backBtn.hide();
    } else {
      return this.items.backBtn.show();
    }
  };

  return Command;

})();

module.exports = Command;

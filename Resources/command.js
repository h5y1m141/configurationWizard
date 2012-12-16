var Command;

Command = (function() {

  function Command(obj) {
    this.items = obj;
    this.menuList = [
      {
        back: null,
        next: "次に進む",
        description: "ようこそ",
        backCommand: null,
        nextCommand: 1
      }, {
        back: "最初の画面に戻る",
        next: "次に進む",
        description: "この画面では基本的な操作方法について解説します",
        backCommand: 0,
        nextCommand: 2
      }, {
        back: "基本的な操作方法の画面に戻る",
        next: "次に進む",
        description: "この画面では応用編について開設します",
        backCommand: 1,
        nextCommand: 3
      }, {
        back: "応用編の画面に戻る",
        next: null,
        description: "アプリ起動します",
        backCommand: 2,
        nextCommand: null
      }
    ];
  }

  Command.prototype.refresh = function(selectedNumber) {
    this.items.label.text = this.menuList[selectedNumber].description;
    this.items.backBtn.className = this.menuList[selectedNumber].backCommand;
    this.items.nextBtn.className = this.menuList[selectedNumber].nextCommand;
    if (this.items.backBtn.className === null) {
      this.items.backBtn.hide();
    } else {
      this.items.backBtn.show();
    }
    if (this.items.nextBtn.className === null) {
      this.items.nextBtn.hide();
    } else {
      this.items.nextBtn.show();
    }
    return this.items;
  };

  Command.prototype.execute = function(selectedNumber) {
    var self;
    self = this;
    this.items.label.text = this.menuList[selectedNumber].description;
    this.items.backBtn.className = this.menuList[selectedNumber].backCommand;
    this.items.nextBtn.className = this.menuList[selectedNumber].nextCommand;
    this.items.backBtn.title = "前に戻る";
    this.items.nextBtn.title = "次に進む";
    this.items.nextBtn.addEventListener('click', function(e) {
      if (e.source.className !== null) {
        return self.refresh(e.source.className);
      }
    });
    this.items.backBtn.addEventListener('click', function(e) {
      if (e.source.className !== null) {
        return self.refresh(e.source.className);
      }
    });
    if (this.items.backBtn.title !== null) {
      win.add(this.items.backBtn);
    }
    if (this.items.nextBtn.title !== null) {
      win.add(this.items.nextBtn);
    }
    win.add(this.items.label);
    return win.open();
  };

  return Command;

})();

module.exports = Command;

var Menu;

Menu = (function() {

  function Menu(list) {
    this.commands = [];
    this.previous_command = null;
    this.menuList = [
      {
        back: null,
        next: "次に進む",
        description: "ようこそ"
      }, {
        back: "最初の画面に戻る",
        next: "次に進む",
        description: "この画面では基本的な操作方法について解説します"
      }, {
        back: "基本的な操作方法の画面に戻る",
        next: "次に進む",
        description: "この画面では応用編について開設します"
      }, {
        back: "応用編の画面に戻る",
        next: null,
        description: "アプリ起動します"
      }
    ];
  }

  Menu.prototype.addCommands = function(command) {
    return this.commands.push(command);
  };

  Menu.prototype.run = function(selectedNumber) {
    var command, _i, _len, _ref, _results;
    _ref = this.commands;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      command = _ref[_i];
      _results.push(command.execute(selectedNumber));
    }
    return _results;
  };

  return Menu;

})();

module.exports = Menu;

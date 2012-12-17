var screen;

screen = (function() {

  function screen() {
    this.label = Ti.UI.createLabel({
      textAlign: 1,
      color: "#222",
      width: 300,
      font: {
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontWeight: 'bold'
      },
      height: 80,
      top: 50,
      left: 5
    });
    this.backBtn = Ti.UI.createButton({
      width: 150,
      height: 30,
      top: 50,
      left: 10,
      color: "#222"
    });
    this.nextBtn = Ti.UI.createButton({
      width: 150,
      height: 30,
      top: 50,
      left: 165,
      color: "#222"
    });
    this.currentView = Ti.UI.createView({
      width: 300,
      height: 300,
      backgroundColor: '#ededed',
      top: 120,
      left: 10,
      zIndex: 1,
      borderRadius: 10
    });
    this.nextShowView = {
      width: 300,
      height: 300,
      backgroundColor: "#ccc",
      top: 120,
      left: 120,
      zIndex: 2,
      visible: false,
      borderRadius: 5
    };
  }

  screen.prototype.editItems = function(obj) {
    var items;
    this.label.text = obj.description;
    this.backBtn.title = obj.back;
    this.nextBtn.title = obj.next;
    items = {
      label: this.label,
      backBtn: this.backBtn,
      nextBtn: this.nextBtn
    };
    return items;
  };

  return screen;

})();

module.exports = screen;

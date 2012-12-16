var screen;

screen = (function() {

  function screen() {
    this.label = Ti.UI.createLabel({
      color: "#222",
      width: 250,
      font: {
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontWeight: 'bold'
      },
      height: 80,
      top: 20,
      left: 30
    });
    this.backBtn = Ti.UI.createButton({
      width: 150,
      height: 30,
      top: 100,
      left: 10,
      color: "#222"
    });
    this.nextBtn = Ti.UI.createButton({
      width: 150,
      height: 30,
      top: 100,
      left: 165,
      color: "#222"
    });
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

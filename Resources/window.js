var window;

window = (function() {

  function window() {
    var win;
    win = Ti.UI.createWindow({
      title: "commandPattern",
      barColor: '#59BB0C',
      backgroundColor: "#FFF"
    });
    return win;
  }

  return window;

})();

module.exports = window;


module.exports = function(event) {
  var x = (event.layerX || event.clientX || 0);
  var y = (event.layerY || event.clientY || 0);
  if (event.touches && event.touches.length) {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  }
  return { x, y };
};

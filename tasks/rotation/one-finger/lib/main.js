// Generated by CoffeeScript 1.6.3
(function() {
  var R2D, angle, center, root, rotate, rotation, save, set, setStartAngle, startAngle, trial;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  trial = 0;

  angle = 0;

  rotation = 0;

  startAngle = 0;

  center = {
    x: 0,
    y: 0
  };

  document.ontouchmove = function(e) {
    return e.preventDefault();
  };

  root.init = function() {
    set(trial);
    target.addEventListener("touchstart", setStartAngle, false);
    target.addEventListener("touchmove", rotate, false);
    return target.addEventListener("touchend", save, false);
  };

  set = function(i) {
    var deg, dir, image, _ref;
    _ref = trials[i], image = _ref.image, dir = _ref.dir, deg = _ref.deg;
    target.style.backgroundImage = "url(\"images/" + dir + "/" + image + ".gif\")";
    target.style.webkitTransform = "rotate(" + deg + "deg)";
    return angle = deg;
  };

  R2D = 180 / Math.PI;

  setStartAngle = function(e) {
    var height, left, top, touch, width, x, y, _ref;
    e.preventDefault();
    _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
    center = {
      x: left + (width / 2),
      y: top + (height / 2)
    };
    touch = e.touches[0];
    x = touch.clientX - center.x;
    y = touch.clientY - center.y;
    return startAngle = R2D * Math.atan2(y, x);
  };

  rotate = function(e) {
    var d, touch, x, y;
    e.preventDefault();
    touch = e.touches[0];
    x = touch.clientX - center.x;
    y = touch.clientY - center.y;
    d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    return this.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  };

  save = function() {
    return angle += rotation;
  };

  root.prev = function() {
    if (trial > 0) {
      return set(--trial);
    }
  };

  root.next = function() {
    if (trial === trials.length - 1) {
      return alert("Congratulations, you finished the task!");
    } else {
      return set(++trial);
    }
  };

}).call(this);

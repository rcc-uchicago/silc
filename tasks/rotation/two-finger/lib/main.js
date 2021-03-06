// Generated by CoffeeScript 1.6.3
(function() {
  var angle, root, rotate, save, set, trial;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  trial = 0;

  angle = 0;

  document.ontouchmove = function(e) {
    return e.preventDefault();
  };

  root.init = function() {
    set(trial);
    target.addEventListener("gesturechange", rotate, false);
    target.addEventListener("gestureend", save, false);
    return '';
  };

  save = function(e) {
    return angle += e.rotation;
  };

  set = function(i) {
    var deg, dir, image, _ref;
    _ref = trials[i], image = _ref.image, dir = _ref.dir, deg = _ref.deg;
    target.style.backgroundImage = "url(\"images/" + dir + "/" + image + ".gif\")";
    target.style.webkitTransform = "rotate(" + deg + "deg)";
    return angle = deg;
  };

  rotate = function(e) {
    e.preventDefault();
    this.style.webkitTransform = "rotate(" + (angle + e.rotation) + "deg)";
    return '';
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

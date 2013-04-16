// Generated by CoffeeScript 1.6.2
(function() {
  var get, root, rotate, set, trial;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  trial = 0;

  get = function(id) {
    return document.getElementById(id);
  };

  document.ontouchmove = function(e) {
    return e.preventDefault();
  };

  set = function(i) {
    var box, deg, dir, image, _ref;

    _ref = trials[i], image = _ref.image, dir = _ref.dir, deg = _ref.deg;
    box = get("box");
    box.style.webkitTransitionDuration = '0s';
    box.style.backgroundImage = "url(\"images/" + dir + "/" + image + ".gif\")";
    return box.style.webkitTransform = "rotate(" + deg + "deg)";
  };

  rotate = function(e) {
    var box;

    e.preventDefault();
    box = get(this.id);
    box.style.webkitTransitionDuration = '2s';
    return box.style.webkitTransform = "rotate(0deg)";
  };

  root.prev = function() {
    if (trial > 0) {
      return set(--trial);
    }
  };

  root.next = function() {
    var switcher;

    if (trial === 0) {
      if (get("choice").checked) {
        get("box").addEventListener("click", rotate, false);
      }
      switcher = get("switch");
      switcher.style.opacity = 0;
      switcher.style.visibility = "hidden";
      set(trial);
    }
    if (trial === trials.length - 1) {
      return alert("Congratulations, you finished the task!");
    } else {
      return set(++trial);
    }
  };

}).call(this);

Mental Rotation Task
====================

The mental rotation task consists of a sequence of trials.  This sequence can be
thought of as an interactive slide show, where each trial is a slide.

To date we've implemented three variants of the task.  

In the `pair` version, each trial in the task (or "slide in the presentation") consists of two images placed side by side.  Both images are of the same animal, though they may differ in terms of their direction (i.e., left-right orientation) and angle-of-rotation.

A gesture event is attached to each trial image so that the image can be rotated with a two-finger rotation gesture.

The `solo` version is a simplified variant of this.  Only one image is presented at a time and no gesture events are attached to these standalone images.

Instead, a switch is provided prior at the first trial.  If set to "ON", trial images are auto-rotated to original position when clicked/tapped.  If set to "OFF", trial images remain static.


## Dev References

[This gist](https://gist.github.com/joyrexus/5340416) is a useful reference for iOS web app development.

[This gist](https://gist.github.com/joyrexus/5340515) contains typical config settings for your app's main page.


## To Do

Integrate `solo` and `pair` variants into single web app.

Create a login screen and log task data.

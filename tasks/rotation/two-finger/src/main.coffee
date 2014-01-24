root = exports ? this
trial = 0
angle = 0

document.ontouchmove = (e) -> e.preventDefault()  # prevent scrolling

# Runs when the web page is first opened
root.init = ->
  set trial
  # Set rotation during gestures
  target.addEventListener("gesturechange", rotate, false)
  # Preserve rotation when gesture ends
  target.addEventListener("gestureend", save, false)
  ''

# Save the angle of rotation (captured by the gesture event listener)
save = (e) -> angle += e.rotation

# Set the image and rotate based on the trial data.
#
# See `trials.coffee` for trial data made available by the global 
# `trials` variable.
set = (i) -> 
  {image, dir, deg} = trials[i]       # get trial attributes from global
  target.style.backgroundImage = "url(\"images/#{dir}/#{image}.gif\")"
  target.style.webkitTransform = "rotate(#{deg}deg)"
  angle = deg
  
# Event callback handling rotation of target element.
rotate = (e) -> 
  e.preventDefault()    # don't zoom or rotate the screen
  @style.webkitTransform = "rotate(#{ angle + e.rotation }deg)"
  ''

# Go to previous trial.
root.prev = -> set(--trial) if trial > 0

# Go to next trial.
root.next = -> 
  if trial is trials.length - 1
    alert "Congratulations, you finished the task!"
  else
    set ++trial

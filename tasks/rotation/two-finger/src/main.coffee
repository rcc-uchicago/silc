root = exports ? this
trial = 0
angle = 0         # target's current angle of rotation
rotation = 0      # amount of last rotation event
startAngle = 0    # starting angle of rotation event
center =          # center point coords of target
  x: 0
  y: 0

document.ontouchmove = (e) -> e.preventDefault()  # prevent scrolling

# Runs when the web page is first opened
root.init = ->
  set trial
  target.addEventListener("touchstart", setStartAngle, false)
  # Set rotation during touch event
  target.addEventListener("touchmove", rotate, false)
  # Preserve rotation when touch event has ended
  target.addEventListener("touchend", save, false)

# Set the image and rotate based on the trial data.
#
# See `trials.coffee` for trial data made available by the global 
# `trials` variable.
set = (i) -> 
  {image, dir, deg} = trials[i]       # get trial attributes from global
  target.style.backgroundImage = "url(\"images/#{dir}/#{image}.gif\")"
  target.style.webkitTransform = "rotate(#{deg}deg)"
  angle = deg

R2D = 180 / Math.PI   # convert radians to degrees
 
# Set the starting angle of the touch relative to target's center
setStartAngle = (e) -> 
  e.preventDefault()    # don't zoom or rotate the screen
  {top, left, height, width} = @getBoundingClientRect()
  center =
    x: left + (width/2)
    y: top + (height/2)
  touch = e.touches[0]
  x = touch.clientX - center.x
  y = touch.clientY - center.y
  startAngle = R2D * Math.atan2(y, x)

# Event callback handling rotation of target element.
rotate = (e) -> 
  e.preventDefault()    # don't zoom or rotate the screen
  touch = e.touches[0]
  x = touch.clientX - center.x
  y = touch.clientY - center.y
  d = R2D * Math.atan2(y, x)
  rotation = d - startAngle
  @style.webkitTransform = "rotate(#{angle + rotation}deg)"

# Save the final angle of rotation (captured by the touch event listener)
save = -> angle += rotation

# Go to previous trial.
root.prev = -> set(--trial) if trial > 0

# Go to next trial.
root.next = -> 
  if trial is trials.length - 1
    alert "Congratulations, you finished the task!"
  else
    set ++trial

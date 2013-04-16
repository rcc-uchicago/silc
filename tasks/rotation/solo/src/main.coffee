root = exports ? this
trial = 0
get = (id) -> document.getElementById(id)

document.ontouchmove = (e) -> e.preventDefault()  # prevent scrolling

# Set the trial image and rotate based on the trial data.
#
# See `trials.coffee` for trial data made available by the global 
# `trials` variable.
set = (i) -> 
  {image, dir, deg} = trials[i]       # get trial attributes from global
  box = get "box"
  box.style.webkitTransitionDuration = '0s'
  box.style.backgroundImage = "url(\"images/#{dir}/#{image}.gif\")"
  box.style.webkitTransform = "rotate(#{deg}deg)"
  
# Event callback to rotate element back to original position.
rotate = (e) -> 
  e.preventDefault()    # don't zoom or rotate the screen
  box = get @id
  box.style.webkitTransitionDuration = '2s'
  box.style.webkitTransform = "rotate(0deg)"

# Go to previous trial.
root.prev = -> set(--trial) if trial > 0

# Go to next trial.
root.next = -> 
  if trial == 0
    # Check if switch is "ON" to determine whether to add event listener.
    if get("choice").checked
      # If so, rotate box back to original position when clicked.
      get("box").addEventListener("click", rotate, false)
    # Hide switch.
    switcher = get "switch"
    switcher.style.opacity = 0
    switcher.style.visibility = "hidden"
    set trial
  if trial == trials.length - 1
    alert "Congratulations, you finished the task!"
  else
    set ++trial


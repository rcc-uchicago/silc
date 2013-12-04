  margin = 30
  w = 800
  h = 800
  apples = []

  $ = (select) -> document.querySelectorAll select

  draw = SVG('canvas').size(800, 800)
  background = draw.rect(w, h).fill('#586e75')
  region = (x, y) ->
    draw.rect(x, y).attr(
      fill: 'whitesmoke'
      rx: x * .15
      ry: y * .10
    )

  x = (w - margin) / 2
  y = h * .85

  left = region(x, y)
  right = region(x, y)
  right.move(x + margin, 0)

  drawApple = (cx, cy) ->
    apple = draw.image('images/apple.png', 50, 57)
      .attr(class: 'apple', cursor: '-webkit-grab')
      .data('cx', cx)
      .data('cy', cy)
      .move(cx, cy)
      .draggable()
    apples.push(apple)
    apple
      

  drawApple(i * 85 + margin, y + margin) for i in [0..8]

  reset = (e) -> 
    for apple in apples
      x = apple.data('cx')
      y = apple.data('cy')
      apple.animate().move(x, y)

  redo.addEventListener("click", reset, false)
</script>

# This just contains the `feedback` and `trial` data structures.
# For each trial, we need to know which image to use and whether,
# which direction it shoud be facing, and by how many degrees it 
# should be rotated.
root = exports ? this

# Feedback trial data.
feedback = [ 
  { image: 'horse', dir: 'left', deg: 122 },
  { image: 'horse', dir: 'left', deg: 67 },
  { image: 'fox', dir: 'left', deg: -67 },
  { image: 'fox', dir: 'left', deg: -122 } 
]

# Training trial data.
training = [ 
  { image: 'bear', dir: 'right', deg: 122 },
  { image: 'bear', dir: 'right', deg: -67 },
  { image: 'deer', dir: 'right', deg: 67 },
  { image: 'deer', dir: 'right', deg: -122 },
  { image: 'elephant', dir: 'right', deg: 67 },
  { image: 'elephant', dir: 'left', deg: -122 },
  { image: 'cow', dir: 'left', deg: 122 },
  { image: 'cow', dir: 'right', deg: -67 },
  { image: 'cat', dir: 'left', deg: -67 },
  { image: 'cat', dir: 'left', deg: 122 },
  { image: 'donkey', dir: 'left', deg: 67 },
  { image: 'donkey', dir: 'left', deg: -122 },
  { image: 'dog', dir: 'right', deg: -122 },
  { image: 'dog', dir: 'left', deg: 67 },
  { image: 'camel', dir: 'right', deg: 122 },
  { image: 'camel', dir: 'left', deg: -67 } 
]

# Make arrays shuffle-able:
Array::shuffle = -> @sort -> 0.5 - Math.random()

root.trials = feedback.shuffle().concat training.shuffle()

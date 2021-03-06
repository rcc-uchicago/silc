(function() {

	var scale = 6
		,svgNS = 'http://www.w3.org/2000/svg'
		,layer1 = document.getElementById('layer1')
		,selBead = false
		,checkBeads = []
		,verticalBeads = {}
		,beads = {}
		,indexCounter = 0
		,debug = false;
	
	function init() {

    var abacus = document.getElementById("abacus");

		/* Create vertical rods */
		for (var i = 1; i <= 11; i += 1) {
			createRod(i * 10, 5, i * 10, 55);
		}
		
		/* Create horizontal rod */
		createRod(0, 20, 120, 20);

		/* Create upper beads */
		for (var i = 0; i < 11; i += 1) {
			createBead(10 + 10 * i, 5, i, true);
			createBead(10 + 10 * i, 10, i, true, true);
		}

		/* Create lower beads */
		for (var i = 0; i < 11; i += 1) {
			for (var j = 0; j < 5; j += 1) {
				createBead(10 + i * 10, 35 + (j * 5), i, false, j === 0);
			}
		}
	
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

      abacus.addEventListener('touchstart', function(e) {
        e.preventDefault(); 
        if (e.touches.length == 1) {
          var touch = e.touches[0];
          var node = touch.target;
          if (node && node.tagName && node.tagName === 'ellipse') {
            selBead = node;
          }
        }
      });
      
      abacus.addEventListener('touchend', function(e) {
        if (e.touches.length == 0) {
          updateValue();
          selBead = false;
        }
      });
      
      abacus.addEventListener('touchmove', function(e) {
        e.preventDefault(); 
        if (selBead && e.touches.length == 1) {
          var touch = e.touches[0];
          setY(selBead, touch.pageY / scale);
        }
      });

    } else {

      abacus.addEventListener('mousedown', function(e) {
        if (e.target && e.target.tagName && e.target.tagName === 'ellipse') {
          selBead = e.target;
          if (debug) {
            selBead.setAttribute('fill', 'red');
          }
        }
      });

      abacus.addEventListener('mouseup', function(e) {
        if (debug && selBead) {
          selBead.setAttribute('fill', 'black');
        }
        updateValue();
        selBead = false;
      });

      abacus.addEventListener('mousemove', function(e) {
        if (selBead) {
          setY(selBead, e.clientY / scale);
        }
      });
    }

	}

	function createRod(x1, y1, x2, y2)
	{
		var el = document.createElementNS(svgNS, 'line');
		el.x1.baseVal.value = x1;
		el.y1.baseVal.value = y1;
		el.x2.baseVal.value = x2;
		el.y2.baseVal.value = y2;
		el.setAttribute('class', 'rod');
		// el.setAttribute('stroke', '#777');
		// el.setAttribute('stroke-width', .5);
		layer1.appendChild(el);
	}

	function createBead(x, y, row, isUpper, isCheckBead)
	{
		var el = document.createElementNS(svgNS, 'ellipse');
		el.cx.baseVal.value = x;
		el.cy.baseVal.value = y;
		el.rx.baseVal.value = 3;
		el.ry.baseVal.value = 2;
		el.setAttribute('class', 'bead');
		el._index = indexCounter++;
		el._row = row;
		el._isCheckBead = isCheckBead;
		el._isUpper = isUpper;
		layer1.appendChild(el);

		if (!beads.hasOwnProperty(x)) {
			beads[x] = [];
		}

		beads[x].push(el);

		if (isCheckBead === true) {
			checkBeads.push(el);
		}

		if (!verticalBeads.hasOwnProperty(row)) {
			verticalBeads[row] = [];
		}

		verticalBeads[row].push(el);

		return el;
	}

	function setY(bead, y, dir)
	{
		var x = bead.cx.baseVal.value
			b = checkBoundaries(bead, y);
		
		if (b) {
			return false;
		}

		for (var i = 0, len = beads[x].length; i < len; i += 1) {
			var bead2 = beads[x][i]
				,y2 = bead2.cy.baseVal.value;

			if (bead === bead2) {
				continue;
			}

			if (dir) {
				if (dir === 'up' && bead._index < bead2._index) {
					continue;
				}
				
				if (dir === 'down' && bead._index > bead2._index) {
					continue;
				}
			}

			if (y >= y2 - 5 && y <= y2 + 5) {
				/* raise */
				if (bead._index > bead2._index) {
					if (!setY(bead2, y - 5, 'up')) {
						return false;
					}
				}
				/* lower */
				else {
					if (!setY(bead2, y + 5, 'down')) {
						return false;
					}
				}
			}
		}

		bead.cy.baseVal.value = y;
		return true;
	}

	function checkBoundaries(bead, y)
	{
		/* Upper beads */
		if (bead.cy.baseVal.value < 20) {
			if (y <= 5) {
				return true;
			} else if (y >= 17.5) {
				return true;
			}
		}
		/* Lower beads */
		else {
			if (y <= 22.5) {
				return true;
			} else if (y >= 55) {
				return true;
			}
		}

		return false;
	}

	function updateValue()
	{
		var value = 0;

		for (var i = 0, len = checkBeads.length; i < len; i += 1) {
			var bead = checkBeads[i]
				,x = bead.cy.baseVal.value
				,y = bead.cy.baseVal.value
				,rowBeads = verticalBeads[bead._row]
				,checkUpper = false
				,beadValue = Math.pow(10, (bead._row - 10) * -1)

			/* Upper beads */
			if (y < 20 && y > 16) {
				if (debug) {
					bead.setAttribute('fill', 'yellow');
				}
				checkUpper = true;
				value += beadValue * 5;
			}
			/* Lower beads */
			else if (y > 22 && y < 25) {
				if (debug) {
					bead.setAttribute('fill', 'purple');
				}
				checkUpper = false;
				value += beadValue;
			} else {
				continue;
			}

			var prevy = y;

			for (var j = 0, l2 = rowBeads.length; j < l2; j += 1) {
				var otherBead = rowBeads[j];

				if (otherBead._isCheckBead) {
					continue;
				}

				if (otherBead._isUpper !== checkUpper) {
					continue;
				}

				if (Math.abs(prevy - otherBead.cy.baseVal.value) < 7.5) {
					if (debug) {
						otherBead.setAttribute('fill', 'blue');
					}
					prevy = otherBead.cy.baseVal.value;
					if (checkUpper) {
						value += beadValue * 5;
					} else {
						value += beadValue;
					}
				} else {
					break;
				}
			}
		}

		document.getElementById('value').textContent = value;
	}

	init();

})();

export default class Tree {
  /** Class to represent a tree which is generated using an L-System. Methods include adding rules to be used in the L-System generation, and running the
   *  L-System using a derterministic or stochastic method to create a string which represents a tree.
   *
   * Fields:
   *      modelType:      Either deterministic or stochastic.
   *      delta:          Angle of branches in tree.
   *      axiom:          Starting string for the L-System.
   *      n:              Number of L-System iterations.
   *
   * Methods:
   *      addRule:                    Create a rule to be used in the L-System generation of the tree.
   *      generateDeterministic:      Performs the L-System deterministic generation of a string which represents a tree. Returns a string.
   *
   **/
  constructor(modelType, delta, axiom, n) {
    /** Constructor function which sets up a tree object.
     *
     **/
    this.modelType = modelType
    this.delta = delta
    this.axiom = axiom
    this.n = n
    this.rules = []
  }

  addRule(ruleIn, ruleOut) {
    /** Adds a rule to the set of rules which will be used in the L-System generation of the tree.
     *
     * :param ruleIn:       Character which should be changed during the L-System string generation.
     * :param ruleOut:      String which should replace the character specified in ruleIn during the L-System string generation.
     *
     **/

    /* If there are no rules yet, create a new rule.*/
    if (this.rules.length == 0) {
      this.rules[this.rules.length] = {
        in: ruleIn,
        out: [ruleOut],
      }
    } else {
      /* If rules already exist, run through the existing rule in parameters to see if they match ruleIn. */
      let match = false
      for (let i = 0; i < this.rules.length; i++) {
        /* If there is a match, add the ruleOut to the existing rule. */
        if (this.rules[i].in == ruleIn) {
          this.rules[i].out[this.rules[i].out.length] = ruleOut
          match = true
          break
        }
      }
      /* If there is no existing rule, create a new rule. */
      if (match == false) {
        this.rules[this.rules.length] = {
          in: ruleIn,
          out: [ruleOut],
        }
      }
    }
  }

  generate(ctx, iter) {
    /** Generates a string which represents a tree using the deterministic L-System method based on the rules and axiom of the tree.
     *
     * :returns:        String which is produced as the result of n iterations of the deterministic L-System method on the axiom.
     *
     **/
    let string = this.axiom

    /* Run through number of iterations. */
    for (let x = 0; x < this.n; x++) {
      let newString = ''

      /* Run through characters in string. */
      for (let i = 0; i < string.length; i++) {
        let match = 0

        /* Run through rules to see if any in parameters match the current string character. */
        for (let j = 0; j < this.rules.length; j++) {
          /* Match current string character to rule in parameter. */
          if (this.rules[j].in == string[i]) {
            match = 1

            if (this.modelType == 'deterministic') {
              newString += this.rules[j].out[0]
            } else if (this.modelType == 'stochastic') {
              let indexRand = Math.floor(
                this.rules[j].out.length * Math.random()
              )
              newString += this.rules[j].out[indexRand]
            }

            break
          }
        }

        /* If there was no rule matching the current string character, keep the character the same. */
        if (match == 0) {
          newString += string[i]
        }
      }
      string = newString
    }

    this.drawTree(string, ctx, iter)
    return string
  }

  getSize(string) {
    /** Finds size of tree.
     *
     * :returns:        max dimension of tree
     *
     **/
    let x = 0
    let y = 0

    let xmax = 0
    let xmin = 0
    let ymax = 0
    let ymin = 0

    let ang = 90 // x and y represent the current place on the canvas you are drawing. ang is the direction you start by looking.
    let xlist = [[x, y, ang]] // will store the places where you branch off so that once you finish drawing a branch you can go back to the point and draw another
    let len = 1 // length of steps
    for (const char of string) {
      if (char === 'F') {
        let theta = (-Math.PI / 180) * ang
        x = x + len * Math.cos(theta)
        y = y + len * Math.sin(theta)
        xmax = Math.max(x, xmax)
        xmin = Math.min(x, xmin)
        ymax = Math.max(y, ymax)
        ymin = Math.min(y, ymin)
      } else if (char === '[') {
        xlist.push([x, y, ang])
      } else if (char === ']') {
        ;[x, y, ang] = xlist[xlist.length - 1]
        xlist.pop()
      } else if (char === '-') {
        ang = ang - this.delta
      } else if (char === '+') {
        ang = ang + this.delta
      } else {
      }
    }

    return [Math.abs(xmax - xmin), Math.abs(ymax - ymin), xmin, ymax]
  }

  drawTree(string, ctx, iter) {
    /** Draws the L-System represented by the string fed into it. Pos also fed in, also ctx is the canvas.
     *
     * :returns:        Drawing on canvas object.
     *
     **/

    let size = this.getSize(string)
    let len = 400 / Math.max(size[0], size[1]) // length of steps
    console.log(size)
    let x = 250 + len * (-size[2] - size[0] / 2)
    console.log(x)
    let y = 490 - len * size[3]
    console.log(y)
    let ang = 90 // x and y represent the current place on the canvas you are drawing. ang is the direction you start by looking.
    let xlist = [[x, y, ang]] // will store the places where you branch off so that once you finish drawing a branch you can go back to the point and draw another

    for (const char of string) {
      //console.log(ang)
      if (char === 'F') {
        ;[x, y] = this.drawForward(x, y, ang, len, ctx)
      } else if (char === '[') {
        xlist.push([x, y, ang])
      } else if (char === ']') {
        ;[x, y, ang] = xlist[xlist.length - 1]
        xlist.pop()
      } else if (char === '-') {
        ang = ang - this.delta
      } else if (char === '+') {
        ang = ang + this.delta
      } else {
      }
    }
  }

  drawForward(x, y, ang, length, ctx) {
    /** Draws a straight line from x, y at angle ang in degrees to the vertical and of length length
     *
     * :returns:        Drawing of straight line canvas object.
     *
     **/
    ctx.moveTo(x, y)
    let theta = (-Math.PI / 180) * ang
    let nx = x + length * Math.cos(theta)
    let ny = y + length * Math.sin(theta)
    ctx.lineTo(nx, ny)
    ctx.strokeStyle = 'white'
    ctx.stroke()
    return [nx, ny]
  }
}

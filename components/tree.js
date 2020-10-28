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

  generate() {
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
    return string
  }
}

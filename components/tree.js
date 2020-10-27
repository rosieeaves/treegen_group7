class Tree {
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
        this.modelType = modelType;
        this.delta = delta;
        this.axiom = axiom;
        this.n = n;
        this.rules = [];
    }

    addRule(ruleIn,ruleOut) {
        /** Adds a rule to the set of rules which will be used in the L-System generation of the tree.
            * 
            * :param ruleIn:       Character which should be changed during the L-System string generation.
            * :param ruleOut:      String which should replace the character specified in ruleIn during the L-System string generation.
            * 
            **/
        this.rules[this.rules.length] = {
            in: ruleIn,
            out: ruleOut
        }
    }

    generateDeterministic() {
        /** Generates a string which represents a tree using the deterministic L-System method based on the rules and axiom of the tree.
            * 
            * :returns:        String which is produced as the reulst of n iterations of the deterministic L-System method on the axiom. 
            * 
            **/
        var string = this.axiom;
        for (var x=0; x<this.n; x++) {
            console.log(x);
            var newString = '';
            for (var i=0; i<string.length; i++) {
                var match = 0;
                
                for (var j=0; j<this.rules.length; j++) {

                    if (this.rules[j].in == string[i]) {
                        match = 1;
                        newString += this.rules[j].out;
                        break;
                    }

                }
                if (match == 0) {
                    newString += string[i];
                }
            }
        string = newString;
        }
    return string;
    }
}
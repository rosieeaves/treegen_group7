<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="headline"> Tree generator - group 7 </v-card-title>
        <v-card-text>
          <p>
            Welcome to the tree generator website. This creates simple tree-like
            shapes using L-systems as described in
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjh_PrGydnsAhVVtXEKHZ0LCl0QFjAAegQIAxAC&url=http%3A%2F%2Falgorithmicbotany.org%2Fpapers%2Fabop%2Fabop.pdf&usg=AOvVaw2r9WRagwONeb1NTGPS7xVT"
              target="_blank"
              rel="noopener noreferrer"
              title="book"
            >
              The Algorithmic Beauty of Plants </a
            >.
          </p>

          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/rosieeaves/treegen_group7"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board</a
            >.
          </p>

          <v-container fluid>
            <v-select
              id="modelType"
              :items="modelType"
              label="Select your model type"
              dense
              outlined
              return-object
              @input="onChange"
            ></v-select>

            <v-textarea
              id="angle"
              label="Branching angle"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>

            <v-textarea
              id="axiom"
              label="Starting string"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>

            <v-textarea
              id="n"
              label="No. of Iterations"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>

            <span class='ruleInput'>F = </span>

            <v-textarea
              id="rule1"
              label="Rule 1"
              auto-grow
              outlined
              rows="1"
              row-height="15"
              cols="49"
              value="FF"
            ></v-textarea>

            <span class='ruleInput'>X = </span>

            <v-textarea
              id="rule2"
              label="Rule 2"
              auto-grow
              outlined
              rows="1"
              row-height="15"
              cols="49"
              class="ruleOutput"
              value="F[-X][X]F[-X]+FX"
            ></v-textarea>

            <div id='stochasticRules'>
            </div>

            <button
              id="AddRuleButton"
              style = 'visibility: hidden;'
              @click="addRuleRow"
            >Add rule</button>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="generateTree"> Draw Tree! </v-btn>
        </v-card-actions>

        <div id="app">
          <canvas id="myCanvas" width="500" height="500" />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
#myCanvas {
  border: 1px solid grey;
}
.inline-div {
    display:inline-block;
}
</style>

methods:{ }

<script>
import Tree from '~/components/tree'
import clickHandler from './index'

export default {
  n1: '',
  n2: 0,
  n3: '',
  n4: 0,
  canvas: null,
  data: () => ({
    modelType: ['deterministic', 'stochastic'],
  }),
  methods: {
    generateTree() {
      this.n2 = document.getElementById('angle').value
      this.n3 = document.getElementById('axiom').value
      this.n4 = document.getElementById('n').value

      var c = document.getElementById('myCanvas')
      this.canvas = c.getContext('2d')
      clickHandler(this.n1, this.n2, this.n3, this.n4, this.canvas)
    },
    onChange(value) {
      this.n1 = value
      if (value === 'stochastic' ){
        document.getElementById('AddRuleButton').style.visibility = 'visible'
      } else if (value === 'deterministic'){
        document.getElementById('AddRuleButton').style.visibility = 'hidden'
      }
    },
  addRuleRow() {

    let ruleNum = document.getElementById('stochasticRules').children.length+1/2

    let ruleInput = document.createElement('select');

    let F = document.createElement('option');
    F.value = 'F';
    F.innerHTML = 'F =';
    F.style = 'color: white;'
    ruleInput.appendChild(F);

    let X = document.createElement('option');
    X.value = 'X =';
    X.innerHTML = 'X =';
    X.style = 'color: white;'
    ruleInput.appendChild(X);

    ruleInput.id = 'rule' + ruleNum;
    document.getElementById('stochasticRules').appendChild(ruleInput)

    let ruleOutput = document.createElement('input');
    ruleOutput.id = 'rule' + ruleNum;
    document.getElementById('stochasticRules').appendChild(ruleOutput);

  },
  mounted() {
    var c = document.getElementById('myCanvas')
    this.canvas = c.getContext('2d')
  },
}
}
</script>

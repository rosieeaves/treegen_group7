<template>
  <v-row justify="center" align="center">
    <!--<v-col cols="12" sm="8" md="6"> -->
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
            v-model="model"
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
            v-model="angle"
            label="Branching angle"
            auto-grow
            outlined
            rows="1"
            row-height="15"
            :key="componentKey"
          ></v-textarea>

          <v-textarea
            id="axiom"
            v-model="axiom"
            label="Starting string"
            auto-grow
            outlined
            rows="1"
            row-height="15"
            :key="componentKey"
          ></v-textarea>

          <v-textarea
            id="n"
            v-model="n"
            label="No. of Iterations"
            auto-grow
            outlined
            rows="1"
            row-height="15"
            :key="componentKey"
          ></v-textarea>

          <span class="ruleInput">F = </span>

          <v-textarea
            v-model="rule1"
            id="rule1"
            label="Rule 1"
            auto-grow
            outlined
            rows="1"
            row-height="15"
            :key="componentKey"
            cols="49"
          ></v-textarea>

          <span class="ruleInput">X = </span>

          <v-textarea
            v-model="rule2"
            id="rule2"
            label="Rule 2"
            auto-grow
            outlined
            rows="1"
            row-height="15"
            cols="49"
            class="ruleOutput"
            :key="componentKey"
          ></v-textarea>

          <div id="stochasticRules"></div>
          <br />
          <v-spacer />

          <v-btn id="AddRuleButton" v-if="!isHidden" @click="addRuleRow">
            Add rule
          </v-btn>

          <v-btn id="exm1" @click="changeVars1"> Kosh-Style Snowflake </v-btn>

          <v-btn id="exm2" @click="changeVars2"> MC Escher </v-btn>

          <v-btn id="exm3" @click="changeVars3"> Mufasa </v-btn>
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
    <!-- </v-col> -->
  </v-row>
</template>

<style>
#myCanvas {
  border: 1px solid grey;
}
.inline-div {
  display: inline-block;
}
</style>

methods:{ }

<script>
import Tree from '~/components/tree'
import clickHandler from './index'

export default {
  canvas: null,
  data: () => ({
    modelType: ['deterministic', 'stochastic'],
    componentKey: 0,
    model: '',
    angle: '',
    axiom: '',
    n: '',
    rule1: 'FF',
    rule2: 'F[-X][X]F[-X]+FX',
    isHidden: true,
  }),
  methods: {
    generateTree() {
      var c = document.getElementById('myCanvas')
      this.canvas = c.getContext('2d')

      this.rules = []
      this.rules[0] = ['F', this.rule1]
      this.rules[1] = ['X', this.rule2]

      let numStochRules =
        document.getElementById('stochasticRules').children.length / 2
      console.log('stoch rules = ', numStochRules)
      for (let i = 0; i < numStochRules; i++) {
        console.log(i)
        if (
          document.getElementById('stochasticRules').children[2 * i + 1]
            .value != ''
        ) {
          this.rules[this.rules.length] = [
            document.getElementById('stochasticRules').children[2 * i].value,
            document.getElementById('stochasticRules').children[2 * i + 1]
              .value,
          ]
        }
      }
      console.log(this.rules)

      clickHandler(
        this.model,
        this.angle,
        this.axiom,
        this.n,
        this.canvas,
        this.rules
      )
    },
    onChange(value) {
      console.log(this.model)
      if (this.model === 'stochastic') {
        console.log('inside if')
        this.isHidden = false
      } else if (this.model === 'deterministic') {
        this.isHidden = true
        document.getElementById('stochasticRules').innerHTML = ''
      }
    },
    addRuleRow() {
      let ruleNum =
        document.getElementById('stochasticRules').children.length + 1 / 2

      let ruleInput = document.createElement('select')
      ruleInput.style = 'color:LightGrey; font-size:12'

      let F = document.createElement('option')
      F.value = 'F'
      F.innerHTML = 'F ='
      ruleInput.appendChild(F)

      let X = document.createElement('option')
      X.value = 'X'
      X.innerHTML = 'X ='
      ruleInput.appendChild(X)

      ruleInput.id = 'rule' + ruleNum
      document.getElementById('stochasticRules').appendChild(ruleInput)

      let ruleOutput = document.createElement('input')
      ruleOutput.id = 'rule' + ruleNum
      ruleOutput.className = 'inline-div'
      ruleOutput.style = 'color:white; font-size:16; border: 1px solid grey'
      document.getElementById('stochasticRules').appendChild(ruleOutput)
    },
    changeVars1() {
      this.model = 'deterministic'
      this.angle = 60
      this.axiom = 'F+F+F+F+F+F'
      this.n = 3
      this.rule1 = 'F+F--F+F'
      this.rule2 = ''
      this.isHidden = true
      document.getElementById('stochasticRules').innerHTML = ''
      this.generateTree()
      this.forceRerender()
    },
    changeVars2() {
      this.model = 'deterministic'
      this.angle = 60
      this.axiom = 'FX+FX+FX'
      this.n = 3
      this.rule1 = 'F'
      this.rule2 = 'FX+FX+FX+'
      this.isHidden = true
      document.getElementById('stochasticRules').innerHTML = ''
      this.generateTree()
      this.forceRerender()
    },
    changeVars3() {
      this.model = 'deterministic'
      this.angle = 45
      this.axiom = 'F+F+F'
      this.n = 6
      this.rule1 = '+F+F+F'
      this.rule2 = ''
      this.isHidden = true
      document.getElementById('stochasticRules').innerHTML = ''
      this.generateTree()
      this.forceRerender()
    },
    mounted() {
      var c = document.getElementById('myCanvas')
      this.canvas = c.getContext('2d')
    },
    forceRerender() {
      this.componentKey += 1
    },
  },
}
</script>

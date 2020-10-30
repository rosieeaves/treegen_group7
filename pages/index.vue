/** *Function added to the front end, connecting via DummyFunction.js */

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="headline"> Website title </v-card-title>
        <v-card-text>
          <p>Welcome to the tree generator website</p>

          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
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
              label="angle"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>

            <v-textarea
              id="rule"
              label="Select Rule"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>

            <v-textarea
              id="axiom"
              label="starting string"
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
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="generateTree"> Generate </v-btn>
        </v-card-actions>
        <v-layout>
        <div id="app">
        <h1>Tree</h1>
        <canvas v-bind:style="{ backgroundColor: 'white' }" id="myCanvas" width="640" height="480" />
        </div>
        </v-layout>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
#myCanvas {
  border: 1px solid grey;
}
</style>

<script>
//import Logo from '~/components/Logo.vue'
import Tree from '~/components/tree'
import buttonClick from './main.js'
import algo from './main.js'


export default {
  components: {
    Logo,
  },
  type: '',
  angle: 0,
  rule: '',
  axiom: '',
  n: 0,
  data: () => ({
    modelType: ['deterministic', 'stochastic'],
    canvas: null,
  }),
  methods: {
    draw: function (event) {
      var c = document.getElementById('myCanvas')
      this.canvas = c.getContext('2d')
      buttonClick(this.canvas)
    },
    generateTree() {
      this.angle = document.getElementById('angle').value
      this.rule = document.getElementById('rule').value
      this.axiom = document.getElementById('axiom').value
      this.n = document.getElementById('n').value
      var c = document.getElementById('myCanvas')
      this.canvas = c.getContext('2d')
      buttonClick(this.canvas,this.type,this.angle,this.rule,this.axiom,this.n)

      //let tree = new Tree(this.n1, this.n2, this.n3, this.n4)
      //tree.addRule('X', 'XX')
      //let treeString = tree.generate()
    },
    onChange(value) {
      this.type = value
    },
  },
  mounted() {
    var c = document.getElementById('myCanvas')
    this.canvas = c.getContext('2d')
  },
}
</script>







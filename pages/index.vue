/** *Function added to the front end, connecting via DummyFunction.js */

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
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
</style>

methods:{ }

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Tree from '~/components/tree'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  n1: '',
  n2: 0,
  n3: '',
  n4: 0,
  data: () => ({
    modelType: ['deterministic', 'stochastic'],
  }),
  methods: {
    generateTree() {
      this.n2 = document.getElementById('angle').value
      this.n3 = document.getElementById('axiom').value
      this.n4 = document.getElementById('n').value
      let tree = new Tree(this.n1, this.n2, this.n3, this.n4)
      tree.addRule('X', 'XX')
      let treeString = tree.generate()
    },
    onChange(value) {
      this.n1 = value
    },
  },
}
</script>

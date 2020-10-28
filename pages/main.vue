<template>
  <v-layout>
    <v-flex class="text-left">
      <div id="gui">
        Model type:
        <select name="type" id="type">
          <option value="deterministic" selected>deterministic</option>
          <option value="stochastic">stochastic</option>
        </select>
        <br />

        Branching angle:
        <input type="text" name="angle" id="angle" value="25" />
        <br />

        Number of iterations:
        <input type="text" name="iter" id="iter" value="5" />
        <br />

          <v-btn large outlined v-on:click="draw">Draw Tree!</v-btn>
        </div>

        <br>

        <div id="app">
          <h1>Tree</h1>
          <canvas id="myCanvas" width="560" height="360" />
        </div>
    </v-flex>
  </v-layout>
</template>

<style>
#myCanvas {
  border: 1px solid grey;
}
</style>

<script>
import buttonClick from './main.js'


  export default {
    data: {
      canvas: null,
    },
    methods: {
      draw: function (event) {
        var c = document.getElementById("myCanvas");
        this.canvas = c.getContext('2d');
        buttonClick(this.canvas);
      },
    },
    mounted() {
      var c = document.getElementById("myCanvas");
      this.canvas = c.getContext('2d');
    }
  }
</script>

<template>
  <v-layout>
    <v-flex class="text-left">
        <div id="gui">
          Model type:
          <select name = "type" id = "type">
            <option value = "deterministic" selected>deterministic</option>
            <option value = "stochastic">stochastic</option>
          </select>
          <br>

          Branching angle:
          <input type="text" name="angle" id="angle" value="25" />
          <br>
          
          Number of iterations:
          <input type="text" name="iter" id="iter" value="5" />
          <br>

          Axiom:
          <input type="text" name="axiom" id="axiom" value="F" />
          <br>

          <v-btn large outlined v-on:click="draw">Draw Tree!</v-btn>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import buttonClick from './main.js'

  export default {
    el: '#gui',
    methods: {
      draw: function (event) {
        buttonClick();
      }
    }
  }
</script>
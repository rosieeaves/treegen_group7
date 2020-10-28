/**
  *Function added to the front end, connecting via DummyFunction.js
*/
 
 
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Website title
        </v-card-title>
        <v-card-text>
          <p>Welcome to the tree generator website</p>

          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>

        <v-container fluid>

        <v-select id="val1" 
          :items="model_type"
          label="Select your model type"
          dense
          outlined
        ></v-select>

        <v-textarea id="val2"  
          label="angle"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>

        <v-textarea id="val3"
          label="starting string"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>

        <v-textarea id="val4" 
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
          <v-btn
            color="primary"
            @click="startQuiz"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

methods:{
  
}


<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as MyFunctions from "~/components/dummyFunction"

 
export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
     items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
   }),
   n1: "",
   n2: 0,
   n3: "",
   n4: 0,
   data: () => ({
      model_type: ['deterministic', 'stochastic']
    }),
  methods:{
    startQuiz(){
      //this.n1 = "one";
      this.n1 = document.getElementById("val1").value;
      this.n2 = document.getElementById("val2").value;
      this.n3 = document.getElementById("val3").value;
      this.n4 = document.getElementById("val4").value;
      MyFunctions.NAME_OF_FUNCTION(this.n1,this.n2,this.n3,this.n4);
      //console.log(MyFunctions.sum(this.n1,this.n2));
    }
  }
}

</script>

<!--
<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>

<!-- some text -->

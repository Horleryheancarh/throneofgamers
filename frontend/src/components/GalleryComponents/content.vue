<template>
<div>
    <v-layout row wrap v-for="item in Items" :key="item.id" mb-4>
              <v-flex xs4 md3 class="text-xs-center">
                <v-card flat class="d-flex mx-2 elevation-5">
                  <v-img v-bind:src="item.src"/>
                </v-card>
                <h1 class="headline font-weight-bold">{{item.name}}</h1>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs7 md8 class="text-xs-center">
                <v-layout row wrap>
                <v-flex  v-for="pic in Pics" :key="pic.id" xs4 md3 mb-2>
                  <v-card flat  class="d-flex mx-2 elevation-5">
                  <v-img v-bind:src="pic.src"/>
                  </v-card>
                  <p class="mx-2 mt-2 font-weight-bold">{{pic.desc}}</p>
                <v-dialog max-width="600px">
                  <v-btn flat slot="activator"> View
                </v-btn>
                <v-card flat  class="d-flex elevation-5">
                    <v-img v-bind:src="pic.src"/>
                  <!-- <v-carousel height="500">
                  <v-carousel-item v-for="pic in Pics" :key="pic.id" v-bind:src="pic.src" ></v-carousel-item>
                </v-carousel> -->
                  </v-card>
                </v-dialog>
              </v-flex>
              </v-layout>
              </v-flex>
              <v-flex xs12 md12 align-self-center mt-3 class="text-xs-center">
                <hr>
              </v-flex>
            </v-layout>
            </div>
</template>

<script>
export default {
    name: "Content",
    props: ["Items","Pics"],
    data(){
        return{
            g:false
        }
    },
    methods: {
        show(){
            this.g = true;
        }
    }
}
</script>

<style scoped>

</style>
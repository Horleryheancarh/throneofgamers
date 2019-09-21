<template>
  <v-layout mt-4>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="elevation-10">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-text primary-title>
          <div class="text-md-center">
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <v-avatar
            :title="tile"
            :size="avatarSize"
            class="grey lighten-4">
            <img src="../assets/logo.png" alt="avatar">
            </v-avatar>
            <div> {{ card_text }} </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>
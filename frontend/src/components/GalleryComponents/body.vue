<template>
    <v-layout class="my-3">
      <!-- <v-flex>
        <v-card> -->
          <v-container grid-list-sm  class="elevation-1">
            <v-layout row wrap>
              <v-flex xs6 md4 mt-3>
               <label class="font-weight-bold"> Sort by:</label>
              <v-btn flat small>likes</v-btn>
              <v-btn flat small>Recent</v-btn>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex small xs6 md4>
                <!-- <v-btn flat fab small><v-icon>search</v-icon></v-btn> -->
                <v-text-field
                label="search"
                single-line
                append-outer-icon="close"
                prepend-icon="search">
                </v-text-field>
                <!-- <v-btn flat fab small><v-icon>close</v-icon></v-btn> -->
              </v-flex>
            </v-layout>
            <Content v-bind:Items = 'Items' v-bind:Pics = 'Pics'/>
          </v-container>
        <!-- </v-card>
      </v-flex> -->
    </v-layout>
</template>

<script>
import Content from "./content";
export default {
    name: 'Body',
    components: {
        Content
    },
    props: ["Items","Pics"],
}
</script>

<style scoped>

</style>
<template lang="html">
  <div class="">
    <h1>The Events Page</h1>
		<v-sheet height="500">
	    <v-calendar
	      type="year"
	      now="2019-01-08"
	      value="2019-01-08"
	      :events="events"
	    ></v-calendar>
	  </v-sheet>
    <!-- <v-layout class="my-0">
      <v-flex>
        <v-card>
          <v-container grid-list-sm>
            <v-layout row wrap>
              <v-flex xs6 md4 mt-3 class="text-xs-center">
               <label class="font-weight-bold"> Sort by:</label>
              <v-btn flat small>likes</v-btn>
              <v-btn flat small>Recent</v-btn>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex small xs6 md3>
                <v-btn flat fab small><v-icon>search</v-icon></v-btn>
                <v-text-field
                label="search"
                single-line
                append-outer-icon="close"
                prepend-icon="search">
                </v-text-field>
                <v-btn flat fab small><v-icon>close</v-icon></v-btn>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 md8 class="">
                <v-layout row wrap v-for="(post,i) in posts" :key="i" class="elevation-3 mb-3">
                  <v-flex xs12 md4 align-self-center class="pa-3">
                    <v-card flat class="">
                      <v-img v-bind:src="post.src"/>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md8 align-self-center class="text-xs-center">
                    <v-card flat class="d-flex mx-2 elevation-5">
                      <h1 class="headline font-weight-bold">{{post.title}}</h1>
                      <h4 class="subheading">by <h5 class="subheading font-italic"><v-icon class="subheading">account_box</v-icon>{{post.author}}</h5></h4>
                      <p class="body-1"><v-icon class="body-1">schedule</v-icon>{{post.date}}</p>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md12 align-self-center class="text-xs-center">
                    <hr>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex xs12 md3 class="elevation-2">
                <h3 class="subheading font-weight-bold px-2">Recent posts</h3>
                <v-layout row wrap v-for="(post,i) in posts" :key="i">
                  <v-flex xs5 md5>
                    <v-card flat  class="d-flex mx-2 elevation-5">
                      <v-img v-bind:src="post.src"/>
                    </v-card>
                  </v-flex>
                  <v-flex xs7 md7 align-self-center class="text-xs-center">
                    <v-card flat class="d-flex mx-2 elevation-5">
                      <h5 class="body-2 font-weight-bold">{{post.title}}</h5>
                      <h6 class="caption">by <h6 class="caption font-italic"><v-icon class="body-1">account_box</v-icon>{{post.author}}</h6></h6>
                      <p class="caption"><v-icon class="body-1">schedule</v-icon>{{post.date}}</p>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout> -->
  </div>
</template>

<script>

export default {
   data: () => ({
		 events: [
			 {
				 name: 'Vacation',
				 start: '2018-12-30',
				 end: '2019-01-02',
			 },
			 {
				 name: 'Meeting',
				 start: '2019-01-07',
			 },
			 {
				 name: '30th Birthday',
				 start: '2019-01-03',
			 },
			 {
				 name: 'New Year',
				 start: '2019-01-01',
			 },
			 {
				 name: 'Conference',
				 start: '2019-01-21',
			 },
			 {
				 name: 'Hackathon',
				 start: '2019-01-30',
				 end: '2019-02-01',
			 },
		 ],
	 })
 }
</script>

<style lang="css" scoped>

</style>

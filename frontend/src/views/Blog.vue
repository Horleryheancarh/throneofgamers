<template lang="html">
  <div>
    <v-layout row wrap xs>
			<v-flex>
				<v-layout row wrap
					v-for="(post,i) in posts"
					:key="i"
					class="elevation-3 mb-3"
					>
					<v-flex
						align-self-center
						class=""
						>
						<v-card flat class="">
							<v-img v-bind:src="post.src"/>
						</v-card>
					</v-flex>
					<v-flex>
						<v-card flat class="d-flex mx-2 elevation-5">
							<h2 class="heading">{{post.title}}</h2>
						</v-card>
					</v-flex>
					<v-flex xs12 md12 align-self-center class="text-xs-center">
						<hr>
					</v-flex>
				</v-layout>
			</v-flex>
    </v-layout>
  </div>
</template>

<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				posts: null
			}
		},
		mounted () {
			axios
				.get('http://localhost:3000/api/news')
				.then((response) => {
					this.posts = response.data
				})
				.catch((error) => {
					console.log(error)
				})
				.finally(() => {
					console.log('Axios completed')
				})
		}
	}
</script>

<style lang="css" scoped>
</style>

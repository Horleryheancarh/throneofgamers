<template lang="html">
    <nav>
      <v-toolbar>
          <v-icon class="hidden-md-and-down" @click="drawer=!drawer">menu</v-icon>
          <v-toolbar-title to="/">Throne Of Gamers</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="(item, i) in items" :to="item.link" :key="i" flat>{{ item.name }}</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer class="" v-model="drawer" app>
          <v-list>
            <v-list-tile>
              <v-icon @click="drawer = !drawer">close</v-icon>
            </v-list-tile>
            <v-list-tile v-for="(item, i) in items" :to="item.link" :key="i">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          link: '/',
          name: 'HOME'
        },
        {
          link: '/blog',
          name: 'BLOG'
        },
        {
          link: '/events',
          name: 'EVENTS'
        },
        {
          link: '/gallery',
          name: 'GALLERY'
        },
        {
          link: '/projects',
          name: 'PROJECTS'
        },
        {
          link: '/contact',
          name: 'CONTACT US'
        },
        {
          link: '/about',
          name: 'ABOUT US'
        },
        {
          link: '/login',
          name: 'LOGIN/REGISTER'
        },
        // {
        //   link: '/shop',
        //   name: 'shop'
        // },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>

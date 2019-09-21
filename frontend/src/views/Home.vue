<template>
  <div>
    <v-parallax height="300">
      <v-flex>
        <h1 class="black--text">Welcome To Throne Of Gamers</h1>
        <h4 class="black--text">We Build, Play, Launch, Develop, Sell, and Purchase Games</h4>
      </v-flex>
    </v-parallax>
    <v-carousel height="600">
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/carousel-demo-1/Fifa.jpeg"
        },
        {
          src: "/carousel-demo-1/Gta5.jpg"
        },
        {
          src: "/carousel-demo-1/Jumpforce.jpg"
        },
        {
          src: "/carousel-demo-1/Mk11.jpg"
        }
      ]
    };
  }
};
</script>

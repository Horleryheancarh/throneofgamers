<template lang="html">
  <div class="main">
    
    <Carousel v-bind:Items = 'items'/>
    
    <Body v-bind:Items = 'items' v-bind:Pics = 'pics'/>
  </div>
</template>

<script>
import popup from '../components/popup'
import Carousel from '../components/GalleryComponents/Carousel'
import Body from '../components/GalleryComponents/body'
export default {
  components: { popup, Carousel, Body },
  methods: {
    
  },
  data() {
    return {
      items: [
        {
          id: 1,
          src: "/carousel-demo-1/Fifa.jpeg",
          name: "The Big Album"
        },
        {
          id: 2,
          src: "/carousel-demo-1/Gta5.jpg",
          name: "The Second Album"
        },
        {
          id: 3,
          src: "/carousel-demo-1/Jumpforce.jpg",
          name: "The Third Album"
        },
        {
          id: 4,
          src: "/carousel-demo-1/Mk11.jpg",
          name: "The Large Album"
        }
      ],
      pics:[
        {
          id: 1,
          src: "/carousel-demo-1/Fifa.jpeg",
          desc: "FIFA 19"
        },
        {
          id: 2,
          src: "/carousel-demo-1/Gta5.jpg",
          desc: "GTA 5"
        },
        {
          id: 3,
          src: "/carousel-demo-1/Jumpforce.jpg",
          desc: "Jumpforce"
        },
        {
          id: 4,
          src: "/carousel-demo-1/Mk11.jpg",
          desc: "MK 11"
        },
        {
          id: 5,
          src: "/carousel-demo-1/Gta5.jpg",
          desc: "GTA 5"
        },
        {
          id: 6,
          src: "/carousel-demo-1/Jumpforce.jpg",
          desc: "Jumpforce"
        },
        {
          id: 7,
          src: "/carousel-demo-1/Mk11.jpg",
          desc: "MK 11"
        },
        {
          id: 8,
          src: "/carousel-demo-1/Jumpforce.jpg",
          desc: "Jumpforce"
        },
        {
          id: 9,
          src: "/carousel-demo-1/Mk11.jpg",
          desc: "MK 11"
        }
      ]
    };
  }
}
</script>

<style lang="css" scoped>
  h1{
    margin-top: 20px;
  }
</style>

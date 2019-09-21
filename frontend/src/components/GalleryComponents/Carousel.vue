<template>
    <v-carousel height="600">
      <v-carousel-item v-for="item in Items" v-bind:src="item.src" :key="item.id"></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    props: ["Items"],
    
}
</script>
<style scope>
</style>

<template>
  <primary-header />
  <router-view />
</template>

<script>
import PrimaryHeader from './components/header/PrimaryHeader.vue'
import PrimaryIntro from './components/intro/PrimaryIntro.vue'
import PopularCourses from './views/PopularCourses.vue'

export default {
  components: {
    PrimaryHeader,
    PrimaryIntro,
    PopularCourses
  }
}
</script>

<style 
    PrimaryIntroscoped>

</style>

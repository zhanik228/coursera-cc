<template>
    <primary-intro />
    <popular-courses />
</template>

<script>
import PopularCourses from '../views/PopularCourses.vue'
import PrimaryIntro from './intro/PrimaryIntro.vue'

export default {
  components: {
    PopularCourses,
    PrimaryIntro
  }
}
</script>

<style scoped>

</style>

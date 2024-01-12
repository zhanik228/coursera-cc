<template>
    <div class="container mx-auto px-2 sm:px-0 py-[26px]">
        <div class="flex justify-between items-center gap-[50px]">
            <router-link to="/" class="logo flex gap-[19px] items-center">
                <img width="81" height="54" src="../../assets/ExcludeLogo.png" alt="Logo">
                <h1 class="text-primary-purple-900 font-semibold text-[24px] sm:text-[35px]">Onlinetutor.</h1>
            </router-link>
            <primary-nav :links="navElems" />
        </div>
    </div>
</template>

<script>
import PrimaryNav from '../nav/PrimaryNav.vue'

export default {
  components: { PrimaryNav },
    data() {
        return {
            navElems: [
                {
                    name: "Home",
                    linkName: "Home"
                },
                {
                    name: "Courses",
                    linkName: "Home"
                },
                {
                    name: "For Teachers",
                    linkName: "for-teachers"
                },
            ]
        }
    }
}
</script>
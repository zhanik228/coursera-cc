<template>
    <div class="hidden lg:flex flex-grow items-center">
        <nav class="sm:flex flex-grow">
            <ul class="sm:flex gap-[43px]">
                <li 
                    class="font-medium text-primary-purple-300"
                    v-for="link in links" :key="link.linkName">
                    <a href="#">{{ link.name }}</a>
                </li>
            </ul>
        </nav>
        <div class="flex items-center gap-[29px]">
            <a href="#">Sign In</a>
            <primary-button>Contact us</primary-button>
        </div>
    </div>
    <div class="block lg:hidden">
        <div
            @click="isOpen = !isOpen"
            class="nav-toggle h-10 w-10 flex flex-col justify-center gap-3">
            <span class="bar bg-primary-purple-900 w-full h-0.5"></span>
            <span class="bar bg-primary-purple-900 w-full h-0.5"></span>
            <span class="bar bg-primary-purple-900 w-full h-0.5"></span>
        </div>
    </div>
    <div :class="`mobile-nav flex flex-col items-center transition-all fixed bg-[#fff] top-20 bottom-0 right-0 ${isOpen ? 'left-[0]' : 'left-[200%]'} p-2 py-20`">
        <nav class="flex-grow">
            <ul class="flex flex-col gap-[23px]">
                <li 
                    class="font-medium text-primary-purple-300 text-5xl"
                    v-for="link in links" :key="link.linkName">
                    <a href="#">{{ link.name }}</a>
                </li>
            </ul>
        </nav>
        <div class="flex items-center gap-[29px]">
            <a href="#">Sign In</a>
            <primary-button>Contact us</primary-button>
        </div>
    </div>
</template>

<script>
import PrimaryButton from '../button/PrimaryButton.vue'

export default {
    components: { PrimaryButton },
    props: {
        links: {
            required: true,
            type: Array,
        },
    },
    data() {
        return {
            isOpen: false,
        }
    }
}
</script>
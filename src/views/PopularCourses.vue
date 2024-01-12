<template>
    <section class="font-[Caledea] rounded-t-[100px] pt-20 bg-[#EBEBF5]">
        <div class="container mx-auto">
            <h2 class=" text-[3.125rem] font-bold">Our Most <span class="text-primary-purple-400">Popular Courses</span></h2>
            <div class="flex items-center justify-between mb-10">
                    <p class="font-[Inter] text-[1.5625rem] text-primary-purple-300">Let’s join our best classes with our famous instructor and institutes</p>
                <router-link to="/courses" class="flex items-center gap-2 text-[1.375rem] font-[Inter] font-bold hover:text-primary-purple-400 text-primary-purple-300 underline">Explore Courses <img width="19" src="../assets/courses/Group 512869arrow-top-right.png" alt=""></router-link>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <course-card v-for="card in cards" :key="card.title" :card="card" />
            </div>
        </div>
    </section>
</template>

<script>
import CourseCard from '../components/card/CourseCard.vue'
import courseImg from "../assets/courses/card.png"
import authorImg from "../assets/courses/Ellipse 1202.png"

export default {
    components: {
        CourseCard
    },
    data() {
        return {
            cards: [
                {
                    img: courseImg,
                    countLesson: 28,
                    title: 'Supervised machine and technology',
                    author: 'Wade Warren',
                    author_img: authorImg,
                    profession: 'Python Developer',
                },
                {
                    img: courseImg,
                    countLesson: 28,
                    title: 'Supervised machine and technology',
                    author: 'Wade Warren',
                    author_img: authorImg,
                    profession: 'Python Developer',
                },
                {
                    img: courseImg,
                    countLesson: 28,
                    title: 'Supervised machine and technology',
                    author: 'Wade Warren',
                    author_img: authorImg,
                    profession: 'Python Developer',
                }
            ]
        }
    }
}
</script>
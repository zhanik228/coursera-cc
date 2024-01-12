<template>
    <section class="container mx-auto">
        <h2 class="text-4xl my-4">Courses</h2>
        <div class="relative">
            <input v-model="searchQuery" @input="handleChange" type="text" class="w-full p-2 rounded border" placeholder="Search by title">
        </div>
        <div class="grid grid-cols-6 gap-4 my-3">
            <primary-select selectedOption="Type" :options="options" />
            <primary-select selectedOption="Price" :options="options" />
        </div>
        <div class="grid grid-cols-3 gap-4">
            <course-card v-for="(card, index) in sortedCards" :key="index" :card="card" />
        </div>
    </section>
</template>

<script>
import CourseCard from '../components/card/CourseCard.vue'
import PrimarySelect from '../components/select/PrimarySelect.vue'
import courseImg from "../assets/courses/card.png"
import authorImg from "../assets/courses/Ellipse 1202.png"

export default {
    components: { PrimarySelect, CourseCard },
    data() {
        return {
            searchQuery: '',
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
                    title: 'Web',
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
            ],
            options: [
                {
                    name: 'Design',
                    value: 'design'
                },
                {
                    name: 'Programming',
                    value: 'programming'
                },
            ],
        }
    },
    computed: {
        sortedCards() {
            return [...this.cards];
        },
        sortedAndSearchedCards(oldQuery, newQuery) {
            return [...this.cards].filter((card) => {
                return card.title.includes(this.searchQuery)
            })
        }
    },
    methods: {
        handleChange(event) {
            console.log(event.target.value)
        }
    }
}
</script>
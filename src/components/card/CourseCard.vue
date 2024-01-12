<template>
    <div v-if="card" class="relative course-card rounded-[30px] overflow-hidden">
        <a href="#" class="absolute inset-0 w-full"></a>
        <div>
            <img :src="card.img" class="max-w-full block object-center object-cover" alt="">
        </div>
        <div class="bg-[#fff] py-2 px-4">
            <div class="flex items-center gap-4 mb-10">
                <img src="../../assets/courses/Group 1000014970play.png" alt="">
                <p class="font-[Inter]">{{ card.countLesson }}x lesson</p>
            </div>
            <h2 class="font-bold text-[1.75rem]">{{ card.title }}</h2>
            <hr class="text-[#DADAF7] w-full h-1 my-4">
            <div class="flex items-center gap-4">
                <img :src="card.author_img" width="43" alt="">
                <div class="flex-grow">
                    <h3 class="text-primary-purple-900 font-semibold font-[Inter]">{{ card.author }}</h3>
                    <h3 class="font-[Inter] text-primary-purple-300 text-[0.875rem]">{{ card.profession }}</h3>
                </div>
                <p class="px-4 py-2 text-lg font-medium text-[#fff] font-[Inter] bg-p bg-[#24D198] rounded-full">Design</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object
        }
    }
}
</script>
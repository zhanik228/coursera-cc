<template>
    <div class="container mx-auto">
        <div class="intro relative">
            <div class="img-teacher bg-[#FBFBFF] px-2 absolute left-10 bottom-[-100px]"><img src="../../assets/intro/teacher.png" alt=""></div>
            <div class="img-teacher bg-[#FBFBFF] px-2 absolute right-10 bottom-[-100px]"><img src="../../assets/intro/student.png" alt=""></div>
            <div class="decor absolute z-[-1] border-[4px] rounded-3xl border-primary-purple-400 border-opacity-30 w-full h-full"></div>
            <div class="intro-content text-center px-[96px] py-6">
                <h2
                    class=" relative font-[Caledea] text-[5.625rem] font-bold text-primary-purple-900"
                >Teaching in the Internet age means we must teach tomorrow’s <span class="text-primary-purple-400 relative">skills today <span class="decor absolute right-[-150px]"><img src="../../assets/intro/Framearrow.svg" alt=""></span></span>
                </h2>
                <p>Provides you with the latest online learning system and material that help your</p>
                <div class="buttons flex justify-center mt-10 mb-[-55px]">
                    <div class="relative bg-[#FBFBFF] px-2">
                        <div class="triangle triangle-left"></div>
                        <primary-button class="bg-" :color="'orange'">Join as Instructor</primary-button>
                    </div>
                    <div class="bg-transparent px-2"></div>
                    <div class="relative bg-[#FBFBFF] px-2">
                        <div class="triangle triangle-right"></div>
                        <primary-button class="bg-">Join as Student</primary-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryButton from '../button/PrimaryButton.vue'

export default {
    components: {
        PrimaryButton
    }
}
</script>

<style>
.triangle {
    position: absolute;
    display: block;
    border-top: 30px solid #D6CAF4;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    bottom: 18px;
}

.triangle-left {
    left: -65px;
    transform: rotate(-90deg);
}

.triangle-right {
    right: -65px;
    transform: rotate(90deg);
}
</style>
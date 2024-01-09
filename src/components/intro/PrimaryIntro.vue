<template>
    <div class="container mx-auto">
        <div class="intro relative">
            <div class="decor absolute z-[-1] border-[4px] rounded-3xl border-primary-purple-400 border-opacity-30 w-full h-full"></div>
            <div class="intro-content text-center px-[96px] py-6">
                    <h2
                        class="after:content-[''] after:bg-[url('../../assets/intro/Framearrow.svg')] after:w-[100px] after:h-[100px] relative font-[Caledea] text-[5.625rem] font-bold text-primary-purple-900"
                    >Teaching in the Internet age means we must teach tomorrow’s skills today</h2>
                <p>Provides you with the latest online learning system and material that help your</p>
                <div class="buttons flex">
                    <primary-button :color="'orange'">Join as Instructor</primary-button>
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
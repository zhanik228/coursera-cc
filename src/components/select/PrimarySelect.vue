<template>
    <select class="text-primary-purple-900 border rounded">
        <option selected disabled>{{ selectedOption }}</option>
        <option :value="option.value" v-for="option in options" :key="option.name">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array
        },
        selectedOption: {
            type: String
        }
    }
}
</script>
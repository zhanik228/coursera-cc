<template>
    <button :class="`${color ? colors[color] : colors['purple']} py-[16px] px-[28px] rounded-full text-[#fff]`">
        <slot></slot>
        {{  }}
    </button>
</template>

<script>
export default {
    props: {
        color: {
            required: false,
            type: String
        }
    },
    data() {
        return {
            colors: {
                orange: 'bg-primary-orange',
                purple: 'bg-primary-purple-400'
            }
        }
    }
}
</script>
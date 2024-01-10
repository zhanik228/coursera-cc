<template>
    <button :class="`bg-${color ? colors[color] : colors['purple']} py-[16px] px-[28px] rounded-full text-[#fff] hover:text-${color ? colors[color] : colors['purple']} transition-opacity`">
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
                orange: 'primary-orange',
                purple: 'primary-purple-400'
            }
        }
    }
}
</script>
<template>
    <div>
        <h1>Payment Section</h1>
        <h1>{{ discount }}</h1>
        <h2>{{ total }}</h2>
    </div>
</template>
<script>
export default {
    props: {
        discount: {
            type: Number,
            required: true
        },
        total: {
            type:Number,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>
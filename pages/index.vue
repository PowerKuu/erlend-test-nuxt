<script setup lang="ts">
const f = ref(0)

const c = computed(() => {
    f.value = f.value * f.value
    return f.value
})
</script>

<template>
    <Flex gap="1rem">
        <p>Cokkies: </p>
        <p>{{ c }}</p>
        <button @click="f++">Cokkie clicka</button>
    </Flex> 
</template>

<style scoped lang="scss">

</style>
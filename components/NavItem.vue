<script setup lang="ts">
defineProps<{
    title: string
    icon: string
    to: string
}>()
</script>

<template>
    <NuxtLink :to="to">
        <Flex align="center" gap="0.5rem">
            <Icon :name="icon" color="black" />
            <p>{{ title }}</p>
        </Flex>
    </NuxtLink>
</template>

<style scoped lang="scss">

</style>
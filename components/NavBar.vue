<script setup lang="ts">

</script>

<template>
    <Flex class="navbar" align="center" justify="space-between">
        <Flex gap="1rem">
            <slot name="left"></slot>
        </Flex>
        <Flex gap="1rem">
            <slot></slot>
        </Flex>
        <Flex gap="1rem">
            <slot name="right"></slot>
        </Flex>
    </Flex>
</template>

<style scoped lang="scss">
.navbar {
    position: fixed;
    width: 100%;
    top: 0;

    padding: 1rem 5vw;

    background-color: white;
}
</style>
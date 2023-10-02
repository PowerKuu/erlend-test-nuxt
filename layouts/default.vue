<script setup lang="ts">

</script>

<template>
    <NavBar>
        <template v-slot:left>
            <NavItem title="Home" icon="material-symbols:globe" to="/" /> 
        </template>

        <NavItem title="Home" icon="teenyicons:globe-outline" to="/" /> 
        <NavItem title="Home" icon="teenyicons:globe-outline" to="/" /> 


        <template v-slot:right>
            <NavItem title="Home" icon="teenyicons:globe-outline" to="/" /> 
        </template>
    </NavBar>
    
    <Flex class="container">
        <slot></slot>
    </Flex>
</template>

<style scoped lang="scss">
.container  {
    padding: 7rem 5rem;
}
</style>
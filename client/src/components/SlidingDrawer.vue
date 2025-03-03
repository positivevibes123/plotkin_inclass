<script setup lang="ts">
</script>

<template>
    <div class="sliding-drawer">
        <slot></slot>
    </div>
</template>

<style scoped>

.sliding-drawer.open, .sliding-drawer:hover {
    position: fixed;
    top: 50px;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

</style>
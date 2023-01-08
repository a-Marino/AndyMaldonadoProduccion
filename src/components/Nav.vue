<template>
    <header class="fixed left-0 min-w-full">
        <nav class="flex flex-row p-8 justify-between">
            <img src="@/assets/images/logoAM.png" alt="logoAM" class="h-8">
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
header {
    z-index: 1;
    background: rgba(0, 0, 0, 0.400);
}
</style>
<template>
    <nav class="fixed flex flex-row p-8 justify-between">
        <a href="#main"><img src="@/assets/images/logoAM.png" alt="logoAM" class="h-8 logo-w"></a>
        <div class="menu space-x-3 text-xl">
            <a href="#about">About</a>
            <a href="#videos">Videos</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
nav {
    z-index: 1000;
    background: rgba(0, 0, 0, 0.400); 
    width: 100vw;
}

.menu {
    color: #fff;
    font-family: 'TypoGraphica';
}

a:hover {
    -webkit-text-stroke: 1px #fff;
    color: transparent;
    transition: .2s;
}
</style>
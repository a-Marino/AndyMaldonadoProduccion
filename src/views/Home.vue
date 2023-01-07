<template>
    <div class="home">
        <Nav/>
        <Main/>
        <About/>
    </div>
</template>

<script>
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Nav from '@/components/Nav.vue'

export default {
    name: 'Home',
    components: {
        Main,
        About,
        Nav,
    }
}
</script>
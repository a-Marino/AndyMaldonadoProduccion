<template>
    <div class="home">
        <Nav/>
        <Main/>
        <About/>
        <Videos/>
    </div>
</template>

<script>
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Nav from '@/components/Nav.vue'
import Videos from '@/components/Videos.vue'

export default {
    name: 'Home',
    components: {
        Main,
        About,
        Nav,
        Videos,
    }
}
</script>
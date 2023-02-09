<template>
    <div class="about min-h-screen flex items-center justify-center md:justify-start text-white relative bg-black">
        <video autoplay loop muted plays-inline class="min-h-screen video absolute top-0">
            <source src="@/assets/videos/logoAnimationV2.mp4" type="video/mp4">
        </video>
        <div class="about-text flex flex-col md:pl-20 space-y-4">
            <span class="text-3xl md:text-5xl cursor-default">ABOUT ME</span>
            <p class="text-lg md:text-xl cursor-default tracking-wide">
               <span class="mr-3">Hi my name is Andy Maldonado.</span>I have 22 years old and im from Argentina<br>
                I am a composer<span class="font-sans">, </span> beatmaker and i also do mixing and mastering.
                <!-- HACER -->
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
.about-text {
    width: 50%;
    z-index: 10;
    font-family: 'TypoGraphica';
}
</style>
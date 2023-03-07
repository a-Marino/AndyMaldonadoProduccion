<template>
    <div class="bg-black text-white min-h-screen flex justify-center relative" id="main">
        <!-- VIDEOS LOGO 3D -->
        <video autoplay loop muted plays-inline class="md:min-h-screen absolute bottom-0">
            <source src="@/assets/videos/logoAnimation.mp4" type="video/mp4">
        </video>
        <!-- MAIN  -->
        <div class="main min-w-full">
            <div class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between justify-center items-center min-h-full">
                <!-- NAME -->
                <div class="flex flex-col name space-y-1 md:ml-20">
                    <span class="text-3xl md:text-8xl andy">ANDY</span>
                    <span class="text-5xl md:text-8xl">MALDONADO</span>
                </div>
                <!-- SOCIAL MEDIA -->
                <div class="redes flex flex-row md:flex-col md:space-y-5 md:space-x-0 space-x-5 md:mr-7">
                    <a href="https://www.instagram.com/andymaldonadok/" target="blank">
                        <img src="@/assets/images/instagram.png" alt="instagram" class="w-6 md:w-8 icono-redes">
                    </a>
                    <a href="https://www.youtube.com/@andymaldonado729" target="blank">
                        <img src="@/assets/images/youtube.png" alt="youtube" class="w-6 md:w-8 icono-redes">
                    </a>
                    <a href="https://open.spotify.com/artist/0XAP7Oe1XWcO8xU3MStmpn?si=lXuNBH3HSB6htieGUZLG6w&nd=1" target="blank">
                        <img src="@/assets/images/spotify-logo.png" alt="spotify" class="w-6 md:w-8 icono-redes">
                    </a>
                    <a href="https://www.tiktok.com/@andymaldonadok" target="blank">
                        <img src="@/assets/images/tik-tok.png" alt="tiktok" class="w-6 md:w-8 icono-redes">
                    </a>
                    <a href="https://soundcloud.com/andy-maldonado-885670744" target="blank">
                        <img src="@/assets/images/soundcloud-logo.png" alt="tiktok" class="w-6 md:w-8 icono-redes">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style scoped>
.main {
    z-index: 1;

}

.name {
    font-family: 'TypoGraphica';
}

.andy {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
}

span {
    cursor: default;
    transition: .5s;
    color: #fff;
}

.icono-redes:hover {
    transform: scale(1.2);
    transition: .1s ease-in-out;
}
</style>
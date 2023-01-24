<template>
    <div class="vidSection min-h-screen flex flex-col justify-center space-y-3 md:p-10 text-white">
        <span class="ml-10 text-4xl md:mt-0 mt-16">Last videos</span>
        <div class="flex flex-col md:flex-row justify-center items-center md:space-x-5 md:space-y-0 space-y-5">
            <div v-for="id, Index in idVideo" :key="Index">
                <iframe class="videos" :src="'https://www.youtube-nocookie.com/embed/'+id.id.videoId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="no-referrer"></iframe>
            </div> 
        </div>
        <div class="hidden md:flex justify-center">
            <a href="https://www.youtube.com/@andymaldonado729" class="moreBtn cursor-pointer mt-5 text-3xl rounded-md" target="blank">MORE</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Videos',
    data() {
        return {
            idVideo: ''
        }
    }, 
    methods: {
        async getIdVideo() {
            await this.axios
            .get(`https://youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&channelId=UCgphadt8Sz0kwfBJaq6vlRQ&maxResults=3&order=date&key=${process.env.VUE_APP_APIKEY}`)
            .then(res => (
                this.idVideo = res.data.items
                //console.log(res.data.items)
            )).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getIdVideo()
    }
}
</script>

<style scoped>
.vidSection {
    font-family: 'TypoGraphica';
    background-color: black;
    background-image: url(../assets/images/bg-logo-2.png);
    background-size: cover;
}
.videos {
    width: 250;
    height: 141;
    border: 3px solid #E4E8ED;
    border-radius: 10px;
}

@media (min-width: 768px) {
    .videos {
        width: 400px;
        height: 225px;
    }
}

.moreBtn {
    border: 3px solid white;
    padding: 5px 10px;
    transition: .25s;
}

.moreBtn:hover {
    background-color: white;
    color: black;
}

</style>
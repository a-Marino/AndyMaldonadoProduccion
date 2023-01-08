<template>
    <div class="about min-h-screen flex items-center justify-center md:justify-start md:pl-20">
        <div class="about-text flex flex-col space-y-4">
            <span class="text-3xl md:text-5xl cursor-default">ABOUT ME</span>
            <p class="text-lg md:text-xl cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet beatae nisi culpa illum, voluptatibus fuga ipsam dolorum? Similique, itaque consequatur ipsam omnis esse, quo corrupti aliquam facere beatae error delectus, porro nihil impedit maxime soluta debitis nobis ut ab!
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
.about {
    background-image: url(../assets/images/bg-logo-1.png);
    background-size: cover;
    background-position-x: 95%;
    font-family: 'TypoGraphica';
}

.about-text {
    width: 50%;
}

@media (min-width: 768px) { 
    .about {
        background-size: cover;
    }
}
</style>
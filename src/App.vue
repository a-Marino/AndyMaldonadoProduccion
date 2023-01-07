<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "DAMN";
  src: url(assets/fonts/DAMN.ttf);
}

@font-face {
  font-family: 'BasementGrotesque';
  src: url(assets/fonts/BasementGrotesque.otf);
}

@font-face {
  font-family: 'TypoGraphica';
  src: url(assets/fonts/TypoGraphica.otf);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

/* HIDE SCROLLBAR */
body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>

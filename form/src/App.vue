<template>
<div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
</div>
</template>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

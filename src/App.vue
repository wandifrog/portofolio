<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
import Home from './components/Home.vue'
export default {
  components: {
    'tampilan': Home 
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
   transition-duration: 200ms; 
}

.fade-enter-active {
  transition-delay: 200ms;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v28/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
  background-color: #FAFAFA;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar { 
    display: none; 
}
</style>

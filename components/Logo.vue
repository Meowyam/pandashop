<template>
  <div class="logo vh-25 dt w-100">
    <div class="text measure-wide">
      <span class="title">pandashop</span>
      <div class="pandahr"></div>
    </div>
  </div>
</template>

<style>
.text {
  width: 100%;
  height: 100%;
}
.logo {
  animation: 1s appear;
  margin: auto;
  font-family: 'Sacramento', sans-serif;
  font-size: 3rem;
}
.pandahr {
  background-image: url('~@/static/pandasmall.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 100%;
  min-height: 5rem;
  position: relative;
  z-index: 800;
  animation-name: panda;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
.rainbow {
  position: relative;
  z-index: 1000;
}
.title {
  position: relative;
  z-index: 1000;
}
.eachLetters {
  display: block;
}
.web {
  position: relative;
  top: -3rem;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

@keyframes panda {
  0% { transform: rotate(0deg) }
  25% { transform: rotate(30deg) }
  50% { transform: rotate(0deg) }
  75% { transform: rotate(-30deg) }
  100% { transform: rotate(0deg) }
}
</style>

<script>


export default {
  name: "logo",
  data() {
    return {};
  },
  mounted() {
    document.querySelectorAll('.title').forEach((eachLetter) => {
      eachLetter.innerHTML = eachLetter.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    })
    this
    .$anime
    .timeline({
      delay: 1000,
      loop: true,
    })
    .add({
      targets: '.title .letter',
      opacity: [0,1],
      translateZ: 0,
      rotate: 90,
      easing: "easeInExpo",
      duration: 1000,
      delay: (el, i) => 300*i
    })
    .add({
      targets: '.title',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 3000,
    })
  }
}

</script>

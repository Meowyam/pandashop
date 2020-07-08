<template>
  <header class="logo vh-15 dt w-100">
    <div class="text measure-wide">
      <h1 class="title">pandashop</h1>
      <div class="pandahr"></div>
    </div>
  </header>
</template>

<style>
.flower {
  width: 10%;
  height: 10%;
}
.text {
  width: 100%;
  height: 100%;
}
h1 {
  font-size: 3rem;
  font-weight: 300;
}
.logo {
  animation: 1s appear;
  font-family: 'Sacramento', sans-serif;
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
.title span {
  display: inline-block;
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
      targets: '.letter',
      rotateY: [0,360],
      easing: "easeOutQuart",
      duration: 2000,
      delay: (el, i) => 500*i,
      endDelay: 3000,
    })
  }
}

</script>

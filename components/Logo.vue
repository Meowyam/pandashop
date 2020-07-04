<template>
  <div class="logo vh-25 dt w-100">
    <div class="text measure-wide">
      <span class="title">pandashop</span>
    </div>
  </div>
</template>

<style>
.text {
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9)
}
.logo {
  background-image: url('~@/static/panda.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: 1s appear;
  margin: auto;
  font-family: 'Sacramento', sans-serif;
  font-size: 3rem;
}
.text span {
  text-align: right;
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
      duration: 3000,
      easing: 'easeOutExpo',
    })
  }
}

</script>

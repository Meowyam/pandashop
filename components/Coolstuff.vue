<template>
  <div class="cool">
    <div class="showhide avenir button br-pill white bg-hot-pink pointer"
    @click="toggle=!toggle; slide()">
      Cool Stuff
    </div>
    <div class="center mw6 pa2 stuff-holder" v-show="toggle">
      <div class="fl w-third pa2 stuff">
        <a href="/sprites" class="link mid-gray hover-hot-pink fw6 avenir">spritesheet</a>
        <span class="hot-pink georgia db">for an abandoned game</span>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/canvas" class="link mid-gray hover-hot-pink fw6 avenir">some canvas animations</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/nonukes" class="link mid-gray hover-hot-pink fw6 avenir">no nukes protest svg</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="://snowglobe.netlify.app" class="link mid-gray hover-hot-pink fw6 avenir">snowglobe</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/bounce" class="link mid-gray hover-hot-pink fw6 avenir">pong</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/games/penguin" class="link mid-gray hover-hot-pink fw6 avenir">penguin memory game</a>
        <span class="hot-pink georgia db">from <a href="http://www.crunchyroll.com/polar-bear-cafe" class="link dark-pink hover-hot-pink">Shirokuma Cafe</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coolstuff",
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    slide() {
      this
      .$anime
      .timeline({
        targets: '.stuff-holder',
      })
      .add({
        scale: [0,1],
        easing: 'easeInSine',
        duration: 300,
      })
      .add({
        top: [0,'50px'],
        duration: 300,
        easing: 'linear',
      })
    },
  },
}
</script>

<style>
  .cool {
    font-size: 1rem;
    margin-top: 1.5rem;
  }
  .showhide {
    font-family: 'Pacifico', sans-serif;
  }
</style>

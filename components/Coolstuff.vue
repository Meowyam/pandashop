<template>
  <div class="cool">
    <div class="showhide avenir button dark-red bg-white pointer mb2"
    @click="toggle=!toggle; slide()" role="button" aria-pressed="false">
      Cool Stuff
    </div>
    <div class="center mw6 pa2 stuff-holder" v-show="toggle">
      <div class="fl w-third pa2 stuff">
        <a href="/sprites" class="link fw6 avenir">spritesheet</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/canvas" class="link fw6 avenir">some canvas animations</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/nonukes" class="link fw6 avenir">no nukes protest svg</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="https://snowglobe.netlify.app" class="link fw6 avenir">snowglobe</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/games/bounce" class="link fw6 avenir">pong</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="/games/penguin" class="link fw6 avenir">penguin memory game</a>
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
    margin-bottom: 1.5rem;
  }

  .cool .showhide {
    border-color: dodgerblue;
    background-color: lightyellow;
    box-shadow: 3px 6px dodgerblue;
  }

  .cool .showhide:hover {
    box-shadow: 3px 6px cornflowerblue;
    background-color: aliceblue;
  }

  .cool .stuff a {
    color: royalblue;
  }

  .cool .stuff a:hover {
    color: crimson;
  }
</style>

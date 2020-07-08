<template>
  <div class="useful">
    <div class="showhide avenir button light-purple bg-white pointer mb2"
    @click="toggle=!toggle; slide()" role="button" aria-pressed="false">
      Useful Stuff
    </div>
    <div class="center mw6 pa2 stuff-holder" v-show="toggle">
      <div class="fl w-third pa2 stuff">
        <a href="https://libcardgen.netlify.app/" class="link fw6 avenir">library card generator</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="http://pandashop.co.uk/tumblrtag" class="link fw6 avenir">tumblr tag cloud generator</a>
      </div>
      <div class="fl w-third pa2 stuff v-mid">
        <a href="http://chilon.net:8092" class="link fw6 avenir">timepuncher</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usefulstuff",
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
  .useful {
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  .useful .showhide {
    border-color: mediumspringgreen;
    background-color: lightyellow;
    box-shadow: 3px 6px mediumspringgreen;
  }

  .useful .showhide:hover {
    box-shadow: 3px 6px turquoise;
    background-color: honeydew;
  }

  .useful .stuff a {
    color: #008080;
  }

  .useful .stuff a:hover {
    color: #9400D3;
  }

</style>

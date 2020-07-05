<template>
  <div class="useful">
    <div class="showhide avenir button br-pill white bg-light-purple pointer"
    @click="toggle=!toggle; slide()">
      Useful Stuff
    </div>
    <div class="center mw6 pa2 stuff-holder" v-show="toggle">
      <div class="fl w-third pa2 stuff">
        <a href="https://libcardgen.netlify.app/" class="link mid-gray hover-purple fw6 avenir">Library card generator</a>
        <span class="purple georgia db">book review card for social media</span>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="://pandashop.co.uk/tumblrtag" class="link mid-gray hover-purple fw6 avenir">tumblr tag cloud generator</a>
      </div>
      <div class="fl w-third pa2 stuff">
        <a href="://chilon.net/8092" class="link mid-gray hover-purple fw6 avenir">timepuncher</a>
        <span class="purple georgia db">intuitive flexible time puncher</span>
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

  .showhide {
    font-family: 'Pacifico', sans-serif;
  }
</style>

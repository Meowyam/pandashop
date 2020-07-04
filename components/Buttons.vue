<template>
  <div class="links">
    <a
      href="https://www.linkedin.com/in/meowyam/"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-dark-pink dim"
      v-tooltip="'Link to my linkedin'"
      @mouseover="logoOn('.fa-linkedin')"
      @mouseout="logoOff('.fa-linkedin')"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']"
       alt="Link to my linkedin" />
    </a>
    <a
      href="https://github.com/meowyam"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-orange dim"
      v-tooltip="'Link to my github'"
      @mouseover="logoOn('.fa-github-alt')"
      @mouseout="logoOff('.fa-github-alt')"
    >
      <font-awesome-icon :icon="['fab', 'github-alt']"
       alt="Link to my github" />
    </a>
    <a
      href="https://instagram.com/the.panda.shoppe"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-green"
      v-tooltip="'Link to my instagram'"
      @mouseover="logoOn('.fa-instagram')"
      @mouseout="logoOff('.fa-instagram')"
    >
      <font-awesome-icon :icon="['fab', 'instagram']"
       alt="Link to my instagram" />
    </a>
    <a
      href="https://twitter.com/h3110p4nd4"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-blue dim"
      v-tooltip="'Link to my twitter'"
      @mouseover="logoOn('.fa-twitter')"
      @mouseout="logoOff('.fa-twitter')"
    >
      <font-awesome-icon :icon="['fab', 'twitter']"
       alt="Link to my twitter" />
    </a>
    <a
      href="mailto:maryam@pandashop.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-purple dim"
      v-tooltip="'E-mail me'"
      @mouseover="logoOn('.fa-envelope')"
      @mouseout="logoOff('.fa-envelope')"
    >
      <font-awesome-icon :icon="['fas', 'envelope']"
       alt="E-mail me" />
    </a>
    <div class="copyright moon-gray">
      Copyright © 2020 chilon.net. All rights reserved.
    </div>
  </div>
</template>

<style>
.links {
  padding-top: 15px;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
}

.copyright {
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>

<script>
export default{
  name: "buttons",
  data() {
    return {};
  },
  methods: {
    logoOn(icon) {
      this.$anime({
        targets: icon,
        rotateY: 360,
        duration: 3000,
      })
    },
    logoOff(icon) {
      this.$anime({
        targets: icon,
        rotateY: -360,
        duration: 3000,
      })
    },
  }
}
</script>

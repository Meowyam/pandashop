<template>
  <div class="links vh-10">
    <a
      href="https://www.linkedin.com/in/meowyam/"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-dark-pink dim"
      v-tooltip.bottom="'Link to my linkedin'"
      @mouseover="logoOn('.fa-linkedin')"
      @mouseout="logoOff('.fa-linkedin')"
      aria-label="LinkedIn"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']"
       alt="Link to my linkedin" />
    </a>
    <a
      href="https://github.com/meowyam"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-orange dim"
      v-tooltip.bottom="'Link to my github'"
      @mouseover="logoOn('.fa-github-alt')"
      @mouseout="logoOff('.fa-github-alt')"
      aria-label="Github"
    >
      <font-awesome-icon :icon="['fab', 'github-alt']"
       alt="Link to my github" />
    </a>
    <a
      href="https://meowyam.github.io/blog/"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-gold dim"
      v-tooltip.bottom="'Link to my blog'"
      @mouseover="logoOn('.fa-edit')"
      @mouseout="logoOff('.fa-edit')"
      aria-label="Blog"
    >
      <font-awesome-icon :icon="['fas', 'edit']"
       alt="Link to my blog" />
    </a>
    <a
      href="https://instagram.com/h3110.p4nd4"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-green"
      v-tooltip.bottom="'Link to my instagram'"
      @mouseover="logoOn('.fa-instagram')"
      @mouseout="logoOff('.fa-instagram')"
      aria-label="Instagram"
    >
      <font-awesome-icon :icon="['fab', 'instagram']"
       alt="Link to my instagram" />
    </a>
    <a
      href="https://twitter.com/h3110p4nd4"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-blue dim"
      v-tooltip.bottom="'Link to my twitter'"
      @mouseover="logoOn('.fa-twitter')"
      @mouseout="logoOff('.fa-twitter')"
      aria-label="Twitter"
    >
      <font-awesome-icon :icon="['fab', 'twitter']"
       alt="Link to my twitter" />
    </a>
    <a
      href="mailto:maryam@pandashop.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      class="button br-pill white bg-purple dim"
      v-tooltip.bottom="'E-mail me'"
      @mouseover="logoOn('.fa-envelope')"
      @mouseout="logoOff('.fa-envelope')"
      aria-label="Email"
    >
      <font-awesome-icon :icon="['fas', 'envelope']"
       alt="E-mail me" />
    </a>
  </div>
</template>

<style>
.links {
  padding-top: 1rem;
}
.tooltip {
  z-index: 5000;
}
.tooltip-inner {
  font-size: 0.8rem;
  background: #ffd700;
  color: #555555;
  padding: 0.5rem;
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

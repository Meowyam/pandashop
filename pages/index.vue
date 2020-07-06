<template>
  <div class="container">
    <div class="pa3 outside">
      <div class="bg-white pa2">
        <Logo />
        <Buttons />
        <Usefulstuff />
        <Coolstuff />
        <Penguin />
        <Copyright />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.outside {
  background-color: rgba(255,255,255,0.8);
}

.stuff {
  height: 100%;
  min-height: 10vh;
  max-height: 10vh;
  margin-bottom: 1rem;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  font-size: 1.2rem;
}

@media screen and (min-width: 48em) {
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
}

</style>

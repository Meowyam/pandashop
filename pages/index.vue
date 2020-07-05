<template>
  <div class="container">
    <div>
      <Logo />
      <Buttons />
      <Usefulstuff />
      <Coolstuff />
      <Copyright />
      <Penguin />
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

.stuff {
  height: 100%;
  min-height: 10vh;
  max-height: 10vh;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
}
</style>

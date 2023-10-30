<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/places/1">place 1</NuxtLink></li>
        <li><NuxtLink to="/places/2">place 2</NuxtLink></li>
        <li><NuxtLink to="/places/3">place 3</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
<script>
export default {
  name: "dfault"
}
</script>

<style scoped>

</style>
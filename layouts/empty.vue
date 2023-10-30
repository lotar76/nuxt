<template>
  <slot/>
</template>

<script setup lang="ts">
function click(){
  console.log('click')
}
definePageMeta({
  layout: 'empty',
});
</script>

<style scoped>

</style>
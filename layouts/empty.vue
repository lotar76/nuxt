<template>
  <div style="position: absolute; z-index: 100" @click="click">click</div>
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
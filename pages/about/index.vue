<template>
  <div>Это домашняя страница</div>
</template>

<script setup lang="ts">
import {useHead} from "unhead";

useHead({
  title:"Домашняя страница",
  meta: [
    {
      property: 'description',
      content: "description home",
    },
    {
      property: 'og:title',
      content: "description home",    },
    {
      property: 'og:description',
      content: "description home",    },
    // {
    //   property: 'og:image',
    //   content: image_url,
    //   // content: Url_base+'forest.jpg',
    // },
    // {
    //   property: 'og:image:width',
    //   content:256,
    // },
    // {
    //   property: 'og:image:height',
    //   content:256,
    // },
    {
      property: 'og:url',
      content: window.location.href,
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    // {
    //   name: 'twitter:title',
    //   content: place.value.info.title,
    // },
    // {
    //   name: 'twitter:description',
    //   content: share_text,
    // },
    // {
    //   name: 'twitter:image',
    //   content: image_url,
    // },
    {
      name: 'twitter:url',
      content: window.location.href,
    },

  ]
})
</script>
<style scoped>

</style>
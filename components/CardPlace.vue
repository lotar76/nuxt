<template>
  <div class="card-place"
       @click="showGallary"
       :style="{
    textAlign: item.card.position,
    marginTop:item.card.top+'px'
  }">
    <!--       v-touch:tap="showGallary"-->


    <div class="card-place__content"
         :style="{
      width:item.card.size+'px'
    }">
      <div class="card-place__image" :style="{textAlign: item.image.position}">
        <img
            :src="`/images/preview/${item.image.src}`" alt=""
            :width="item.image.size"
            :height="item.image.size"
            :title="item.title"
        >
      </div>
      <div class="card-place__text" v-html="item.text.length < 400 ? item.text :item.text.slice(0, 400) + '...'"></div>
      <div class="card-place__arrow"
           v-if="item.arrow"
           :style="{
        top:item.arrow.top+'%',
        left:item.arrow.left+'%'
           }"
      >
        <arrow-first :type="item.arrow.type"/>
      </div>
    </div>
  </div>


</template>

<script lang="ts" setup>
import {ArrowFirst} from "#components"
// import {defineEmits, defineProps} from "vue";

// import ArrowFirst from "./arrowFirst.vue";
const emit = defineEmits(['showGallery'])
const props = defineProps({
  'item': {
    type: Object,
    default: {
      id: 1,
      card: {size: 261, position: 'left',},
      arrow: {type: 1, left: 10, top: 27},
      image: {size: 182, position: 'left', src: '1.png'},
      title:'Mendelssohn-Haus',
      text: 'title'
    }
  }
})
function showGallary() {
  emit('showGallery', props['item'])
}
</script>

<style scoped lang="scss">
.card-place {
  width: 100%;
  padding: 0 10px;

  text-align: right;

  &__content {
    display: inline-block;
    flex-direction: column;
    position: relative;

  }

  &__text {
    font-family: 'Libre Caslon Text', serif;
    margin-top: 20px;
    font-size: 16px;
    font-weight:500;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #4F4946;
  }

  &__image {
    img{
      border-radius: 50%;
    }
  }

  .center {
    text-align: center;
  }

  &__arrow {
    //top: 20%;
    //left: 10%;
    position: absolute;
    //border: 1px green solid;
  }


}

</style>
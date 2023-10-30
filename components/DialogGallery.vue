<template>
  <div class="dialog-gallery" v-if="showDialog">
    <div class="dialog-gallery-content__close" @click.stop="closeDialog">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z"
            fill="white"/>
      </svg>
    </div>
    <div class="dialog-gallery-layout"/>
    <div class="image-block">
      <PinchScrollZoom
          ref="zoomer"
          :width="450"
          :height="1000"
          :min-scale="1"
          :max-scale="6"
          within
          @scaling="(e) => onEvent('scaling', e)"
          @startDrag="e => onEvent('startDrag', e)"
          @stopDrag="e => onEvent('stopDrag', e)"
          @dragging="e => onEvent('dragging', e)"
      >
        <img :src="`/images/${item.image.src}`" alt="">
      </PinchScrollZoom>
    </div>


    <div class="dialog-gallery-content">
      <div class="dialog-gallery-content__info"
           v-touch:swipe.top="swipeTop"
           v-touch:swipe.bottom="swipeBottom"
           v-touch:tap="swipeTop"
           id="info">
        <div class="dialog-gallery-content__info-title">
          {{ item.title }}
        </div>
        <div class="dialog-gallery-content__info-text" v-html="item.text">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref, watch} from "vue";

import PinchScrollZoom, {
  type PinchScrollZoomEmitData,
  type PinchScrollZoomExposed
} from '@coddicat/vue-pinch-scroll-zoom';


function swipeBottom() {
  // const info = document.querySelector('.dialog-gallery-content__info') as HTMLElement;
  // info.style.top = null
  // info.style.bottom = "-90px"
  // info.style.height = "300px";

}

function swipeTop() {
  // const info = document.querySelector('.dialog-gallery-content__info') as HTMLElement;
  // info.style.bottom = null
  // info.style.top = "200px"
  // info.style.height = "600px";

}

const zoomer = ref<PinchScrollZoomExposed>();

function onEvent(name: string, e: PinchScrollZoomEmitData): void {

  if (name === 'scaling') {
    const info = document.querySelector('.image-block') as HTMLElement;
    info.style.zIndex = '20';
  } else {
    // const info = document.querySelector('.image-block') as HTMLElement;
    // info.style.zIndex = '0';
    // reset()
  }
  if(e.scale < 1.5){
    const info = document.querySelector('.image-block') as HTMLElement;
    info.style.zIndex = '1';
    // reset()
  }

  // state.eventName = name;
  // state.eventData = e;
  // state.scale = e.scale;
  // state.originX = e.originX;
  // state.originY = e.originY;
  // state.translateX = e.translateX;
  // state.translateY = e.translateY;
}

function reset(): void {
  zoomer.value?.setData({
    scale: 1,
    originX: 0,
    originY: 0,
    translateX: 0,
    translateY: 0
  });
}


const props = defineProps({
  'showDialog': {
    type: Boolean,
    default: false
  },
  'item': {
    type: Object,
    default: {
      id: 1,
      card: {size: 350, position: 'center', top: 100},
      image: {size: 350, position: 'center', src: '8.png'},
      text: '',
      title: ''
    }
  }
})
const emit = defineEmits(['close', 'share'])


function share() {
  emit("share")
}


function closeDialog() {
  emit("close")
}
</script>

<style lang="scss">
.image-block {
  //background-color: red;
  position: absolute;
  top: 0px;
  padding-top: 150px !important;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  height: 100vh;
  width: 100%;

  img {
    border-radius: 16px;
    width: 85%;
    //height: 200px;
  }
}

.pinch-scroll-zoom__content {
  position: relative !important;
  top: 70px !important;
  //height: 100% !important;
  text-align: center !important;
  //z-index: 20;
}

.break {
  background-color: red;
  height: 10px;
  width: 100%;
}

.dialog-gallery {
  width: 100%;
  //position: relative;

  &-content {
    //background-color: red!important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    //height: 100vh;
    //overflow: hidden;
    //max-width: 100%;

    position: absolute;
    top: 340px;
    height: 100%;
    //bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    margin: 3px auto;
    width: 100%;
    //background-color: black;
    //border-radius: 16px;
    z-index: 1;

    &__info {
      //border:1px solid red;
      //background-color: black;
      //position: absolute;
      //left: 0;
      //right: 0;
      padding: 10px;
      //bottom: 0px;
      //max-height: 350px;
      overflow: auto;
      color: white;
      opacity: 0.89;
      transition: all 0.2s;
      z-index: 10;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        opacity: 0.5;
        background-color: black;
      }

      &-title {
        font-family: LibreCaslonRegular, sans-serif;
        margin: 5px 0 15px 0;
        font-size: 20px;
      }

      &-text {
        padding-bottom: 50px;
        overflow: auto;
        font-family: LibreCaslonRegular, sans-serif;
        margin: 5px 0;
        font-size: 14px;
        line-height: 26px;
        //opacity: .8;
        height: 350px;
        //z-index: 140;
      }
    }
    &__close {
      width: 50px;
      height: 50px;
      position: absolute;
      right: -10px;
      top: 10px;
      z-index: 20;
    }

    &__header {
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  &-layout {
    position: fixed;
    background-color: #000000;
    opacity: 0.85;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

</style>
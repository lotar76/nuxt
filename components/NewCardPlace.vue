<template>
  <div
      class="wrapper"
      :class="props['index'] == 0 ? 'right up' : props['index']%2 === 0 ? 'right' : 'left'"
  >

    <div class="new-place" @click="showGallary" v-if="props['index']%2 == 0">
      <div class="new-place__image">
        <img
            :src="`/images/preview/${item.image.src}`" alt=""
            :width="item.image.size"
            :height="item.image.size"
            :title="item.title"
        >
      </div>
      <div class="new-place__info">
        <div class="new-place__title">{{ item.title }}</div>
        <div class="new-place__text" v-html="item.text.length < 200 ? item.text :item.text.slice(0, 200) + '...'">
        </div>
      </div>
    </div>
    <div class="new-place" @click="showGallary" v-else>
      <div class="new-place__info">
        <div class="new-place__title">{{ item.title }}</div>
        <div class="new-place__text" v-html="item.text.length < 200 ? item.text :item.text.slice(0, 200) + '...'">
        </div>
      </div>
      <div class="new-place__image">
      <img
          :src="`/images/preview/${item.image.src}`" alt=""
          :width="item.image.size"
          :height="item.image.size"
          :title="item.title"
      >
    </div>
    </div>


  </div>

  <!--  <div class="card-place"-->
  <!--       v-touch:tap="showGallary"-->
  <!--     -->
  <!--       :style="{-->
  <!--    textAlign: item.card.position,-->
  <!--    marginTop:item.card.top+'px'-->
  <!--  }">-->
  <!--    <div class="card-place__content"-->
  <!--         :style="{-->
  <!--      width:item.card.size+'px'-->
  <!--    }">-->
  <!--      <div class="card-place__image" :style="{textAlign: item.image.position}">-->
  <!--        <img-->
  <!--            :src="`/images/preview/${item.image.src}`" alt=""-->
  <!--            :width="item.image.size"-->
  <!--            :height="item.image.size"-->
  <!--            :title="item.title"-->
  <!--        >-->
  <!--      </div>-->
  <!--      <div class="card-place__text" v-html="item.text.length < 400 ? item.text :item.text.slice(0, 400) + '...'"></div>-->
  <!--      <div class="card-place__arrow"-->
  <!--           v-if="item.arrow"-->
  <!--           :style="{-->
  <!--        top:item.arrow.top+'%',-->
  <!--        left:item.arrow.left+'%'-->
  <!--           }"-->
  <!--      >-->
  <!--        <arrow-first :type="item.arrow.type"/>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->


</template>

<script lang="ts" setup>
import {defineEmits, defineProps} from "vue";

const props = defineProps({
  'index': {
    type: Number,
    default: '0'
  },
  'item': {
    type: Object,
    default: {
      id: 1,
      card: {size: 261, position: 'left',},
      arrow: {type: 1, left: 10, top: 27},
      image: {size: 182, position: 'left', src: '1.png'},
      title: 'Mendelssohn-Haus',
      text: 'title'
    }
  }
})

const emit = defineEmits(['showGallery'])


function showGallary() {
  emit('showGallery', props['item'])
}
</script>

<style scoped lang="scss">

.up {
  &::before {
    content: '';
    width: 234px;
    height: 152px;
    //background-color: red;
    background-image: url('/images/u.png');
    margin-left: 80px;
    margin-bottom: 10px;
    margin-top: -30px;
  }
}
.left {
  &::after {
    content: '';
    width: 234px;
    height: 152px;
    background-image: url('/images/u.png');
    margin-left: 80px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}

.right {
  &::after {
    content: '';
    width: 234px;
    height: 152px;
    background-image: url('/images/d.png');
    //border: 1px dashed grey;
    margin-left: 80px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
background-color: #f5f5f5;
}

.new-place {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  margin: 10px 0;
  //border: 1px solid red;

  &__info {
    padding: 0 15px;
  }

  &__title {
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #03223D;
    margin-bottom: 10px;
  }

  &__text {

    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #03223D;

  }

  &__image {
    img {
      width: 120px;
      height: 120px;
      border: 3px solid #03223D;
      border-radius: 50%;
    }
  }
}

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
    font-family: LibreCaslonRegular, sans-serif;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #4F4946;
  }

  &__image {
    img {
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
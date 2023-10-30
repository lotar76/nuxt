<template>
  <div>
    <div class="new-dis-share-block">
      <div class="new-dis-share-block__title">
        {{ props.item.info.share_title }}
      </div>
      <div class="new-dis-share-block-input">
        <div class="new-dis-share-block-input__icon">
          <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.76676 1.34986C7.92232 1.18933 8.10825 1.06136 8.31374 0.973391C8.51923 0.885421 8.74016 0.839212 8.96368 0.837454C9.1872 0.835697 9.40884 0.878425 9.61568 0.963153C9.82253 1.04788 10.0105 1.17291 10.1685 1.33097C10.3266 1.48903 10.4516 1.67695 10.5363 1.8838C10.6211 2.09064 10.6638 2.31228 10.662 2.5358C10.6603 2.75932 10.6141 2.98025 10.5261 3.18574C10.4381 3.39123 10.3101 3.57716 10.1496 3.73271L9.48962 4.39271L7.10676 2.00986L7.76676 1.34986ZM6.65248 2.46414L1.42948 7.68714C1.24091 7.87571 1.10376 8.10971 1.03176 8.36686L0.368764 10.7347C0.353446 10.7896 0.352995 10.8476 0.36746 10.9027C0.381924 10.9578 0.410782 11.0081 0.451078 11.0484C0.491374 11.0887 0.541658 11.1176 0.596779 11.132C0.651899 11.1465 0.709875 11.146 0.764764 11.1307L3.13219 10.4677C3.38931 10.3958 3.62355 10.2588 3.81234 10.07L9.03576 4.84743L6.65291 2.46457L6.65248 2.46414Z"
                fill="#4F4946"/>
          </svg>

        </div>
        <div class="new-dis-share-block-input__title"> {{ props.item.info.title }}</div>
        <div class="new-dis-share-block-input__textarea" v-html="textShare" contenteditable="true"
             @focusout="updateTextShare"/>
      </div>

    </div>
    <div class="btn_wrapper">
      <div class="btn" @click="share">
        {{ props.item.info.share_btn }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ShareBlock'
}
</script>
<script setup>
import {defineEmits, defineProps, ref} from "vue";

const emit = defineEmits(['share'])

const props = defineProps({
  'item': {
    type: Object,
    default: {}
  }
})

let textShare = props.item.info.share_text


function share() {
  emit('share', textShare.value)
}

function updateTextShare(e) {
  textShare.value = e.target.innerHTML;
}
</script>

<style lang="scss">
.new-dis-share-block {
  //border-bottom: 1px solid #cccccc;
  //border-top: 1px solid #cccccc;
  //width: 375px;
  padding: 80px 0;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  position: relative;
  //border: 1px solid red;
  //margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 150px;
    //background-color: #F4F4F4;
    background-image: url('/images/Down-min.png');
    background-color: #F5F5F5;
    background-size: cover;
    //border: 1px solid red;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    width: 100%;
    height: 150px;
    background-color: #F5F5F5;
    background-image: url('/images/UP-min.png');
    background-size: cover;
    z-index: 2;
    //border: 1px solid red;
  }

  &__title {
    font-family: Italianno, sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
    margin: 15px;
    background-color: #F5F5F5;
    z-index: 5;


  }

  .new-dis-share-block-input {
    color: #4F4946;
    border-radius: 16px;
    background: #fdfdfe;
    padding: 15px 10px;
    position: relative;
    word-break: break-word;
    max-height: 180px;
    overflow: auto;
    z-index: 5;
    border: 2px solid #e3e1e1;
    margin: 0 10px;

    &__icon {
      position: absolute;
      top: 15px;
      right: 15px;
      opacity: 0.5;
    }

    &__title {
      font-family: LibreBaskervilleRegular, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 10px;
      z-index: 5;
      width: 98%;

    }

    &__textarea {
      font-family: Inter, serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 19px;
      text-align: left;
      min-width: 274px;
      z-index: 15;


    }
  }


  .new-dis-input-share {
    font-family: Inter, serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    text-align: left;
    background-color: red;
    border: 1px solid grey;
    //border: none;
    width: 100%;
    z-index: 5;

  }

}
.btn_wrapper{
background-color: #f4f4f4;
  height: 100px;
  padding:  30px  0 150px 0;
}
.btn {
  //border: 1px solid red;
  border-radius: 34px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #F5637D;
  color: white;
  margin: 0 20px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  z-index: 5;
  background: linear-gradient(107.7deg, #1F55B5 8.21%, #E459CE 97.42%);

}
</style>
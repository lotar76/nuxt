<template>
<div class="share-block">
  <div class="share-block__title">
    {{ props.item.info.share_title }}
  </div>
  <div class="share-block-input">
    <div class="share-block-input__icon">
      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.76676 1.34986C7.92232 1.18933 8.10825 1.06136 8.31374 0.973391C8.51923 0.885421 8.74016 0.839212 8.96368 0.837454C9.1872 0.835697 9.40884 0.878425 9.61568 0.963153C9.82253 1.04788 10.0105 1.17291 10.1685 1.33097C10.3266 1.48903 10.4516 1.67695 10.5363 1.8838C10.6211 2.09064 10.6638 2.31228 10.662 2.5358C10.6603 2.75932 10.6141 2.98025 10.5261 3.18574C10.4381 3.39123 10.3101 3.57716 10.1496 3.73271L9.48962 4.39271L7.10676 2.00986L7.76676 1.34986ZM6.65248 2.46414L1.42948 7.68714C1.24091 7.87571 1.10376 8.10971 1.03176 8.36686L0.368764 10.7347C0.353446 10.7896 0.352995 10.8476 0.36746 10.9027C0.381924 10.9578 0.410782 11.0081 0.451078 11.0484C0.491374 11.0887 0.541658 11.1176 0.596779 11.132C0.651899 11.1465 0.709875 11.146 0.764764 11.1307L3.13219 10.4677C3.38931 10.3958 3.62355 10.2588 3.81234 10.07L9.03576 4.84743L6.65291 2.46457L6.65248 2.46414Z" fill="#4F4946"/>
      </svg>

    </div>
    <div class="share-block-input__title"> {{ props.item.info.title }}</div>
    <div class="share-block-input__textarea" v-html="textShare" contenteditable="true" @focusout="updateTextShare"/>
  </div>
  <div class="share-btn" @click="share">
    {{ props.item.info.share_btn }}
</div>
</div>
</template>

<!--<script >-->
<!--export default {-->
<!--  name: 'ShareBlock'-->
<!--}-->
<!--</script>-->
<script setup lang="ts">
import {defineEmits, defineProps, ref} from "vue";
const emit = defineEmits(['share'])

const props = defineProps({
  'item':{
    type:Object,
    default:{}
  }
})

let textShare = props.item.info.share_text



function share() {
  console.log(textShare)
  emit('share',textShare)
}
function updateTextShare(e:any){
  console.log(e)
  textShare = e.target.innerHTML;
}
</script>

<style  lang="scss">
.share-block{
  //border-bottom: 1px solid #cccccc;
  //border-top: 1px solid #cccccc;
  //width: 375px;
  background-color:#f9f4ee ;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;


  &__title{
    font-family: Italianno,sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
    margin-bottom: 15px;

  }
  .share-block-input{
    color: #4F4946;
    border-radius:16px ;
    background: #F5F5F5;
    padding: 15px 10px;
    position: relative;
    word-break: break-word;
    max-height: 180px;
    overflow: auto;

    &__icon{
      position: absolute;
      top:15px;
      right: 15px;
      opacity: 0.5;
    }

    &__title{
      font-family: LibreBaskervilleRegular,sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 10px;

    }
    &__textarea{
      font-family: Inter,serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 19px;
      text-align: left;
      min-width: 274px;


    }
  }
  .share-btn{
    border-radius: 16px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5637D;
    color: white;
    margin: 10px 0;
    font-family: Inter,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;

  }

  .input-share{
    font-family: Inter,serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    text-align: left;
    background-color:#f9f4ee ;
    border: none;
    width: 100%;

  }

}

</style>
<template>
  <div class="customModal" @click="closeModal()">
      <center>
        <img src="../assets/upgrade-base.png" alt="">
        <img id="hammer" src="../assets/망치.png" alt="">
      </center>
  </div>
</template>


<script>
import EventBus from "../routes/EventBus";
export default {
  data(){
    return{
      click : false
    }
  },
  created(){
    this.start();
  },
  methods:{
    start(){
      setTimeout( () =>{ 
        this.click = true;
      },1000)
    },
    closeModal(){
      if(this.click){
        EventBus.$emit('close-modal',false);
      }
    }
  }
}
</script>

<style>
.customModal {background-color: #000; position: absolute; z-index: 997; width: 400px; height: 100%; top: 0vh; overflow: hidden;} 
.customModal img {position: relative; z-index: 998; margin:60% 0 auto; width:200px; height:200px;}
.customModal #hammer {
position: absolute; z-index: 998; width:130px; height:180px; top: -100px; margin-left: 20px;
animation: target_image 1s; 
animation-iteration-count: 1;
transform-origin: 25% 100%;
animation-fill-mode: forwards;
}

@keyframes target_image {
0% { transform: rotate(-10deg); }
50% { transform: rotate(15deg) }
100% { transform: rotate(-90deg); }
}
</style>


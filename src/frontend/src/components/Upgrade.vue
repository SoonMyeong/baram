<template>
  <div class="customModal">
      <center>
        <img v-if="showStart" src="../assets/upgrading.gif" alt="">
        <img v-if="showLoading" src="../assets/loading.gif" alt="" @click="resultModal()">
        <img v-if="showSuccess" src="../assets/success.gif" alt="">
        <img v-if="showFail" src="../assets/fail.gif" alt="">       
        <p v-if="successMessage" style="padding-top:60%; height:100%; color:white;" @click="exit()">
          강화 성공 , 촉진제 사용 결과: {{resultItemAddLevel}} == 2 ? 성공:실패</p>
        <p v-if="failMessage" style="padding-top:60%; height:100%; color:white;" @click="exit()">강화 실패</p>
      </center>
  </div>
</template>


<script>
import EventBus from "../routes/EventBus";
export default {
  props:{
      upgradeResult : Boolean,
      resultItemAddLevel : Number            
  },
  data(){
    return{
      showStart : true,
      showLoading : false,
      showSuccess : false,
      showFail : false,
      successMessage : false,
      failMessage : false
    }
  },
  created(){
    console.log(this.upgradeResult);
    console.log(this.resultItemAddLevel);
    this.start();
  },
  methods:{
    start(){
      setTimeout( () =>{ 
        this.showStart = false;
        this.showLoading = true;
      },900);    
    },
    resultModal(){
      this.showLoading = false;

      if(this.upgradeResult){
        this.showSuccess = true;
        setTimeout( () =>{ 
          this.showSuccess = false;
          this.successMessage = true;
        },500);
      }else{
        this.showFail = true;
        setTimeout( () =>{ 
          this.showFail = false;
          this.failMessage = true;
        },500);
      }     
    },
    exit(){
      EventBus.$emit('close-modal',false);
    }
  }
}
</script>

<style>
.customModal {background-color: #000; position: absolute; z-index: 997; width: 400px; height: 100%; top: 0vh; overflow: hidden;} 
.customModal img {position: relative; z-index: 998; margin:0 0 auto; width:400px; height:100%;}
/* .customModal #hammer {
position: absolute; z-index: 998; width:130px; height:180px; top: -100px; margin-left: 20px;
animation: target_image 1s; 
animation-iteration-count: 1;
transform-origin: 25% 100%;
animation-fill-mode: forwards;
}

@keyframes target_image {
0% { transform: rotate(-10deg); }
30% {transform: rotate(-10deg);}
50% { transform: rotate(-90deg); }
100% { transform: rotate(-90deg); }
} */
</style>


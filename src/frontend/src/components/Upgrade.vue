<template>
    <div class="customModal">
    <div class="customModalTitle">      
    </div>
    <div class="customModalBody">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam tenetur veritatis saepe natus? Ex sunt, maxime quod hic repudiandae incidunt eligendi autem dignissimos mollitia, vel laborum quasi expedita ullam voluptate veniam nesciunt sequi est necessitatibus. Eum repellat nam animi laudantium?</p>
         <button class="close" @click="closeModal()">&times;</button>
    </div>
  </div>
</template>


<script>
import EventBus from "../routes/EventBus";
export default {
  data(){
    return{
    }
  },
  methods:{
    closeModal(){
      EventBus.$emit('close-modal',false);
    }
  }
}
</script>

<style>
.customModal {
  box-shadow: 0px 1px 12px rgba(0,0,0,0.4);
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0vh;
  border-radius: 5px;
  overflow: hidden;
} 
  
.customModalBody {
    background-color: #fff;
    padding: 8px 12px;
    text-align: left;
    padding: 12px;
    height: 100%;
}
</style>


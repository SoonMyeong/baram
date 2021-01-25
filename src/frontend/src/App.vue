<template>
  <!DOCTYPE html>
  <html>
    <body>
      <div id ="app">
        <!-- <Search :list="items" filterby="name"/> -->
          <!-- <div class="item-wrap">
            <ItemInfo/>
          </div> -->
          <router-view/>
      </div>
    </body>
  </html>
</template>

<script>
// import items from '@/assets/items';
// import Search from '@/components/Search';
// import ItemInfo from '@/components/ItemInfo';

export default {
  name: 'App',
  // mounted(){
  //   this.items = items;
  // },
  data(){
    return{
      // items: []
    }
  }
  // components: {
  //   Search
  //   //  ItemInfo
  // }
};
</script>
<style scoped>
body{height:100vh;}
#app{background-color:#121F28; margin:0 auto; width: 400px; height: 100%;}
</style>

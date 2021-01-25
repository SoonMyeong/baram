<template>
    <center>
            <div class="search-wrap">
                <b-input-group                                
                    key="sm"
                    size="sm"                  
                >
                    <b-form-input v-model="query" @click="toggle()" placeholder="장비이름을 입력 하세요" >{{query}}</b-form-input>
                    <b-input-group-append>
                    <b-button size="sm" text="Button" variant="success" @click="searchItem()">검색</b-button>
                    </b-input-group-append>                    
                </b-input-group>

                <div class="options" v-show="visible">
                  <ul>
                    <li v-for="(match,index) in matches"
                    :key="match[name]"
                    :class="{'selected':(selected == index)}"
                    @click="itemClicked(index)"
                    v-text="match[name]"
                    ></li>
                  </ul>
                </div>                
            </div>
    </center>
</template>

<script>
import items from '@/assets/items';

export default {
  // props : ['list','filterby'],
  mounted(){
    this.list = items;
    this.name = 'name';
  },
  data() {
    return {
      selectedItem: '',
      query : '',
      selected: 0,
      visible: false
      };
  },
  methods: {
    toggle(){
      this.visible = !this.visible;
    },
    itemClicked(index){
      this.selected = index;
      this.selectItem();     
    },
    selectItem(){
      this.selectedItem = this.matches[this.selected];
      console.log(this.selectedItem[this.name]);
      this.query = this.selectedItem[this.name];
      this.toggle();
    },
    searchItem(){
      let check = false;
      let ranked = '';    
      for(let i in this.list){           
        if(this.query == this.list[i].name){
          check = true;
          ranked = this.list[i].rank;      
        }
      }
      
      if(!check){
        alert("현재 준비되지 않은 장비 입니다. 다시 입력 해 주세요");
      }else{
        this.$router.push({name:'itemInfo', query:{name: this.query , rank: ranked}});
      }    
    }
  },
  computed:{
    matches(){ 
      if(this.query ==''){
        return [];
      }    
      return this.list.filter((item)=>item[this.name].includes(this.query));
    }
  }
};
</script>
<style scoped>
.search-wrap{padding-top:80%;height: 10%; width:300px;}
ul{list-style-type: none; text-align: left; padding-left: 0;}
.options{max-height:200px; overflow-y:scroll; margin-top:2px; color: black;}
.options ul li{padding:5px; cursor:pointer; background-color: white; border-bottom: 1px solid white;}
.options ul li.selected{background-color: blanchedalmond;}
</style>
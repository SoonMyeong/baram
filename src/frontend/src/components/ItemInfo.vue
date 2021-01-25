<template>
    <div>
        <div class='wrap2'>
            <div class='upgrade-title'>강 화</div>
            <br>
            <center>
                <img src="https://picsum.photos/600/300/?image=25" alt="">
            </center>
            <p>
                <span v-if="rank == '희귀'" style="color:lightblue">[{{rank}}]</span>
                <span v-else-if="rank == '보물'" style="color:purple">[{{rank}}]</span>
                 {{name}}
            </p>
            <center>
                <b-form-select v-model="selected" :options="options" @change="onChange($event)" class="count"></b-form-select>
            </center>
            <div style="width:100%; height:150px; overflow:auto;">
            <table class="table1">
                <thead>
                    <tr>
                        <th class="td-name">강화 단계</th>
                        <th id="upgrade-level">{{selected}}</th>
                        <th class="td-arrow">-></th>
                        <th class="td-level-up">{{selected+1}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td-name">정보 미구현</td>
                        <td></td>
                        <td class="td-arrow">-></td>
                        <td class="td-level-up"></td>
                    </tr>
                </tbody>
            </table>
            </div>

            <!-- 강화 재료 선택  -->
            <table class="table2">
                <tbody>
                    <tr>
                        <td rowspan="2" class='td-name'>추가 <br>재료</td>
                        <td>강화비급</td>
                        <td>
                            <input type="checkbox" name="강화비급" id="" v-model="upgradeAdd" :true-value="5" :false-value="0"  style="background-color:black;" >
                        </td>
                    </tr>
                    <tr>
                        <td>강화촉진제</td>
                        <td>
                            <input type="checkbox" name="강화촉진제" id="upgrade-plus">
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- 강화 확률 -->
            <table class="table2">
                <tbody>
                    <tr>
                        <td class='td-name'>기본 확률</td>
                        <td class='td-number' id="upgrade-percent">{{upgradePercent}}%</td>
                        <td class='td-name'>추가 확률</td>
                        <td class='td-number' id="add-upgrade-percent">{{upgradeAdd}}%</td>
                    </tr>
                </tbody>
            </table>

            <center><b-button variant="danger" class="search-btn">강 화</b-button></center>

        </div>
    </div>
</template>
<script>
export default {
     props:{
      name: String,
      rank: String
     },
     methods: {
         onChange(event) {
               if(event==0 ||event==1 || event==2){
                   this.upgradePercent = 100;
               }else if(event==3){
                   this.upgradePercent = 90;
               }else if (event==4){
                   this.upgradePercent = 80;
               }else if(event==5){
                   this.upgradePercent = 70;
               }else if(event==6){
                   this.upgradePercent = 60;
               }else if(event==7){
                   this.upgradePercent = 50;
               }else if(event==8){
                   this.upgradePercent = 40;
               }else if(event==9){
                   this.upgradePercent = 30;
               }else if(event==10){
                   this.upgradePercent = 20;
               }else if(event==11){
                   this.upgradePercent = 15;
               }else if(event==12){
                   this.upgradePercent = 12;
               }
         }
     },
     data() {
      return {   
        upgradePercent: 100,
        upgradeAdd: '0',  
        selected: 0,
        options: [
          { value: 0, text: 'Level' },
          { value: 1, text: '1' },
          { value: 2, text: '2' },
          { value: 3, text: '3' },
          { value: 4, text: '4' },
          { value: 5, text: '5' },
          { value: 6, text: '6' },
          { value: 7, text: '7' },
          { value: 8, text: '8' },
          { value: 9, text: '9' },
          { value: 10, text: '10' },
          { value: 11, text: '11' },
          { value: 12, text: '12' }
        ]
      }
    }
}
</script>

<style scoped>
 .wrap2 .upgrade-title{background: linear-gradient(to bottom, #E09B58,#864C1C); text-align: center; color: white;}
 .wrap2 .title2{width:100%; margin: 0 auto; margin-bottom: 10px; background-color:#FFA500;}
 .wrap2 .count{width:100px; height: 40px; text-align: center;}

 .wrap2 .table1{width:100%; color: white;}
 .wrap2 .table1 .td-name{width:30%;}
 .wrap2 .table1 .td-arrow{width:10%;}
 .wrap2 .table1 .td-level-up{color:yellow;}
 .wrap2 .table1 tr{text-align: center;}
 .wrap2 .table1 thead>tr>th{top:0; position: sticky; background-color: black;}
 .wrap2 .table1 tbody{background-color:#343B41;}

 .wrap2 .table2{margin-top:5px; width: 100%; color: white;}
 .wrap2 .table2 tbody{background-color: #343B41;}
 .wrap2 .table2 .td-name{text-align: center; background-color: black;}
 .wrap2 .table2 .td-number{text-align: center;}

 .wrap2 img{margin:0 auto; padding:1px 1px; width: 100px; height:100px; border: 5px solid purple;}
 .wrap2 p{margin:0 auto; padding:5px 5px; text-align: center; color: white;}
 .wrap2 button{margin-top:5px; width:200px;}
</style>
<template>
  <div class="content-center">
    <div class="sc-card-list">
      <sc-card v-for="item in scDataList" :key="item.id" :sc-data="item"></sc-card>
    </div>
  </div>
</template>

<script>
import ScCard from "@/components/ScCard";

export default {
  name: "HomePage",
  components: {
    ScCard
  },
  // props:{
  //   scData:{
  //     type: Object,
  //     require: true
  //   }
  // },
  data() {
    return {
      scDataList: [
        {
          id: 1,
          title: 'iBox',
          logo_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.downuc.com%2Fattachment%2Fsoft%2F2021%2F0724%2F170625_83177295.png&refer=http%3A%2F%2Fimage.downuc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661242128&t=4735344b73af47830eba8ea35ecabf1d',
          remark: '很火，有二级市场，买到首发赚到',
          blockchain: '区块链',
          tag: ['H5', 'WEB', 'APP'],
          click_num: 1956,
          lick_num: 45,
        },
        {
          id: 2,
          title: '鲸探',
          logo_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.downuc.com%2Fattachment%2Fsoft%2F2021%2F0724%2F170625_83177295.png&refer=http%3A%2F%2Fimage.downuc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661242128&t=4735344b73af47830eba8ea35ecabf1d',
          remark: '很火，有二级市场，买到首发赚到',
          blockchain: '区块链',
          tag: ['H5', 'WEB'],
          click_num: 4681,
          lick_num: 694,
        }
      ]
    }
  },

}
</script>

<style lang="less" scoped>

.sc-card-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;


}

</style>

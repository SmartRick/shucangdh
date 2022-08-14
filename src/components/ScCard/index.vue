<template>
  <div class="sc-card">
    <div class="sc-sj">
      <div class="sj-item">
        <icon class="el-icon-view"/>
        <span class="sj-data">{{ scData.browseNum }}</span>
      </div>
      <div class="sj-item">
        <icon class="iconfont icon-xihuan"/>
        <span class="sj-data">{{ scData.lickNum }}</span>
      </div>
    </div>
    <div class="sc-header">
      <a :href="scData.tagList[0].link">
        <el-avatar shape="square" fit="cover" :src="scData.coverImg">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
<!--        <img :src="scData.coverImg" :alt="scData.name">-->
      </a>
      <div>
        <a class="sc-title" :href="scData.tagList[0].link">{{ scData.name }}</a>
        <div class="client-box">
          <a v-for="(client,index) in scData.tagList" :key="index" :href="client.link">
            <span class="client-item"
                           :class="clientColor(client.tagName)">{{ client.tagName }}</span>
          </a>
          <!--          <span class="client-item client-h5">H5</span>-->
          <!--          <span class="client-item client-web">WEB</span>-->
        </div>
      </div>
    </div>
    <p class="sc-desc">{{ scData.remark }}</p>

      <span class="sc-blockchain">
        <a :href="scData.blockchainList[0].link">{{
          scData.blockchainList.length > 0 ? scData.blockchainList[0].blockchain : '未知'
        }}</a></span>


  </div>
</template>

<script>
export default {
  name: "ScCard",
  props: {
    scData: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      // scData: {
      //   id: 1,
      //   title: 'iBox',
      //   logo_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.downuc.com%2Fattachment%2Fsoft%2F2021%2F0724%2F170625_83177295.png&refer=http%3A%2F%2Fimage.downuc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661242128&t=4735344b73af47830eba8ea35ecabf1d',
      //   remark: '很火，有二级市场，买到首发赚到',
      //   blockchain: '区块链',
      //   tag: ['H5', 'WEB', 'APP'],
      //   click_num: 1956,
      //   lick_num: 45,
      // }
    }
  },
  methods: {
    clientColor(client) {
      let cla = 'client-h5'
      switch (client) {
        case 'H5':
          cla = 'client-h5';
          break
        case 'WEB':
          cla = 'client-web';
          break
        case 'APP':
          cla = 'client-app';
          break
      }
      return cla
    }
  }
}
</script>

<style lang="less" scoped>
@sj-icon: 10px;
@sj-card-width: 285px;
@sj-card-height: 165px;
.sc-card:hover {
  box-shadow: 0px 28px 25px -15px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.sc-card {
  width: @sj-card-width;
  height: @sj-card-height;
  border-radius: 18px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
  position: relative;
  transition: all 0.3s ease-in-out;

  .sc-sj {
    font-size: @sj-icon;
    font-weight: 350;
    color: #6C6868;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 8px 15px 0 15px;

    icon {
      padding: 0 3px;
      font-size: @sj-icon;
    }
  }


  .sc-header {
    .sc-title {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0em;
      color: #3D3D3D;
    }
    .el-avatar{
      float: left;
      margin: 0 10px;
      width: 55px;
        height: 55px;
      //border-radius: 18px;

    }
    //img {
    //  float: left;
    //  width: 55px;
    //  height: 55px;
    //  border-radius: 18px;
    //  margin: 0 10px;
    //}

    .client-box {
      margin-top: 8px;
      width: 200px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .client-h5 {
      background: #59CB8C;
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #CDF4DF;
      box-shadow: 0px 4px 12px 0px rgba(89, 203, 140, 0.4);
    }

    .client-web {
      background: #70C2F7;
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #cde1f4;
      box-shadow: 0px 4px 12px 0px rgba(112, 194, 247, 0.57);
    }

    .client-app {
      background: #FF9F43;
      box-shadow: 0px 4px 12px 0px rgba(247, 216, 112, 0.57);
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #f4e4cd;
    }

    .client-item {
      display: inline-block;
      //width: 45px;
      box-sizing: border-box;
      padding: 0 4px;
      height: 20px;
      border-radius: 10px;

      line-height: 20px;
      color: #FFFFFF;
      font-size: 12px;
      text-align: center;
    }
  }

  .sc-desc {
    height: 40px;
    padding: 0 15px;
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    font-size: 14px;
    color: #3D3D3D;
  }

  .sc-blockchain {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 15px;
    max-width: @sj-card-width;
    box-sizing: border-box;
    //width: 78px;
    height: 26px;
    border-radius: 14px 0px 18px 0px;
    background: #34A1FA;
    box-shadow: inset 0px 4px 10px 0px rgba(58, 10, 181, 0.23);
    text-align: center;
    line-height: 25px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0em;
  }
}
</style>

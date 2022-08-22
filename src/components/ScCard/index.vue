<template>
  <div class="sc-card" @click="handleBrowse">
    <div class="sc-sj">
      <div class="sj-item">
        <i class="el-icon-view"/>
        <span class="sj-data">{{ scData.browseNum }}</span>
      </div>
      <div class="sj-item" @click.stop="handleLike">
        <i class="iconfont icon-xihuan" />
        <span class="sj-data">{{ scData.likeNum }}</span>
      </div>
    </div>
    <div class="sc-header">
      <a :href="scData.tagList[0] && scData.tagList[0].link ? scData.tagList[0].link : '#' ">
        <el-avatar shape="square" fit="contain" :src="scData.coverImg">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
      </a>
      <div>
        <a class="sc-title" :href="scData.tagList[0] && scData.tagList[0].link !== '' ? scData.tagList[0].link : '#'">{{
            scData.name
          }}</a>
        <div class="client-box">
          <a v-for="(client,index) in scData.tagList" :key="index" :href="client.link">
            <span class="client-item"
                  :class="clientColor(client.tagType,client.tagName)">{{ client.tagName }}</span>
          </a>
          <!--          <span class="client-item client-h5">H5</span>-->
          <!--          <span class="client-item client-web">WEB</span>-->
        </div>
      </div>
    </div>
    <p class="sc-desc">{{ scData.remark }}</p>

    <span class="sc-blockchain" @click="blockchainClick">
          <a v-if="blockchainItem" :href="blockchainItem.link">
            {{ blockchainItem.blockchain }}
          </a>
          <span v-else>未知</span>
      </span>


  </div>
</template>

<script>
import api_tag from "@/api/api_tag";
import api_shucang_platform from "@/api/api_shucang_platform";

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
      isLike:false,
      isBrowse:false,
      blockchainItem: null
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
  mounted() {
    if (this.scData.blockchainList > 0) {
      this.blockchainItem = this.$store.getters.getBlockChainById(this.scData.blockchainList[0])
    }
  },
  methods: {
    clientColor(tagType, tagName) {
      let cla = 'tag-client'
      switch (tagType) {
        case api_tag.FINAL.TAG_TYPE_BACKGROUND:
          cla = 'tag-background';
          break
        case api_tag.FINAL.TAG_TYPE_LITTLE_PROGRAM:
          cla = 'tag-little-program';
          break
        case api_tag.FINAL.TAG_TYPE_CLIENT:
          switch (tagName) {
            case '网页端':
              cla = 'tag-client-web';
              break
            case 'APP客户端':
              cla = 'tag-client-app';
              break
            default:
              cla = 'tag-client';
          }
          break
        case api_tag.FINAL.TAG_TYPE_SERVER:
          cla = 'tag-server';
          break
      }
      return cla
    },
    blockchainClick() {
      if (this.blockchainItem && this.blockchainItem.link == null) {
        this.$notify.info({
          message: `${this.blockchainItem.blockchain}的地址暂未收录`,
          position: 'top-right',
          duration: 2000,
          offset: 30
        })
      }
    },
    handleBrowse(){
      if(!this.isBrowse){
        api_shucang_platform.BROWSE(this.scData.id).then(() => {
          this.isBrowse = true;
          this.scData.browseNum+=1
        })
      }
    },
    handleLike(){
      if(!this.isLike){
        api_shucang_platform.LIKE(this.scData.id).then(() => {
          this.isLike = true;
          this.scData.likeNum+=1
        })
      }
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

    i {
      padding: 0 3px;
      font-size: @sj-icon;
    }
  }

  .sc-sj .sj-item:nth-child(2){
    cursor: pointer;
  }

  .sc-header {
    .sc-title {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0em;
      color: #3D3D3D;
    }

    /deep/ .el-avatar {
      float: left;
      margin: 0 10px;
      width: 55px;
      height: 55px;
      background-color: rgba(0,0,0,0);
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

    .tag-client-web {
      background: #4bcc84;
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #CDF4DF;
      box-shadow: 0px 4px 12px 0px rgba(89, 203, 140, 0.4);
    }

    .tag-client-app {
      background: #f5a257;
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #CDF4DF;
      box-shadow: 0px 4px 12px 0px rgba(243, 161, 87, 0.52);
    }

    .tag-background {
      background: #0084ff;
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #cde1f4;
      box-shadow: 0px 4px 12px 0px rgba(0, 131, 253, 0.34);
    }

    .tag-server {
      background: #FF9F43;
      box-shadow: 0px 4px 12px 0px rgba(247, 216, 112, 0.57);
      //box-shadow: inset -2px -2px 2px 0px rgba(0, 0, 0, 0.1), inset 2px 2px 2px 0px #f4e4cd;
    }

    .tag-little-program {
      background: #3e4bf5;
      box-shadow: 0px 4px 12px 0px rgba(62, 75, 243, 0.68);
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
      transition: all 0.3s ease-in-out;
    }
  }
  .client-item:hover{
    padding: 0 6px;
  }

  .sc-desc {
    height: 40px;
    padding: 0 15px;
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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
    min-width: 30px;
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
    cursor: pointer;

    a {
      color: #FFFFFF;

    }
  }
}
</style>

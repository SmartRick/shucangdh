<template>
  <div class="content-center">
    <div class="notice-bar">
      <i class="el-icon-bell"></i>
      <ul class="notice-list" ref="notice-list-ref">
        <li class="notice-item">欢迎来到本站，这里了收集了全网最全的数字藏品平台，帮助大家玩转NFT~</li>
        <li class="notice-item">欢迎来到本站</li>
      </ul>
    </div>
    <div class="title-logo animate__slideOutLeft">
      <img src="../../assets/title_logo.png" alt="数藏导航">
    </div>
    <div class="search-bar">
      <form class="search-form" action="">
        <input class="search-input" type="text" v-model="queryParams.name" placeholder="寻找属于你的数字藏品">
        <i class="el-icon-search"></i>
        <div class="filter-select-bar">
          <span class="filter-text">筛选：</span>
          <div class="filter-select-box">
            <el-select class="filter-select" clearable v-model="queryParams.blockchainList[0]" placeholder="区块链" size="mini">
              <el-option
                  v-for="item in blockchainTypes"
                  :key="item.id"
                  :label="item.blockchain"
                  :value="item.id">
              </el-option>
            </el-select>

            <el-select class="filter-select" clearable v-model="queryParams.tagName" placeholder="客户端" size="mini">
              <el-option
                  v-for="item in clientNames"
                  :key="item"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>

            <el-select class="filter-select" clearable v-model="queryParams.marketModel" placeholder="市场模式" size="mini">
              <el-option
                  v-for="item in marketModels"
                  :key="item.id"
                  :label="item.name"
                  :value="item.code">
              </el-option>
            </el-select>
          </div>
        </div>
      </form>
    </div>

    <div class="sc-card-list">
      <sc-card v-for="item in platformList" :key="item.id" :sc-data="item"></sc-card>
    </div>
  </div>
</template>

<script>
import platformApi from '@/api/api_shucang_platform'
import blockchainApi from '@/api/api_blockchain'
import tagApi from '@/api/api_tag'
import ScCard from "@/components/ScCard";


export default {
  name: "HomePage",
  components: {
    ScCard
  },
  data() {
    return {
      queryParams: {
        tagName: '',
        blockchainList: [],
        marketModel: '',
        name: '',
        pageNum: 1,
        pageSize: 100
      },
      blockchainTypes: [],
      marketModels: [],
      clientNames: [],
      platformList: []
    }
  },
  watch: {
    queryParams: {
      handler() {
        this.fetchPlatform()
      },
      deep: true,
      flush: 'post'
    }
  },
  mounted() {
    const _this = this;
    //加载区块链数据
    blockchainApi.PAGE({
      pageNum: 1,
      pageSize: 1000
    }).then(res => {
      _this.blockchainTypes = res.list
    })
    //加载标签数据
    tagApi.TAG_NAMES(tagApi.FINAL.TAG_TYPE_CLIENT).then(res => {
      console.log('标签数据')
      _this.clientNames = res
      console.log(_this.clientNames)
    })
    //加载数字藏品平台数据
    this.fetchPlatform()

    //加载数字藏品平台数据
    platformApi.MARKET_MODEL_LIST().then(res => {
      console.log(res)
      this.marketModels = res
    })

  },
  methods: {
    fetchPlatform() {
      const _this = this;
      platformApi.PAGE(this.queryParams).then(res => {
        console.log(res)
        _this.platformList = res.list
      })
    }
  }
}
</script>


<style lang="less" scoped>
.content-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.notice-bar {
  .notice-list {
    display: inline-block;
    position: relative;
    margin: 0 8px;
    height: 16px;
    overflow: hidden;

    .notice-item {
      transition: all 1s;
      position: relative;
      /*top:-19px;*/
      font-size: 14px;
      font-weight: 300;
      color: #373737;
    }
  }
}

.title-logo {
  margin-top: 130px;
}


.search-bar {
  width: 70%;
  max-width: 650px;
  min-width: 285px;
  margin: 25px 0 61px 0;

  .search-form {
    position: relative;
    text-align: center;

    .search-input {
      width: calc(100% - 50px);
      padding-left: 50px;
      border: none;
      height: 44px;
      font-size: 18px;
      color: #3D3D3D;
      border-radius: 38px;
      background: #FFFFFF;
      box-shadow: 0px 4px 10px 0px rgba(199, 199, 199, 0.13);

    }

    .el-icon-search {
      font-size: 20px;
      color: #8D8D8D;
      position: absolute;
      top: 2px;
      left: 21px;
      line-height: 44px;
    }

    .filter-select-bar {
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: calc(50% - 240px);

      .filter-text {
        float: left;
        display: inline-block;
        margin: 0 auto;
        line-height: 30px;
        color: #494949;
      }

      .filter-select-box {
        float: left;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin: 0 auto;

        .filter-select {
          width: 120px;
          height: 30px;
          border: none;
          border-radius: 4px;
          background: #FFFFFF;
          box-shadow: 0px 4px 10px 0px rgba(69, 174, 249, 0.2);
        }


        .el-input--mini {
          //height: 30px;
        }

        /deep/ .el-input__inner {
          font-size: 14px;
          line-height: 30px;
          border: none;
          color: #3D3D3D;
          padding-top: 5px;
        }

        /deep/ .el-select__caret {
          color: #535353;
          line-height: 0;

        }
      }
    }


  }

}

.sc-card-list {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;

  justify-content: center;
}

</style>

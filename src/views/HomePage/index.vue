<template>
  <div class="content-center">
    <div class="notice-bar">
      <i class="el-icon-bell"></i>
      <ul class="notice-list" :style="noticeDynamic" ref="notice-list-ref">
        <li class="notice-item" :style="noticeDynamic">欢迎来到本站，这里了收集了全网最全的数字藏品平台，帮助大家玩转NFT~</li>
        <li class="notice-item" :style="noticeDynamic">欢迎来到本站</li>
      </ul>
    </div>
    <div class="title-logo animate__slideOutLeft">
      <img src="../../assets/title_logo.png" alt="数藏导航">
    </div>
    <div class="search-bar">
      <form class="search-form" action="">
        <input class="search-input" type="text" v-model="queryParams.name" placeholder="寻找属于你的数字藏品">
        <i class="el-icon-search"></i>
        <div class="filter-select-bar" :style="filterSelectDynamic">
          <span class="filter-text">筛选：</span>
          <div class="filter-select-box" :style="filterSelectDynamic">
            <el-select class="filter-select" clearable v-model="queryParams.blockchainList[0]" placeholder="区块链"
                       size="mini">
              <el-option
                  v-for="item in $store.getters.getBlockChainList"
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

    <div class="sc-card-list" v-if="!loadFinish || platformList.length > 0">
      <sc-card v-for="item in platformList" :key="item.id" :sc-data="item"></sc-card>
    </div>
    <div v-else class="sc-card-empty">
      <img src="../../assets/images/not_found_emoji.png" alt="没有符合条件的平台" width="120">
      <p>没有符合条件的平台</p>
    </div>
  </div>
</template>

<script>
import platformApi from '@/api/api_shucang_platform'
import {cloneDeep} from 'lodash'
import tagApi from '@/api/api_tag'
import ScCard from "@/components/ScCard";
// 闭包节流 (避免函数重复调用，常见场景onresize、scroll、mousemove、mousehover事件触发)
// const throttle = function (fn, delay) {
//   let timer = null;
//   return function () {
//     const args = arguments; //参数集合
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fn.apply(this, args);
//     }, delay);
//   }
// }

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
        tagTypes: [tagApi.FINAL.TAG_TYPE_CLIENT, tagApi.FINAL.TAG_TYPE_BACKGROUND],
        name: '',
        pageNum: 1,
        pageSize: 20
      },
      currentPage:1,
      loading: false,
      nomore: false,
      // blockchainTypes: [],
      marketModels: [],
      clientNames: [],
      platformList: [],
      loadFinish: false,
      clientWidth: document.body.clientWidth,
      filterSelectDynamic: '',
      noticeDynamic: ''
    }
  },
  watch: {
    queryParams: {
      handler() {
        this.nomore = false
        this.platformList = []
        this.currentPage = 1
        let tempParam = cloneDeep(this.queryParams)
        tempParam.pageNum = 1
        this.fetchPlatform(tempParam)
      },
      deep: true,
      flush: 'post'
    }
  },
  mounted() {
    const _this = this;
    //加载标签数据
    tagApi.TAG_NAMES(tagApi.FINAL.TAG_TYPE_CLIENT).then(res => {
      console.log('标签数据')
      _this.clientNames = res
      // console.log(_this.clientNames)
    })
    //加载数字藏品平台数据
    this.fetchPlatform(this.queryParams)

    //加载数字藏品交易模式列表
    platformApi.MARKET_MODEL_LIST().then(res => {
      console.log(res)
      this.marketModels = res
    })

    document.addEventListener("scroll", this.handleScroll, true);

    this.changeClient()
    //添加窗口改变事件
    window.onresize = () => {
      return (() => {
        this.changeClient()
      })()
    }
  }
  ,
  methods: {
    fetchPlatform(queryParams) {
      const _this = this;
      if (!this.nomore) {
        if (queryParams.blockchainList && queryParams.blockchainList[0] === '') {
          queryParams.blockchainList = []
        }
        _this.loadFinish = false;

        platformApi.PAGE(queryParams).then(res => {
          console.log(res)
          _this.platformList.push(...res.list)
          if (_this.queryParams.pageNum === res.pages) {
            _this.nomore = true;
          }
          _this.loadFinish = true
        })
      }
    },
    handleScroll(e) {
      const scrollTop = e.target.scrollTop // 滚动条滚动时，距离顶部的距离
      const windowHeight = e.target.clientHeight // 可视区的高度
      const scrollHeight = e.target.scrollHeight // 滚动条的总高度
      if (this.loadFinish) {
        if (scrollTop + windowHeight >= scrollHeight) {
          let tempQuery = cloneDeep(this.queryParams);
          tempQuery.pageNum += this.currentPage
          this.currentPage++
          this.fetchPlatform(tempQuery)
        }
      }
    },
    changeClient() {
      this.clientWidth = document.body.clientWidth
      console.log(this.clientWidth)
      if (this.clientWidth <= 700) {
        this.filterSelectDynamic = {
          flexDirection: 'column',
          alignItems: 'center'
        }
        this.noticeDynamic = {
          maxWidth: '300px',
          fontsize: '10px'
        }
      } else {
        this.filterSelectDynamic = ''
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
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
      display: flex;
      justify-content: center;


      .filter-text {
        display: inline-block;
        line-height: 30px;
        color: #494949;
      }

      .filter-select-box {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

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

.sc-card-empty {
  text-align: center;
  font-size: 20px;
}

</style>

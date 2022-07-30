<template>
  <el-container class="main-container">
    <el-aside width="200px" class="side-box">
      <div class="logo">LOGO</div>
      <el-menu class="side-menu" :default-openeds="['1']" unique-opened>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>数藏平台导航</template>
          <el-menu-item class="side-menu-item" index="1-1">平台大全</el-menu-item>
          <el-menu-item index="1-2">数藏工具</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <template slot="title"><i class="el-icon-menu"></i>首发活动日历</template>
        </el-menu-item>
        <el-menu-item index="3">
          <template slot="title"><i class="el-icon-setting"></i>NFT新闻资讯</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">NFT合成工具</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">平台收录</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main class="main-content">
      <router-view></router-view>
    </el-main>
    <div class="background-container">
      <img class="ball-item" src="../../assets/images/bell_1.png" alt=""/>
      <img class="ball-item" src="../../assets/images/bell_2.png" alt=""/>
      <img class="ball-item" src="../../assets/images/bell_3.png" alt=""/>
      <img class="ball-item" src="../../assets/images/bell_4.png" alt=""/>
    </div>
  </el-container>
</template>

<script>
// import SideMenu from "@/components/SideMenu";
export default {
  name: 'Layout',
  components: {
    // SideMenu
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main-container {
  height: 100%;
  width: 100%;
  background: #E5ECF0;
}

.main-content {
  position: relative;
  z-index: 2;
}

.side-box {
  position: relative;
  z-index: 1;
  border-radius: 0px 20px 20px 0px;
  //opacity: 0.4;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(235px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .logo {
    height: 50px;
    width: 50px;
    margin: 70px 0 50px 0;
    border-radius: 50%;
    background-color: #3bc6fc;
    text-align: center;
    line-height: 50px;
    color: white;
  }

  @sub-menu-height: 38px;

  .side-menu {
    width: 190px;
    background-color: rgba(0, 0, 0, 0);
    border: none;

    /deep/ .el-menu {
      background-color: rgba(0, 0, 0, 0);
    }
    ///deep/ .el-menu >.is-active{
    //  background: linear-gradient(180deg, #89B0FF 0%, #89B0FF 0%, #306EEB 100%, #306EEB 100%);
    //  box-shadow: 0px 4px 19px 0px rgba(55, 115, 237, 0.42);
    //  color: #FFFFFF;
    //}

    /deep/ .el-submenu {
      margin: 16px 0;

      .el-submenu__icon-arrow {
        font-size: 14px;
        font-weight: bold;
      }
    }

    /deep/ .el-submenu .el-submenu__title {
      //width: 200px;
      height: @sub-menu-height;
      line-height: @sub-menu-height;
      font-size: 16px;
      font-weight: 500;
      border-radius: 8px;
      color: #565656;

      i {
        color: #565656;
      }
    }

    /deep/ .is-opened > .el-submenu__title {
      background: linear-gradient(180deg, #89B0FF 0%, #89B0FF 0%, #306EEB 100%, #306EEB 100%);
      box-shadow: 0px 4px 19px 0px rgba(55, 115, 237, 0.42);
      color: #FFFFFF;

      i {
        color: #FFFFFF;
      }
    }

    .side-menu-item {
      background-color: rgba(0, 0, 0, 0);
    }


  }


}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  background-color: #e0eff6;
  overflow: hidden;
}

.background-container > .ball-item {
  position: absolute;
}

//绿色
.background-container > .ball-item:nth-child(1) {
  top: -544px;
  left: -72px;
}

//蓝色
.background-container > .ball-item:nth-child(2) {
  top: 96px;
  right: -270px;
}

//黄色
.background-container > .ball-item:nth-child(3) {
  top: 74px;
  left: -368px;
}

//红色
.background-container > .ball-item:nth-child(4) {
  top: -614px;
  right: -585px;
}

</style>

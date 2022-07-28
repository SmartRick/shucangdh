<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li class="sidebar-item sidebar-item-select">
        <i class="el-icon-pie-chart sidebar-item-icon-select"></i>
        <span class="sidebar-item-title-select">数藏平台导航</span>
<!--        <icon class="el-icon-arrow-down sidebar-item-down"></icon>-->
      </li>

      <li class="sidebar-item">
        <i class="el-icon-pie-chart sidebar-item-icon"></i>
        <span class="sidebar-item-title">首发活动日历</span>
      </li>

      <li class="sidebar-item">
        <i class="el-icon-pie-chart sidebar-item-icon"></i>
        <span class="sidebar-item-title">NFT新闻资讯</span>
      </li>

      <li class="sidebar-item">
        <i class="el-icon-pie-chart sidebar-item-icon"></i>
        <span class="sidebar-item-title">NFT合成工具</span>

      </li>

      <li class="sidebar-item">
        <i class="el-icon-pie-chart sidebar-item-icon"></i>
        <span class="sidebar-item-title">数藏平台收录</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style lang="less" scoped>
.sidebar {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 176px;
  border-radius: 0px 20px 20px 0px;

  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(235px);
  height: 100%;

  display: flex;
  justify-content: center;

}

.sidebar-list {
  margin: 15px 0px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  //justify-content: space-around;
}

.sidebar-item {
  width: 161px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
}

.sidebar-item-select{
  background: linear-gradient(180deg, #89B0FF 0%, #89B0FF 0%, #306EEB 100%, #306EEB 100%);
  box-shadow: 0px 4px 19px 0px rgba(55, 115, 237, 0.42);
}

.sidebar-item-icon {
  color: #565656;
  font-size: 20px;
  padding: 0 8px;
  line-height: 35px;
}

.sidebar-item-icon-select {
  color: #FFFFFF;
  font-size: 20px;
  padding: 0 8px;
  line-height: 35px;
}

.sidebar-item > .sidebar-item-title{
  font-size: 16px;
  color: #565656;
  font-weight: 500;
  //line-height: 32px;
}

.sidebar-item > .sidebar-item-title-select {
  //font-family: SourceHanSansCN-Medium,serif;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  //line-height: 25px;
}

</style>

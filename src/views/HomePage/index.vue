<template>
    <div class="content-center">
        <div class="notice-bar">
            <i class="el-icon-bell"></i>
            <ul class="notice-list" ref="notice-list-ref">
                <li class="notice-item">欢迎来到本站，这里了收集了全网最全的数字藏品平台，帮助大家玩转NFT~</li>
                <li class="notice-item">欢迎来到本站</li>
            </ul>
        </div>
        <div class="title-logo">
            <img src="../../assets/title_logo.png" alt="数藏导航">
        </div>
        <div class="search-bar">
            <form class="search-form" action="">
                <input class="search-input" type="text" v-model="searchText">
                <i class="el-icon-search"></i>
                <div class="filter-select-bar">
                    <span class="filter-text">筛选：</span>
                    <div class="filter-select-box">
                        <el-select class="filter-select" v-model="filterBlockChain" placeholder="区块链" size="mini">
                            <el-option
                                    v-for="item in blockchainTypes"
                                    :key="item.id"
                                    :label="item.blockchainName"
                                    :value="item.id">
                            </el-option>
                        </el-select>

                        <el-select class="filter-select" v-model="filterClientType" placeholder="客户端" size="mini">
                            <el-option
                                    v-for="item in blockchainTypes"
                                    :key="item.id"
                                    :label="item.blockchainName"
                                    :value="item.id">
                            </el-option>
                        </el-select>

                        <el-select class="filter-select" v-model="filterMarketModel" placeholder="市场模式" size="mini">
                            <el-option
                                    v-for="item in blockchainTypes"
                                    :key="item.id"
                                    :label="item.blockchainName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </form>
        </div>

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
                searchText: '',
                filterBlockChain: '',
                filterClientType: '',
                filterMarketModel: '',
                blockchainTypes: [
                    {
                        id: 1,
                        blockchainName: '蚂蚁链',
                        backColor: '#34A1FA'
                    },
                    {
                        id: 2,
                        blockchainName: '至信链',
                        backColor: '#34A1FA'
                    },
                    {
                        id: 3,
                        blockchainName: '区块链',
                        backColor: '#34A1FA'
                    },
                ],

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
        mounted() {

            let notice = this.$refs['notice-list-ref'];
            console.log(notice);


            // setInterval(() => {
            //     for (let i = 0; i < notice.children.length; i++) {
            //         console.log(notice.children[i].style.top);
            //         notice.children[i].style.top = (notice.children[i].style.top - 19) + 'px';
            //     }
            //     console.log(123456);
            // }, 2000)
        }
    }
</script>


<style lang="less">
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
                animation: topmove linear 2s infinite;
                animation-play-state: running;
            }

        @keyfarms topmove {
            0% {
                transform: translate3d(0, 0, 0);

            }

            50% {
                transform: translate3d(10px, 0, 0);
            }

            100% {
                transform: translate3d(19px, 0, 0);
            }
        }

            /*@keyfarms topmove{*/
            /*    0%{ top:0;}*/
            /*    100%{ top:-19px;}*/
            /*}*/
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
                margin-left: 18%;

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
                        font-size: 14px;
                        width: 100px;
                        height: 30px;
                        border: none;
                        border-radius: 4px;
                        background: #FFFFFF;
                        box-shadow: 0px 4px 10px 0px rgba(69, 174, 249, 0.2);
                    }

                    .el-input--mini {
                        height: 30px;
                    }

                    .el-input__inner {
                        border: none;
                    }

                    /deep/ .el-select .el-input .el-select__caret {
                        color: #535353;
                    }
                }
            }


        }

    }

    .sc-card-list {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>

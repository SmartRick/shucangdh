import request from './request'

const modulePath = '/tag/'
/**
 * 接口常量
 * @type {{TAG_TYPE_BACKGROUND: number, TAG_TYPE_LITTLE_PROGRAM: number, TAG_TYPE_CLIENT: number, TAG_TYPE_SERVER: number}}
 */
const FINAL = {
    //客户端类型
    TAG_TYPE_CLIENT: 1,
    //背景信息标签
    TAG_TYPE_BACKGROUND: 2,
    //服务公众号
    TAG_TYPE_SERVER: 3,
    //小程序
    TAG_TYPE_LITTLE_PROGRAM: 4,
}
/**
 *
 * @type {[{code: number, name: string},{code: number, name: string},{code: number, name: string},{code: number, name: string}]}
 */
const TAG_TYPE = [
    // 客户端类型
    {
        name: '客户端',
        code: FINAL.TAG_TYPE_CLIENT
    },
    // 背景信息标签
    {
        name: '背景调查',
        code: FINAL.TAG_TYPE_BACKGROUND
    },
    // 服务公众号
    {
        name: '服务公众号',
        code: FINAL.TAG_TYPE_SERVER
    },
    // 小程序
    {
        name: '小程序',
        code: FINAL.TAG_TYPE_LITTLE_PROGRAM
    }
]

// 客户端类型
const CLIENT_TYPE = {
    WX_GZH: '微信公众号',
    WX_XCX: '微信小程序',
    BD_XCX: '百度小程序',
    YSF_XCX: '云闪付小程序',
    ZFB_XCX: '支付宝小程序',
    APP: 'APP客户端',
    H5: '网页端'
}

/**
 * 接口请求方法
 */
export default {
    FINAL,
    TAG_TYPE,
    CLIENT_TYPE,
    ADD(data) {
        return request({
            url: modulePath,
            method: 'post',
            data
        })
    },
    UPDATE(data) {
        return request({
            url: modulePath,
            method: 'put',
            data
        })
    },
    PAGE(data) {
        return request({
            url: modulePath + 'page',
            method: 'post',
            data
        })
    },
    GET(id) {
        return request({
            url: modulePath + id,
            method: 'get'
        })
    },
    REMOVES(data) {
        return request({
            url: modulePath + 'removes',
            method: 'delete',
            data
        })
    },
    REMOVE(id) {
        return request({
            url: modulePath + id,
            method: 'delete'
        })
    },
    TAG_NAMES(tagType) {
        return request({
            url: modulePath + 'tagNames/' + tagType,
            method: 'get'
        })
    }
}

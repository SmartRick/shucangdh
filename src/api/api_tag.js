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
 * 接口请求方法
 */
export default {
    FINAL,

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

/**
 * 验证电子邮箱格式
 */
function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证手机格式
 */
function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value)
}

/**
 * 验证URL格式
 */
function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/
        .test(value)
}

/**
 * 验证日期格式
 */
function date(value) {
    if (!value) return false
    // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
    if (number(value)) value = +value
    return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证十进制数字
 */
function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

/**
 * 验证字符串
 */
function string(value) {
    return typeof value === 'string'
}


/**
 * 中文
 */
function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi
    return reg.test(value)
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
    return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
    return value >= param[0] && value <= param[1]
}

/**
 * 判断是否为空
 */
function empty(value) {
    switch (typeof value) {
    case 'undefined':
        return true
    case 'string':
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true
        break
    case 'boolean':
        if (!value) return true
        break
    case 'number':
        if (value === 0 || isNaN(value)) return true
        break
    case 'object':
        if (value === null || value.length === 0) return true
        for (const i in value) {
            return false
        }
        return true
    }
    return false
}

/**
 * 是否数组
 */
function array(value) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(value)
    }
    return Object.prototype.toString.call(value) === '[object Array]'
}

/**
 * 是否对象
 */
function object(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 是否短信验证码
 */
function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value)
}

/**
 * 是否函数方法
 * @param {Object} value
 */
function func(value) {
    return typeof value === 'function'
}

/**
 * 是否promise对象
 * @param {Object} value
 */
function promise(value) {
    return object(value) && func(value.then) && func(value.catch)
}

/** 是否图片格式
 * @param {Object} value
 */
function image(value) {
    const newValue = value.split('?')[0]
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
    return IMAGE_REGEXP.test(newValue)
}

/**
 * 是否视频格式
 * @param {Object} value
 */
function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i
    return VIDEO_REGEXP.test(value)
}

export default {
    email,
    mobile,
    url,
    date,
    number,
    chinese,
    contains,
    range,
    empty,
    isEmpty: empty,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    string
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}
/**
 * 数组去重对象
 */
export const arrayUnit = (arr, name) => {
    var hash = {};
    return arr.reduce(function (item, next) {
        hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
        return item;
    }, []);
}

/**
 * 金额格式化
 */
export const number_format = (val) => {
    var str = (val / 100).toFixed(2) + '';
    var intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',');
    var dot = str.substring(str.length, str.indexOf("."))
    var ret = intSum + dot;
    return ret;
}
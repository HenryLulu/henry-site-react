function toQueryPair(key, value) {
    if (typeof value === 'undefined') {
        return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}

function toQueryString(obj) {
    var ret = [];
    for (var key in obj) {
        key = encodeURIComponent(key);
        var values = obj[key];
        if (values && values.constructor === Array) {// 数组
            var queryValues = [];
            for (var i = 0, len = values.length, value; i < len; i++) {
                value = values[i];
                queryValues.push(toQueryPair(key, value));
            }
            ret = ret.concat(queryValues);
        } else { //字符串
            ret.push(toQueryPair(key, values));
        }
    }
    return ret.join('&');
}

function fetchUrl(url, params, method = 'GET') {
    if (!url) {
        return Promise.reject(new Error('no url'));
    }
    const searchStr = toQueryString(params);
    let initObj = {};
    if (method === 'GET') {
        searchStr && (url += '?' + searchStr);
        initObj = {
            method: method,
            credentials: 'include',
            headers: new Headers({
                'from': window.location.host
            })
        };
    } else {
        initObj = {
            method: method,
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json',
                'from': window.location.host,
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: searchStr
        };
    }
    return fetch(url, initObj).then(res => {
        return res.json();
    }).catch((res, aaa, bbb) => {
        return res;
    });
}

export const get = (url, params) => {
    return fetchUrl(url, params, 'GET');
};

export const post = (url, params) => {
    return fetchUrl(url, params, 'POST');
};
export default fetchUrl;

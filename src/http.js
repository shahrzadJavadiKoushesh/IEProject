import axios from "axios";
const serverUrl = 'http://localhost:8090'

function get(url) {
    const token = localStorage.getItem("authorization")
    return axios.request({
        url: `${serverUrl}/${url}`,
        method: "get",
        headers: {
            authorization: token
        }
    })
}

function post(url, data={}) {
    const token = localStorage.getItem("authorization")
    return axios.request({
        url: `${serverUrl}/${url}`,
        method: "post",
        headers: {
            authorization: token
        },
        data: data
    })
}

function put(url, data={}) {
    const token = localStorage.getItem("authorization")
    return axios.request({
        url: `${serverUrl}/${url}`,
        method: "put",
        headers: {
            authorization: token
        },
        data: data
    })
}
export default Object.freeze({
    get,
    post,
    put,
})

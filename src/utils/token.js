//封装和token相关的方法：存、取、删

const TokenKey = 'token_key'

// 存
function setToken(token){
    localStorage.setItem(TokenKey,token)
}

// 取
function getToken(){
    return localStorage.getItem(TokenKey)
}

//hs
function removeToken(){
    localStorage.removeItem(TokenKey)
}


export {
    setToken,
    getToken,
    removeToken
}
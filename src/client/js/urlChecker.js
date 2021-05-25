//use regex to correctly check for a URL
function checkForUrl(val) {
    const reg = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return reg.test(val);
}

export {
    checkForUrl
}
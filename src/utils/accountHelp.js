const Au_USERINFO = 'Au_USERINFO';
var obj = {
    getUserInfo: () => {
        return JSON.parse(window.localStorage.getItem(Au_USERINFO));
    },
    setUserInfo: (userInfo) => {
        window.localStorage.setItem(Au_USERINFO, JSON.stringify(userInfo));
    },
    removeUserInfo: () => {
        window.localStorage.removeItem(Au_USERINFO);
    }
}
export default obj;
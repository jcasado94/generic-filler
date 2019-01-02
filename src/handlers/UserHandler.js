
export default {

  getUser() {
    if (!window.cookieStorage.getCookie('username')) {
      window.cookieStorage.setCookie('username', this.createUser(new Date().getTime()));
    }
  },

  createUser(username) {
    // insert username in DB logic
    return username;
  },

  getUserInfo(username) {
    // return current page
  }

}
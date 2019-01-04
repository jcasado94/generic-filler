
export default {

  setUser() {
    if (!window.cookieStorage.getCookie('username')) {
      window.cookieStorage.setCookie('username', this.createUser(new Date().getTime()));
    }
  },

  createUser(username) {
    // insert username in DB logic
    return username;
  },

  getCurrentUserProd(username) {
    // retrieve user current product DB logic
    const currentProd = 'product';
    return new Promise(currentProd);
  },

  getCurrentProdUsages(username) {
    // retrieve user current product usages DB logic
    const currentProdUsages = ['one', 'three', 'five'];
    return new Promise(currentProdUsages);
  }

}
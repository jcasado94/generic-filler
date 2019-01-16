
export default {

  createUser(username) {
    return new Promise((resolve, reject) => {
      // insert username in DB logic
      resolve(username);
    })
  },

  getCurrentUserProd(username) {
    return new Promise((resolve, reject) => {
      // retrieve user current product DB logic
      const currentProd = 'product';
      resolve(currentProd);
   })
  },

  getCurrentProdUsages(username) {
    return new Promise((resolve, reject) => {
      // retrieve user current product usages DB logic
      const currentProdUsages = ['one', 'three', 'two'];
      resolve(currentProdUsages);
    })
  }

}
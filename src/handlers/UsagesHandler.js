
export default {

  getAllUsages() {
    return new Promise((resolve, reject) => {
      // DB logic
      resolve({
        'one': 'One',
        'two': 'Two',
        'three': 'Three', 
        'four': 'Four'
      });
    })
  }

}
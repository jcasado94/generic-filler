
let allUsages = null;

export default {

  getAllUsages() {
    allUsages = allUsages || getAllUsages();
    return allUsages
  }

}

const getAllUsages = () => {
  return {
    'one': 'One',
    'two': 'Two',
    'three': 'Three',
    'four': 'Four'
  }
}
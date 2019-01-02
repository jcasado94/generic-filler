
const allUsages = {};

export default {

  getAllUsages() {
    return allUsages || getAllUsages();
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
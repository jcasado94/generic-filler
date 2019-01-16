export const ADD_USAGE = 'ADD_USAGE';
export const REMOVE_USAGE = 'REMOVE_USAGE'
export const SET_USAGES = 'SET_USAGES';

export const addUsage = (usageId) => {
  return {
    type: ADD_USAGE,
    usageId
  }
}

export const removeUsage = (i) => {
  return {
    type: REMOVE_USAGE,
    i
  }
}

export const setUsages = (prodUsages) => {
  return {
    type: SET_USAGES,
    prodUsages
  }
}
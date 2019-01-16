import { connect } from 'react-redux';
import { addUsage, removeUsage, setUsages } from '../actions/actions';
import ProdUsages from '../components/ProdUsages';


const getUsagesList = (prodUsages, allUsages) => {
  return Object.keys(allUsages).map(usageId => ({
    usageId,
    name: allUsages[usageId],
    pos: prodUsages.indexOf(usageId),
    key: usageId,
  }));
}

const mapStateToProps = (state, ownProps) => {
  return {
    usages: getUsagesList(state.usages.prodUsages, ownProps.allUsages)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUsageClick: (usageId, i) => {
      if (i !== -1) {
        dispatch(removeUsage(i));
      } else {
        dispatch(addUsage(usageId));
      }
    },
    onUsagesFetched: (prodUsages) => {
      dispatch(setUsages(prodUsages));
    }
  }
}

const ProdUsagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProdUsages)

export default ProdUsagesContainer;
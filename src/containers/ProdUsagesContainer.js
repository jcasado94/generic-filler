import { connect } from 'react-redux';
import { addUsage, removeUsage } from '../actions/actions';
import ProdUsages from '../components/ProdUsages';
import UsagesHandler from '../handlers/UsagesHandler';


const getUsagesList = (prodUsages) => {
  const allUsages = UsagesHandler.getAllUsages();
  return Object.keys(allUsages).map(usageId => ({
    usageId,
    name: allUsages[usageId],
    pos: prodUsages.indexOf(usageId),
    key: usageId,
  }));
}

const mapStateToProps = state => {
  return {
    usages: getUsagesList(state.usages.prodUsages)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUsageClick: (usageId, i) => {
      if (i !== -1) {
        dispatch(removeUsage(i));
      } else {
        dispatch(addUsage(usageId))
      }
    }
  }
}

const ProdUsagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProdUsages)

export default ProdUsagesContainer;
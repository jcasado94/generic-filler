import React, { Component } from 'react';

import ProdTitle from './ProdTitle'
import ProdImage from './ProdImage'

import ProdUsagesContainer from '../containers/ProdUsagesContainer';
import UsagesHandler from '../handlers/UsagesHandler';

class Prod extends Component {

  constructor() {
    super();
    this.getAllUsages();
  }

  getAllUsages() {
    this.allUsages = [];
    UsagesHandler.getAllUsages().then(function(allUsages) {
      this.allUsages = allUsages;
      this.forceUpdate();
    }.bind(this));
  }

	render() {
    const prodUsagesContainer = this.allUsages ? <ProdUsagesContainer allUsages={this.allUsages}/> : '';
		return (
      <div className="Prod">
        <ProdTitle />
        <ProdImage />
        <div className="prod-properties">
          {prodUsagesContainer}
        </div>
      </div>
		);
  }

}


export default Prod;

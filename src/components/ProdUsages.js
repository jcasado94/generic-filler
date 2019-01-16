import React, { Component } from 'react';
import Usage from './Usage';
import UserHandler from '../handlers/UserHandler';

class ProdUsages extends Component {

  constructor() {
    super();
    this.getProdUsages();
  }

  getProdUsages() {
    UserHandler.getCurrentProdUsages(window.cookieStorage.getCookie('username')).then(
      function(prodUsages) {
        this.props.onUsagesFetched(prodUsages);
      }.bind(this)
    )
  }

  render() {
    return(
      <div className="Prod-usages">
        <h3>Usages</h3>
        {this.props.usages.map(({usageId, name, pos, key}) => {
          return(
          <Usage
            usageId={usageId}
            name={name}
            pos={pos}
            key={key}
            onUsageClick={this.props.onUsageClick}
          />)
        }
          
        )}
      </div>
    );
  }

}

export default ProdUsages;
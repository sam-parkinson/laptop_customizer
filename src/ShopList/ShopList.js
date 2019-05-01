import React, { Component } from 'react';
import './ShopList.css';
import Feature from '../Feature/Feature';

class ShopList extends Component {
  render() {

    const features = Object.keys(this.props.features)
          .map(key => 
            <Feature 
              key={key}
              name={key}
              features={this.props.features[key]} 
              selected={this.props.selected[key]} 
              updateFeature={this.props.updateFeature}/>            
          ); 

    return (
      <>
        {features}
      </>
    );
  }
}

export default ShopList;
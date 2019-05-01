import React, { Component } from 'react';
import './FeatureChoice.css';

class FeatureChoice extends Component {

  render() {
    return (
      <li key={this.props.index} className="feature__item">
        <div 
          className={this.props.featureClass}
          onClick={() => this.props.update((this.props.name), (this.props.item))}>
            { this.props.item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.item.cost) })
        </div>
      </li>
    );
  }
}

export default FeatureChoice

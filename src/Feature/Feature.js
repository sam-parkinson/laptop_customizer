import React, { Component } from 'react';
import './Feature.css';
import FeatureList from '../FeatureList/FeatureList';

class Feature extends Component {
  render() {
    const options = this.props.features.map((item, index) => {
      const selectedClass = item.name === this.props.selected.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      return (
        <FeatureList index={index} item={item} featureClass={featureClass} />
      )
    });

    return <div className="feature" key={this.props.name}>
      <div className="feature__name">{this.props.name}</div>
      <ul className="feature__list">
        { options }
      </ul>
    </div>
  }
}

export default Feature;
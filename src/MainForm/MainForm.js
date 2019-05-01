import React, { Component } from 'react';
import './MainForm.css';
import ShopList from '../ShopList/ShopList';

class MainForm extends Component {

  render() {
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <ShopList 
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}/>
      </section>
    )
  }
}

export default MainForm;
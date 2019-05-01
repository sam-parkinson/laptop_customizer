import React, { Component } from 'react';
import './MainSummary.css';
import SummaryItem from '../SummaryItem/SummaryItem';
import TotalPrice from '../TotalPrice/TotalPrice';

class MainSummary extends Component {

  render() {

    const summary = Object.keys(this.props.selected)
          .map(key => 
             <SummaryItem key={key} selected={this.props.selected[key]}/>
            )     

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <TotalPrice selected={this.props.selected} />        
      </section>
    );
  }
}

export default MainSummary;
import React, { Component } from 'react';
import './MainSummary.css';
import SummaryItem from '../SummaryItem/SummaryItem';

class MainSummary extends Component {

  render() {

    const summary = Object.keys(this.props.selected)
          .map(key => 
             <SummaryItem key={key} selected={this.props.selected[key]}/>
            )

    const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);      

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(total) }
          </div>
        </div>
      </section>
    );
  }
}

export default MainSummary;
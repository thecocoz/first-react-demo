import React from 'react';
import List from './List';

class CompletedSection extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <b>{this.props.num} Task(s) Completed </b>
          </div>
          <div className="col">
          <button onClick={this.props.showCompleted}>Show/Hide Completed</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <List></List>
          </div>
        </div>

      </div>
    );
  }
}

export default CompletedSection;

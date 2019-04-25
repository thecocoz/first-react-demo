import React from 'react';

class Header extends React.Component {
  render() {
    const { onCreateNewItem } = this.props;
    return (

      <div className="container">
        <div className="row" style={{borderBottom: 'solid'}}>
          <div className="col">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col">
            <button onClick={onCreateNewItem}> New Item </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render() {
    console.log(this.props.list);

    return (
      <div>
        {/* <ListItem taskname="กวาดบ้าน"></ListItem>
        <ListItem taskname="ถูบ้าน"></ListItem>
        <ListItem taskname="ซักผ้า"></ListItem> */}

        {(this.props.list || []).map((ele) => 
          <ListItem item={ele} onEditTask={this.props.onEditTask} onToggleListItem={this.props.onToggleListItem} onDeleteTask={this.props.onDeleteTask}  ></ListItem>   
          )}


      </div>
    );
  }
}

export default List;

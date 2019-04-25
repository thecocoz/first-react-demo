import React from 'react';

class ListItem extends React.Component {
    render() {
        return (

        <div className="Listitem">
         
         
          <input type="radio" name={this.props.item.title} checked={this.props.item.isCompleted} onChange={(e) => this.props.onToggleListItem(this.props.item.id)}></input>
        

        <input className="Textbox" value={this.props.item.title} 
        onChange={(e) => this.props.onEditTask(this.props.item.id, e.target.value)}></input>


        <button onClick={(e) => this.props.onDeleteTask(this.props.item.id)}> Delete </button>
        
        </div>

        );
    }
}

export default ListItem;

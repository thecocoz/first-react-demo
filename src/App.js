import React, { Component } from 'react';
import './assets/bootstrap.min.css';
import './assets/bootstrap-grid.min.css';
import './App.css';
import Header from './Header'
import CompletedSection from './CompletedSection';
import List from './List';
import _ from 'lodash';

class App extends Component {

constructor(props){
  super(props);
  this.state ={
    list: [{
      id:1,
      title: 'Task1',
      isCompleted:true,
    },{
      id:2,
      title: 'Task2',
      isCompleted:true,
    },{
      id:3,
      title: 'Task3',
      isCompleted:false,
    },{
      id:4,
      title: 'Task4',
      isCompleted:false,
    }],
    showCompleted: false
  }
}

onToggleListItem = (itemId)=>{//stmt
  let list = this.state.list;
  const newList = _.cloneDeep(list)
  const selectedItem = newList.find((item) => item.id === itemId)
  console.log('item', selectedItem)
  selectedItem.isCompleted =  !selectedItem.isCompleted
  this.setState({list:newList});
}

onToggleCompletedList = ()=>{//stmt
this.setState((state) => {
  return { showCompleted: !state.showCompleted }
})

}
onCreateNewItem = ()=>{
  //TODO แก้ID
  let nextID = this.state.list.length+1;
  let list = this.state.list;
  list =[...list, {id:nextID,title:"Task"+nextID,isCompleted:false} ]
  this.setState({list});

}
onEditTask = (itemId, value)=>{//stmt
  let list = this.state.list;
  const newList = _.cloneDeep(list)
  const selectedItem = newList.find((item) => item.id === itemId)
  selectedItem.title = value
  this.setState({list:newList});
}

onDeleteTask = (itemId)=>{//stmt
let list = this.state.list;
let newList = list.filter((item)=>item.id !== itemId)
this.setState({list:newList});
}

  render() {
    const completedList = this.state.list.filter((item) => item.isCompleted);
    const uncompletedList = this.state.list.filter((item) => !item.isCompleted);
    const completed_num = completedList.length;

    return (
      <div className="App">

      <div className="container">
        <div className="row">
          <div className="col">
            <Header title="To Do List" onCreateNewItem={this.onCreateNewItem}></Header>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CompletedSection num={completed_num} showCompleted={this.onToggleCompletedList} /> 
            {
              this.state.showCompleted && <List list={completedList}  onEditTask={this.onEditTask}  onToggleListItem={this.onToggleListItem} onDeleteTask={this.onDeleteTask}  />
            }
            <List list={uncompletedList} onEditTask={this.onEditTask} onToggleListItem={this.onToggleListItem} onDeleteTask={this.onDeleteTask}   />
          </div>
        </div>
      </div>


      </div>
    );
  }
}

class RadioBtn extends React.Component {
  constructor(props) {
    //Constructor
  };
}


export default App;

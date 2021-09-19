import React, { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {
  state = { 
    task:[
      {
        id:0,
        text:"ZROBIĆ COŚ",
        date:"2018-02-15",
        active:true,
        doneDate:""
     }
    ],
    isLoaded : true,
    tempText: '',
   }

   componentDidMount (){
    this.getLocalToDo()
   }


  handleFormSubmit = (e) => {
    e.preventDefault();
    let currDate = new Date().toISOString();
    currDate = currDate.slice(0,10);
    const tableLength = this.state.task.length;
    let newId = tableLength !==0 ? this.state.task[tableLength -1].id +1 : 0 ;
    if(this.state.tempText !== ''){
      let tempTask = {
        id : newId,
        text : this.state.tempText,
        date : currDate,
        active : true
      }
      this.setState((prevState) => ({
        task : [...prevState.task , tempTask],
        tempText: "",
      }));
    }

  }


  handleText = (e) =>{
    this.setState((prevState) => ({
      tempText : e.target.value
    }));
  }

  handleDelete = (id) =>{
    let task = [...this.state.task];
    task = task.filter(item => item.id !== id);
    this.setState({
      task : task
    })
  }

  doneTask = (id) =>{
    let doneDate = new Date().toISOString();
    doneDate = doneDate.slice(0,10);
    doneDate +=" ";
    doneDate += new Date().toTimeString().slice(0,8);
    console.log(doneDate);
    let task = [...this.state.task];
    task.map(item => item.id === id ? item.active = false : item.active);
    task.map(item => item.id === id ? item.doneDate = doneDate : item.doneDate);
    console.log(task);
    this.setState({
      task : task,
    })
  }

  undoTask = (id) =>{
    let task = [...this.state.task];
    task.map(item => item.id === id ? item.active = true : item.active);
    this.setState({
      task : task,
    })
  }

  saveLocalToDo = () =>{
    let toDo = [...this.state.task];
    localStorage.setItem("todo", JSON.stringify(toDo));
  }

  getLocalToDo = () =>{
    if(localStorage.getItem("todo") === null){
      localStorage.setItem('todo', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todo"));
      this.setState({
        task: todoLocal
      })
    }
  }

  componentDidUpdate(){
    this.saveLocalToDo();
  }

  render() { 
    
    return ( 
      <div className="app">
        <div className="add_app">
          <form onSubmit={this.handleFormSubmit} >
              <input type="text" placeholder="Add new task" value={this.state.tempText} onChange={this.handleText}/>
              <button className="add"><i className="fas fa-plus"></i></button>
          </form>
        </div>
        <TaskList isLoaded={this.state.isLoaded} task={this.state.task} delete={this.handleDelete} done={this.doneTask} doneDate ={this.state.doneDate} undo = {this.undoTask}/>
      </div>
     );
  }
}
 
export default App;
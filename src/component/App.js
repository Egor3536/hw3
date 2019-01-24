import React, {Component} from 'react'
import AddingTasks from './AddingTasks'
import TaskList from './TaskList'

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
        }

        this.addTask = this.addTask.bind(this);
        this.clearTask = this.clearTask.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
    }
    render() {

        return (
            <div>
                <h1>Input</h1>
                <AddingTasks addTask={this.addTask} tasks_created={this.state.tasks}/>
                <h1>All Tasks</h1>
                <TaskList  clearTask={this.clearTask} changeGroup={this.changeGroup} tasks={this.state.tasks} />
            </div>
        )
    }

    addTask = (element) =>{
        var tasks=[];
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(element);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState ({
            tasks: tasks
        })
    }
    clearTask = ()=>{
        localStorage.clear()
        this.setState ({
            tasks: []
        })
    }
    changeGroup =(id_task, new_group) =>{
        var tasks=[];
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks[id_task].group_task=new_group;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.setState ({
            tasks: tasks
        })
    }

}

export default  App;
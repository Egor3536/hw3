import React,{Component} from 'react'

class Task extends Component {
    constructor(props){
        super(props)
        this.changeGroupTask = this.changeGroupTask.bind(this);
    }
    render(){
        const name_group_task =['Выполнить','Выполняется','Выполнено']
        const {task,changeGroup} = this.props;
        return(
            <div>
                <h2>{task.name}</h2>
                <p>{task.id}--{task.description}</p>
                <p>Статус Задачи: {name_group_task[task.group_task]}</p>
                <p>create date: {(new Date(task.data_time)).toDateString()}</p>
                <button onClick={() => this.changeGroupTask(task.id, task.group_task, changeGroup)}>NewGroup</button>
            </div>
        )
    }
    changeGroupTask (id_task, group_task, changeGroup){
        if (group_task !=2 )  changeGroup(id_task, group_task+1)
    }
}
export default Task
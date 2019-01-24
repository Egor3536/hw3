import React,{PureComponent} from 'react'
import Task from '../Task'

class TaskList extends PureComponent {
    constructor(props){
        super(props);

        this.state= {
            openGroup: -1
        };

        this.editOpenGroup = this.editOpenGroup.bind(this);
    }
    editOpenGroup =(event) =>{
        this.setState({
            openGroup: event.target.value
        })
    }
    render (){
        const {tasks} = this.props;
        if (this.state.openGroup == -1) {
            var artElement = tasks.map(tasks =>
                <li key={tasks.id}><Task task={tasks} changeGroup={this.props.changeGroup}/></li>
            )//test_commentary
        }else{
            var filterArr = tasks.filter(tasks => tasks.group_task == this.state.openGroup)
            var artElement = filterArr.map(filterArr =>
                <li key={filterArr.id}><Task task={filterArr} changeGroup={this.props.changeGroup}/></li>
            )
        }
        return (
            <div>
                <p>
                    Фильтр категорий:
                    <select value={this.state.openGroup} onChange={this.editOpenGroup}>
                        <option value={-1}>Нет</option>
                        <option value={0}>Выполнить</option>
                        <option value={1}>Выполняется</option>
                        <option value={2}>Выполнено</option>
                    </select>
                </p>
                <ul>
                    {artElement}
                </ul>
                <button onClick={this.props.clearTask}>Clear</button>
            </div>

        )
    }

}
export default TaskList
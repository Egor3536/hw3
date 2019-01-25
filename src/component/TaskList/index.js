import React,{PureComponent} from 'react'
import Task from '../Task'

class TaskList extends PureComponent {
    constructor(props){
        super(props);

        this.state= {
            openGroup: [true, true, true],
            openFilteCategories: false
        };

        this.editOpenGroup = this.editOpenGroup.bind(this);
        this.openCategories = this.openCategories.bind(this);
    }

    editOpenGroup =(e) =>{
        let new_state = this.state.openGroup.slice();
        new_state[e]= !new_state[e];
        this.setState({
            openGroup:  new_state
        });
    };
    openCategories =() =>{
        if (this.state.openFilteCategories) {
            this.setState({
                openGroup: [true,true,true],
                openFilteCategories: false
            });
        }else{
            this.setState({
                openGroup: [false,false,false],
                openFilteCategories: true
            });
        }
    };

    render (){
            const {tasks} = this.props;

            const filterArr = tasks.filter(tasks => (this.state.openGroup[0] && (tasks.group_task === 0)) ||
                                                  (this.state.openGroup[1] && (tasks.group_task === 1)) ||
                                                  (this.state.openGroup[2] && (tasks.group_task === 2))
            );
            const artElement = filterArr.map(filterArr =>
                <li key={filterArr.id}><Task task={filterArr} changeGroup={this.props.changeGroup}/></li>
            );

            const filterCategories = this.state.openFilteCategories &&
                <div>
                    <p><input type="checkbox" onChange={() =>this.editOpenGroup(0)}/>Выполнить</p>
                    <p><input type="checkbox" onChange={() =>this.editOpenGroup(1)}/>Выполняется</p>
                    <p><input type="checkbox" onChange={() =>this.editOpenGroup(2)}/>Выполнено</p>
                </div>;


        return (
            <div>
                <p>
                    Фильтр категорий:<button onClick={this.openCategories}>{this.state.openFilteCategories ? 'выкл' : 'вкл'}</button>
                    {filterCategories}
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
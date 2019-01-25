import React, {Component} from 'react'

class AddingTasks extends Component {
    constructor(props){
        super(props);

        this.state = {
            nameTask : '',
            descriptionTask :''
        };

        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.checkSend = this.checkSend.bind(this);
    }

    setName (event) {
        this.setState({
            nameTask: event.target.value
        })

    }

    setDescription (event) {
        this.setState({
            descriptionTask: event.target.value
        })
    }

    checkSend  (tasks_created , addTask) {
        if(this.state.nameTask) {
            var id_t = 0;
            tasks_created ? id_t = tasks_created.length : id_t = 0 ;

            var new_task = {
                id: id_t,
                name: this.state.nameTask,
                description: this.state.descriptionTask,
                data_time: (new Date),
                group_task:0
            }
            addTask(new_task);
            this.setState({
                nameTask: '',
                descriptionTask: ''
            })
        }
    }
    render(){
        const {tasks_created, addTask}= this.props

        return (
            <div>
                <from>
                    <input className='nameTask' onChange={this.setName} value={this.state.nameTask}/>
                    <input className='descriptionTask' onChange={this.setDescription} value={this.state.descriptionTask}/>
                    <button onClick={() => this.checkSend (tasks_created, addTask)}>add</button>
                </from>
            </div>
        )
    }


}
export default AddingTasks
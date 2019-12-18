import React, { Component } from 'react';
import TaskList from './TaskList';

import { TASK_STATUSES } from '../constants';

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      showEditCardForm: false,
      editID:-1,
      title: '',
      description: '',
    };
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  resetForm() {
    this.setState({
      showNewCardForm: false,
      showEditCardForm: false,
      editID:-1,
      title: '',
      description: '',
    });
  }

  onSubmitTask = e => {
    e.preventDefault();
    if (this.state.showNewCardForm) {
      this.props.onCreateTask({
        title: this.state.title,
        description: this.state.description,
      });
    } else if (this.state.showEditCardForm) {
      this.props.onEdit({
        id:this.state.id,
        title: this.state.title,
        description: this.state.description,
      });
    }
    
    this.resetForm();
  };

  onEditClicked=(id)=>{
    //debugger;
    const { tasks } = this.props;
    var selectedTasks = tasks.filter(function(task) {
      return task.id == id;
    }) 
    var selectedTask = {}
    if (selectedTasks.length > 0) {
      selectedTask = selectedTasks[0]
    }
    this.setState({ showEditCardForm: !this.state.showNewCardForm,editID:id,...selectedTask });
  };
  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  };

  renderTaskLists() {
    const { onStatusChange ,onDelete , tasks } = this.props;

    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
          onStatusChange={onStatusChange}
          onEditClicked={this.onEditClicked}
          onDelete={onDelete}
        />
      );
    });
  }

  render() {
    return (
      <div className="tasks">
        <div className="tasks-header">
          <button className="button button-default" onClick={this.toggleForm}>
            + New task
          </button>
        </div>

        {(this.state.showNewCardForm || this.state.showEditCardForm) &&
          <form className="new-task-form" onSubmit={this.onSubmitTask}>
            <input
              className="full-width-input"
              onChange={this.onTitleChange}
              value={this.state.title}
              type="text"
              placeholder="title"
            />
            <input
              className="full-width-input"
              onChange={this.onDescriptionChange}
              value={this.state.description}
              type="text"
              placeholder="description"
            />
            <button className="button" type="submit">
              Save
            </button>
          </form>}

        <div className="task-lists">
          {this.renderTaskLists()}
        </div>
      </div>
    );
  }
}

export default TasksPage;

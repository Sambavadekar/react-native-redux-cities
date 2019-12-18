import React from 'react';

import { TASK_STATUSES } from '../constants';

const Task = props => {
  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
        <select value={props.task.status} onChange={onStatusChange}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
      <button onClick={onEditClicked}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }

  function onEditClicked(e) {
    props.onEditClicked(props.task.id);
  }

  function onDelete(e) {
    props.onDelete(props.task.id);
  }
};

export default Task;

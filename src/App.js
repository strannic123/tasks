import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import TasksPage from "./components/TasksPage";
import {createTask, editTask} from "./actions";


function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, {status}))
  }

  const onCreateTask = ({title, description}) => {
    props.dispatch(createTask({title, description}))
  }

  return (
    <div className='display-4'>
      <TasksPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
      />

    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (App);

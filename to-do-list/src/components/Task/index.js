import { connect } from "react-redux";
import Task from "./Task";

import {
    getTasks,
    updateTasks,
    deleteTasks,
} from "../../redux/actions/TaskActions";
const mapStateToProps = (state) => ({
    tasks: state.tasks,
});
const mapDispatchToProps = (dispatch) => ({
    getTasks: () => getTasks(dispatch),
    updateTasks: (data) => updateTasks(dispatch, data),
    deleteTasks: (data) => deleteTasks(dispatch, data),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);

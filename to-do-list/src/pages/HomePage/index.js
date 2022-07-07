import { connect } from "react-redux";
import Home from "./Home";

import { getTasks, addTasks } from "../../redux/actions/TaskActions";
const mapStateToProps = (state) => ({
    tasks: state.tasks,
});
const mapDispatchToProps = (dispatch) => ({
    getTasks: (data) => getTasks(dispatch),
    addTasks: (data) => addTasks(dispatch, data),
    //deleteTasks: (data) => deleteTasks(dispatch, data),
    //updateTasks: (data) => updateTasks(dispatch, data),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

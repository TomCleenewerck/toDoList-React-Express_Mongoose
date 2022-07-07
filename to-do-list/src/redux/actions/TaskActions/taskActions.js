import {
    tasksLoaded,
    tasksLoading_Failed,
    startLoading,
    addTask,
    deleteTask,
    updateTask,
} from "../../reducers/TaskReducer";

const getTasksAction =
    ({ ApiCall, url }) =>
    async (dispatch) => {
        let apiData = null;
        apiData = ApiCall.get(url)
            .then((res) => dispatch(tasksLoaded(res.data)))
            .catch((err) => {
                dispatch(tasksLoading_Failed());
                console.warn(err);
            });
        return apiData.data;
    };

const addTaskAction =
    ({ ApiCall, url }) =>
    async (dispatch, data) => {
        let apiData = null;
        apiData = ApiCall.post(url, data)
            .then((res) => dispatch(addTask(res.data)))
            .catch((err) => console.warn(err));
        return apiData;
    };

const updateTaskAction =
    ({ ApiCall, url }) =>
    (dispatch, data) => {
        let apiData = null;
        apiData = ApiCall.put(url + data.id, data)
            .then((res) => dispatch(updateTask(res.data)))
            .catch((err) => console.warn(err));
        return apiData;
    };

const deleteTaskAction =
    ({ ApiCall, url }) =>
    (dispatch, data) => {
        let apiData;
        apiData = ApiCall.delete(url + data.id)
            .then((res) => dispatch(deleteTask(res.data)))
            .catch((err) => console.warn(err));
        return apiData;
    };

export { getTasksAction, addTaskAction, updateTaskAction, deleteTaskAction };

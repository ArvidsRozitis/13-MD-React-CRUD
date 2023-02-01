import { Task } from "../App";
import axios from "axios";

export const DeleteTaskButton = ({ id, setTasks }: number | any) => {
  const deleteTaksHandler = (id: string) => {
    axios.delete<Task>(`http://localhost:3004/tasks/${id}`).then(() => {
      axios.get<Task[]>("http://localhost:3004/tasks").then(({ data }) => {
        console.table(data);
        setTasks(data);
      });
    });
  };
  return (
    <div className="task__button">
      <button
        className="button button__task"
        onClick={() => deleteTaksHandler(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteTaskButton;

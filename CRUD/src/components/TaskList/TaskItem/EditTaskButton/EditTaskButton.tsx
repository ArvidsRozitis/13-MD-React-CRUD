export const EditTaskButton = ({ editTaskHandler }: any) => {
    return (
      <div className="task__button">
        <button className="button button__task" onClick={editTaskHandler}>
          Edit
        </button>
      </div>
    );
  };

  export default EditTaskButton
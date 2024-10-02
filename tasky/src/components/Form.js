import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
        <form onSubmit={props.submit}>
            <label>
                Task title:
                <br></br>
                <input type="text" name="title" required onChange={(event) => props.change(event)} />
            </label>
            <br />
            <label>
                Due date:
                <br></br>
                <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
            </label>
            <br />
            <label>
                Details:
                <br></br>
                <input type="text" name="description" onChange={(event) => props.change(event)} />
            </label>
            <br />
            <label>
                Priorty:
                <br></br>
                <select name="priority" required onChange={(event) => props.change(event)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
import React, { useState } from "react";

export default function Task(props: {
	key: string,
	uid: string,
	name: string,
	description: string,
	hue: string,
	completed: boolean,
	projectId: string,
	currentEditTask: string,
	setCurrentEditTask: (value: string) => void
	deleteTask: (taskId: string) => void
	completeTask: (taskId: string) => void
	uncompleteTask: (taskId: string) => void

}): JSX.Element {
	//<> Cache the props
	const uid = props.uid;
	const hue = props.hue;
	let description = props.description;
	//We don;t want blak descriptions
	if (description === "") { description = "-" }
	// let checkBox = <input className={`form-check-input me-3 p-1 bg-${hue}-bright `} id={"todo-cb-" + uid} type="checkbox" />;
	let completeTask = props.completeTask;
	let uncompleteTask = props.uncompleteTask;

	//<> State management
	const [isEditing, setEditing] = useState(false);

	// Text for the buttons
	const editText = ".Edit.";
	const finishText = "Finish";
	const completeText = "!Done!";

	function taskName() {
		let taskName = <label className="form-check-label h5" htmlFor={"todo-cb-" + uid}>{props.name} [{props.uid}]</label>
		// If this task is currently being edited, show the form
		if (props.currentEditTask === uid) {
			taskName = <input className={`m-2 bg-${hue}-bright text-dark border-gray-dark rounded-2`} type="text" />;
		}
		return taskName;

	}


	function completeButton() {
		if (props.completed) {
			// If it's complete, display Done.  You can click it to uncomplete the task.
			return <button
				className="btn lh-lg me-3 p-1"
				onClick={() => uncompleteTask(uid)}>{completeText}
			</button>;
		} else {
			// If it's incomplete, display the finish button
			return <button
				className={`btn lh-lg bg-${hue}-bright text-${hue}-dark border-gray-dark me-3 p-1`}
				onClick={() => completeTask(uid)}
			>.Todo.</button>;
		}
	}

	function editButton() {
		if (isEditing) {
			return <button
				className={`btn lh-lg me-3 p-1 text-${hue}-bright bg-${hue}-dark border-${hue}-bright`}
				onClick={() => setEditing(false)}>{finishText}</button>
		} else {
			return <button
				className="btn lh-lg me-3 p-1"
				onClick={() => setEditing(true)}>{editText}</button>
		}

	}

	function deleteButton() {
		return <button
			className={`btn lh-lg me-3 p-1`}
			onClick={() => props.deleteTask(uid)}>Delete</button>

	}

	return (
		<React.Fragment>
			<tr><td colSpan={2}><hr /></td></tr>
			<tr>
				<td>
					{completeButton()}
				</td>
				<td>
					{taskName()}
				</td>
			</tr>
			<tr>
				<td>{editButton()} {deleteButton()}</td>
				<td className="text-center">{description}</td>
			</tr>

		</React.Fragment>
	);
}
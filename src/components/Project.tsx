import Task from './Task';

export default function Project(props: {
	key: string,
	uid: string,
	title: string,
	description: string,
	hue?: string,
	todos: {
		uid: string,
		name: string,
		url: string,
		description: string,
		completed: boolean,
		projectId: string
	}[],
	currentEditTask: string,
	setCurrentEditTask: (value: string) => void
	deleteTask: (taskId: string) => void
	completeTask: (taskId: string) => void
	uncompleteTask: (taskId: string) => void
}): JSX.Element {
	const projectHue = props.hue || 'orange';
	// <> For each project, get the tasks
	const todoList = props.todos.map(todo => {
		return (<Task
			key={todo.uid}
			uid={todo.uid}
			name={todo.name}
			description={todo.description}
			hue={projectHue}
			completed={todo.completed}
			projectId={todo.projectId}
			currentEditTask={props.currentEditTask}
			setCurrentEditTask={props.setCurrentEditTask}
			deleteTask={props.deleteTask}
			completeTask={props.completeTask}
			uncompleteTask={props.uncompleteTask}
		/>);
	});
	return (
		<div className={`col-5 m-2 p-3 project-div bg-${projectHue}-dark border text-${projectHue}-bright border-${projectHue}-bright`} id={"project-" + props.uid}>
			<div className="project-header m-1 my-3">
				<h2>{props.title}</h2>{props.uid}
				<p>{props.description}</p>
				
			</div>
			<table className="w-100">
				<tbody>
					{todoList}
				</tbody>
			</table>
			

		</div>
	);
}
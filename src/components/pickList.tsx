import React from "react";
import { typeOf(Project) } from "../appTypes";

// Build a select list of projects
export default function selectList(props:
	{uid: string, projects: typeOf(Project)[], selected: typeOf(Project), onChange: (project: typeOf(Project)) => void, cssClasses:string}): JSX.Element {
	const projects = props.projects;
	const projectSelect = projects.map((project: { uid: string; title: string; }) => {
		return (
			<option key={project.uid} value={project.uid}>
				{project.title} {project.uid}
			</option>
		);
	});
	return (
		<select
			className={"form-control " + props.cssClasses}
			id="project-select"
			onChange={e => { props.onChange(e.target.value) }}
		>{projectSelect}</select>
	);
}
if(!db){
    const listJSON = JSON.stringify([])
    localStorage.setItem('tasks', listJSON)
}

function save(data) {
	const tasks = document.querySelectorAll("#task");
	const arrayTask = [];

	for (let task of tasks) {
		arrayTask.push({
			task: task.innerText,
			id: task.classList[0],
			checked: task.getAttribute("checked"),
		});
	}

    const listJSON = JSON.stringify(arrayTask)
    localStorage.setItem('tasks', listJSON)
}

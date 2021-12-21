export async function getAllTasks() {

    const response = await fetch('/api/tasks');
    return await response.json();
}

export async function createTask(data) {
    const response = await fetch(`/api/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
      })
    return await response.json();
}

export async function deleteAllTasks() {
    const response = await fetch(`/api/delete`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      })
    return await response.json();
}
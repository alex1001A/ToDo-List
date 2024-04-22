import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";

import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = 'todo:savedtasks'

export default function App() {

const [tasks, setTasks] = useState([])

function getSavedTasks(newTasks) {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (saved) {
    setTasks(JSON.parse(saved))
  }
}

useEffect(() => {
  getSavedTasks()
}, [])

function setTasksAndSave(newTasks) {
  setTasks(newTasks)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
}

function addTask(taskTitle) {
  setTasksAndSave([
    ...tasks, 
    {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }
  ])
}

function toggleTaskCompletedById(taskId) {
  const newTasks = tasks.map(task => {
    if(task.id === taskId) {
      return {
        ...task, 
        isCompleted: !task.isCompleted
      }
    }
    return task
  })
  setTasksAndSave(newTasks)
}

function deleteTaskById(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasksAndSave(newTasks)
}

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks
      tasks={tasks}
      onDelete = {deleteTaskById}
      onComplete={toggleTaskCompletedById}
      />
    </>
  )
}


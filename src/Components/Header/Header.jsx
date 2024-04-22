import s from './Header.module.css'

import todoLogo from '../../assets/logo-todo.svg'
import { CiCirclePlus } from "react-icons/ci";

import { useState } from "react";


export default function Header({ onAddTask }) {

  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  return (
    <header className={s.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={s.newTaskForm}>
        <input placeholder='add a new task' type="text" value={title} onChange={onChangeTitle} />
        <button>Create Task <CiCirclePlus size={20} /></button>
      </form>
    </header>
  )
}

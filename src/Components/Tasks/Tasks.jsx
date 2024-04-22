import Task from '../Task/Task'

import s from './Tasks.module.css'

export default function Tasks({tasks, onComplete, onDelete}) {

const tasksQuantity = tasks.length
const copletedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <section className={s.tasks}>
      <header className={s.header}>
        <div>
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={s.textPurple}>Comleted tasks</p>
          <span>{copletedTasks}/{tasksQuantity}</span>
        </div>
      </header>

      <div className={s.list}>
        {tasks.map(task => (
        <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))}
      </div>
    </section>
  )
}

import s from './Task.module.css'

import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";



export default function Task({task, onComplete, onDelete}) {
    return (
        <div className={s.task}>
            <button className={s.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <CiCircleCheck /> : <div/>}
            </button>
            <p className={task.isCompleted ? s.textCompleted : ''}>{task.title}</p>
            <button className={s.deleteButton} onClick={() => onDelete(task.id)}><FaRegTrashAlt size={16} /></button>
        </div>
    )
}

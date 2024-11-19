import React, { useState } from 'react';
import styles from './CandidateItem.module.css'

const CandidateItem = ({key, task, toggleComplete, removeTask, editTask}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newTask, setNewTask] = useState(task.text)
    const [isAnimating, setIsAnimating] = useState(false);

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        editTask(task.id, newTask)
        setIsEditing(false)
    }

    const handleRemove = () => {
        removeTask(task.id)
    }

    const handleToggleComplete = () => {
        setIsAnimating(true);
        setTimeout(() => {
            toggleComplete(task.id);
            setIsAnimating(false);
        }, 500);
    }

    return (
        <div
            className={[
                styles.item,
                isAnimating
                    ? task.completed
                        ? styles.slideOutRight
                        : styles.slideInLeft
                    : '',
                task.completed ? styles.completed : ''
            ].join(' ')}
        >
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.input}
                    />
                    <div className={styles.buttons}>
                        <p onClick={handleSave} className={styles.saveButton}>Salvar</p>
                    </div>
                </>
            ) :
            (
                <>  
                    
                    <p 
                    className={[task.completed ? styles.completed : '', styles.itemText].join(' ')} onClick={handleToggleComplete}>
                        {task.text}
                    </p>

                    <div className={styles.div}><p>Valor: </p><p>10</p></div>

                    <div className={styles.buttons}>
                        <p className={styles.editButton} onClick={handleEdit} >Votar</p>
                        <p className={styles.removeButton} onClick={handleRemove} >X</p>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default CandidateItem
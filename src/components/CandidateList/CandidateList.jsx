import React, { useState } from 'react';
import styles from './CandidateList.module.css'
import CandidateItem from '../CandidateItem/CandidateItem'

const CandidateList = ({tasks, toggleComplete, removeTask, editTask}) => {

    return (
        <div className={styles.listContainer}>
            <h1 className={styles.header}>Candidatos</h1>
            <ul className={styles.list}>
                {
                    tasks.map((task) => (
                        <CandidateItem
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete}
                            removeTask={removeTask}
                            editTask={editTask}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default CandidateList
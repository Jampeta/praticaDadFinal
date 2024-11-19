import React, { useState, useEffect } from 'react';
import styles from './VotingApp.module.css'
import CandidateForm from "../CandidateForm/CandidateForm"
import CandidateList from "../CandidateList/CandidateList"

const VotingApp = ({}) => {
    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTasks([...tasks, newTask])
    }

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('todoTasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState(() => {
        return localStorage.getItem('todoFilter') || '';
    });

    const editTask = (taskId, newText) => {
        setTasks (
            tasks.map((task) =>
                task.id === taskId ? {...task, text: newText} : task
            )
        )
    }

    const removeTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
    }

    const toggleComplete = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? {...task, completed: !task.completed} : task
            )
        )
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed
        if (filter === 'incompleted') return !task.completed
        return true
    })

    useEffect(() => {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('todoFilter', filter);
    }, [filter]);

    return (
        <div className={styles.appContainer}>
            <h1 className={styles.header}>App Votos</h1>
            <CandidateForm addTask={addTask} />
            <CandidateList 
                tasks={filteredTasks}
                toggleComplete={toggleComplete}
                removeTask={removeTask}
                editTask={editTask}
                />
        </div>
    )
}

export default VotingApp
import React, { useState, useEffect } from 'react';
import styles from './CandidateForm.module.css'

const CandidateApp = ({addTask}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputValue.trim()){
            addTask(inputValue)
            setInputValue('')
        }
        else {
            console.log('Preencha o campo');
        }

    }

    return (
        <div className={styles.form}>
            <input 
            type="text" 
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Nome do candidato'
            />
            <p className={styles.button} onClick={handleSubmit}>Adicionar</p>
        </div>
    )
}

export default CandidateApp
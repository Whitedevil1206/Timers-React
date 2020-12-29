import React, { useState } from 'react';
import styles from '../css/timerForm.module.css';

const TimerForm = ({
  id,
  title,
  project,
  clickCancel,
  showPlus,
  onFormSubmit,
}) => {
  const [inputState, setInputState] = useState({
    inputTitle: title ? title : '',
    inputProject: project ? project : '',
  });

  const handleSubmit = () => {
    onFormSubmit({
      Id: id,
      title: inputState.inputTitle,
      project: inputState.inputProject,
    });
    setInputState({
      inputTitle: '',
      inputProject: '',
    });
  };

  const handleTitleChange = (e) => {
    setInputState({
      inputTitle: e.target.value,
      inputProject: inputState.inputProject,
    });
  };

  const handleProjectChange = (e) => {
    setInputState({
      inputProject: e.target.value,
      inputTitle: inputState.inputTitle,
    });
  };

  const submitText = id ? 'Update' : 'Create';
  return (
    <div className={styles.card}>
      <div className={styles.field}>
        <label>Title</label>
        <input
          type="text"
          value={inputState.inputTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className={styles.field}>
        <label>Project</label>
        <input
          type="text"
          value={inputState.inputProject}
          onChange={handleProjectChange}
        />
      </div>
      <div>
        <button className={styles.but} onClick={handleSubmit}>
          {submitText}
        </button>
        <button className={styles.but} onClick={clickCancel || showPlus}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TimerForm;

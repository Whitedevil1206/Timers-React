import React, { useState } from 'react';
import TimerForm from './TimerForm';

const ToggleableTimerForm = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleShowPlus = () => {
    setIsOpen(false);
  };

  const handleSubmit = (item) => {
    onCreate(item);
  };

  if (isOpen)
    return <TimerForm showPlus={handleShowPlus} onFormSubmit={handleSubmit} />;
  else {
    return (
      <div className="plus">
        <h4 style={{ cursor: 'pointer' }} onClick={handleIsOpen}>
          ADD +
        </h4>
      </div>
    );
  }
};

export default ToggleableTimerForm;

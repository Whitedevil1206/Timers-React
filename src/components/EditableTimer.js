import React, { useState } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = ({
  title,
  id,
  project,
  elapsed,
  runningSince,
  onSubmit,
  onDel,
}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleEditbtn = () => {
    setEditFormOpen(true);
  };

  const handleCancelbtn = () => {
    setEditFormOpen(false);
  };

  const handleSubmit = (item) => {
    onSubmit(item);
    setEditFormOpen(false);
  };

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        clickCancel={handleCancelbtn}
        onFormSubmit={handleSubmit}
      />
    );
  } else {
    return (
      <Timer
        id={id}
        title={title}
        project={project}
        runningSince={runningSince}
        elapsed={elapsed}
        clickEdit={handleEditbtn}
        clickDel={onDel}
      />
    );
  }
};

export default EditableTimer;

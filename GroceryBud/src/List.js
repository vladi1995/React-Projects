import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ element, index, onEdit, onDelete }) => {
  return (
    <div className='grocery-item'>
      <h4 className='title'>{element}</h4>
      <div>
        <FaEdit className='edit-btn' onClick={() => onEdit(index)} />
        <FaTrash className='delete-btn' onClick={() => onDelete(index)} />
      </div>
    </div>
  );
};

export default List;

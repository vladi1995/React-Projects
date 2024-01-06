import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

function App() {
  const [groceries, setGroceries] = useState(getLocalStorage());
  const [groceryItem, setGroceryItem] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({});
    }, 3000);

    return () => clearTimeout(timeout);
  }, [groceries, isEdit]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(groceries));
  }, [groceries]);

  const onChangeGroceryItem = (e) => {
    setGroceryItem(e.target.value);
  };

  const onEdit = (index) => {
    setIsEdit(true);
    setGroceryItem(groceries[index]);
    setEditId(index);
  };

  const onDelete = (index) => {
    setGroceries(oldGroceries => oldGroceries.filter((grocery, i) => i !== index));
    setAlert({ mode: 'danger', text: 'Item removed' });
  };

  const removeAll = () => {
    setGroceries([]);
    setAlert({ mode: 'danger', text: 'Empty list' });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (groceryItem === '') {
      setAlert({ mode: 'danger', text: 'Please enter value' });
    } else {
      if (isEdit) {
        groceries[editId] = groceryItem;
        setGroceries(groceries);
        setAlert({ mode: 'success', text: 'Value changed' });
      } else {
        setGroceries(oldGroceries => [...oldGroceries, groceryItem]);
        setAlert({ mode: 'success', text: 'Item added to the list' });
      }
    }
    setGroceryItem('');
    setIsEdit(false);
  };

  return (
    <div className='section-center'>
      {alert && <Alert alert={alert} />}
      <div className='grocery-form'>
        <h3>Grocery Bud</h3>
        <form className='form-control' onSubmit={onFormSubmit}>
          <input
            type="text"
            className='grocery'
            placeholder='e.g. eggs'
            value={groceryItem}
            onChange={onChangeGroceryItem}
          />
          <input type='submit' className='submit-btn' value={`${isEdit ? 'Edit' : 'Submit'}`} />
        </form>
      </div>
      <div className='grocery-container'>
        {groceries.map((element, index) => <List key={index} element={element} index={index} isEdit={isEdit} onEdit={onEdit} onDelete={onDelete} />)}
      </div>
      {groceries.length ?
        <button className='clear-btn' onClick={removeAll}>Clear items</button> : null
      }
    </div>
  );
}

export default App;

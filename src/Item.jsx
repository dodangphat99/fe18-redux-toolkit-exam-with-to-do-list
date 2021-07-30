import { useState } from 'react';

function Item(props) {
  const {
    index,
    title,
    description,
    handleEditTask,
    handleDeleteTask,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState({
    title: title,
    description: description,
  });
  function handleChangeValue(e) {
    const { name, value } = e.target;
    setEditTaskForm({
      ...editTaskForm,
      [name]: value,
    });
  }
  function renderTaskContent() {
    if (isEdit) {
      return (
        <div style={{padding:"20px",border:"2px solid",display:'flex',flexDirection:'column'}}>
        <h3>Edit card</h3>
        
        <label >Title:</label>
        <input type="text" name="title" onChange={(e) => handleChangeValue(e)} value={editTaskForm.title}></input>
        <label>Description:</label>
        <input type="text" name="description" onChange={(e) => handleChangeValue(e)} value={editTaskForm.description}></input>
        <div style={{marginTop:"20px",alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <button style={{marginLeft:'150px'}} onClick={()=>{handleEditTask(editTaskForm, index);setIsEdit(false)}}>OK</button>
        <button style={{marginRight:'150px'}} onClick={() => setIsEdit(false)} >Cancel</button>
        </div>
      </div>
      )
    } else {
      return (
        <>
          <div>Title: {title}</div>
          <div>Description: {description}</div>
        </>
      )
    }
  }

  return (
    <div style={{padding:"20px",border:"2px solid",display:'flex',flexDirection:'column',marginTop:'20px'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginBottom:'20px'}}>
      {!isEdit &&<button onClick={() => setIsEdit(true)}>Edit</button>}
      <button onClick={()=> handleDeleteTask(index)}>Delete</button>
      </div>
      {renderTaskContent()}
    </div>
  );
}

export default Item;

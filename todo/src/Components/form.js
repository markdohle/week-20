import React from 'react'
import { api } from "./api"

//function to hold the form component
//links to App function return statement. NOTE {} for the parameter.
function TodoForm({addTodo}){
    /*
    Create a manged variable, which is a variable that is in state.
  
    The variable 'value' is input from the user, which is set by setValue.
  
    Inititialize useState('') with an empty string.
    */
    const [value,setValue] = React.useState('');
    const [items,setItems] = React.useState([]);
    /*
    handleSubmit function uses ES6 syntax.
  
    The function checks for an existing value. The constructs a new list, which is the existing list plus the new Todo. Set the newList using 'setTodos' and clear out the form.
  
    Take the event 'e'.
  
    Prevent the default to refresh the page.
  
    Check the value of the field and if empty, then stop the function by doing nothing.
  
    Use the addTodo function to access todos and construct newTodos. Then clear out our form, which is 'setValue( '' )'.
    
    Create the addTodo function in idex.js, since that file has access to todos.
    */
    
    const handleSubmit = e => {
        e.preventDefault();
      
        api.createItem(value).then((persistedItem) => {
          if(!value) return;
          addTodo(value);
          setValue('');
          setItems([...items,value])
        })
      }
    /*
    Add todos to the list with a form and handle the submit event to add todos to the state in the application.
  
    Value is being updated by the 'onChange' event. The submit function is handled it with submit.
  
    Create a form with an onSubmit attribute to map the onChange event(e) to the handleSubmit function. The onChange attribute has an input element where the user can enter that value.
      
    There are 5 attributes added to the input tag within the form tag.
      
    When that form is submitted, the event is handled event with 'handleSubmit' function.
    */ 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Add todo: </label>
            <input
                id="new-todo"
                //type="text"
                //className attribute to capture css style
                //className="input"
                //value attribute to capture the value defined within the state of the application.
                value={value}
                //placeholder attribute to intruct the user of the application
                placeholder="Add Todo..."
                //onChange event attribute with an expression function to use event(e) to access and set the value of the input.
                onChange={e => setValue(e.target.value)}
            />
            <button>
                Add #{items.length + 1}
            </button>
        </form>
    )
  }
//========================
export default TodoForm;
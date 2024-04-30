import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo 
        title="Finish Frontend Simplified"
        paragraph="Code along with Frontend Simplified step by step."
        />
        <Todo 
        title="Finish Interview Section"
        paragraph="Finish every interview question in the next six weeks."/>
        <Todo 
        title="Land 100k job"
        paragraph="Within a year."
        />
      </div>
      <Modal title="Are you sure you want to add?" />
    </div>
  );
}

export default App;

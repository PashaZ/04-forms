import React, { Component } from 'react';
import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
import Container from './components/Container';
// import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor';
// import Filter from './components/Filter';
import Form from './components/Form';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };
  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 3000);
  };
  // handleNameChange = (event) => {
  //   this.setState({ name: event.currentTarget.value });
  // }
  // handleNumberChange = (e) => {
  //   this.setState({ tag: e.currentTarget.value })
  // }
  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}

export default App;

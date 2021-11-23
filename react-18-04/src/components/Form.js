import React, { Component, createContext } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'middle',
    licence: false,
  };
  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      tag: '',
      experience: 'junior',
      licence: false,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Імя{' '}
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.tagInputId}>
          Прізвище{' '}
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          ></input>
        </label>
        <p> Ваш рівень розробника</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name=""
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Готовий працювати за їжу{' '}
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Відправити{' '}
        </button>
      </form>
    );
  }
}
export default Form;

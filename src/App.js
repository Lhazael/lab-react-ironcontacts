import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"; // Iteration 1


class ContactsList extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  // Iteration 2

  handleRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    const copyWithNewContacts = [randomContact, ...this.state.contacts];

    this.setState({
      contacts: copyWithNewContacts,
    });
  }

  // Iteration 3

  handleSortName = () => {
    const copyContacts = [...this.state.contacts];

    copyContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: copyContacts,
    });
  };

  handleSortPop = () => {
    const copyContacts = [...this.state.contacts];

    copyContacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    this.setState({
      contacts: copyContacts,
    });
  };

  // Iteration 4

  handleDelete = (event) => {
    const newArray = this.state.contacts.filter((contact) => contact.id !== event);

    this.setState({
      contacts: newArray,
    });
  };

  render() {
    return (
      <div>    
        <button onClick={this.handleRandom} className="btn btn-add">Add Random Contact</button>
        <button onClick={this.handleSortName} className="btn btn-sort-name">Sort by Name</button>
        <button onClick={this.handleSortPop} className="btn btn-sort-popularity">Sort by Popularity</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contact, index) => {
            return (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt= ""
                    style={{
                      height: 80,
                    }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button
                  className="btn btn-delete"
                  onClick={() => this.handleDelete(contact.id)}
                >
                  Delete
                </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>  
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1 className="title">IronContacts</h1>
      <ContactsList />
    </div>
  );
}


export default App;

import React, { createContext, Component } from 'react';

const Context = createContext('english');

export class LanguageStore extends Component {
  state = {
    language: 'english'
  };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    const {
      props: { children },
      state,
      onLanguageChange,
    } = this;

    return (
      <Context.Provider
        value={{
          ...state,
          onLanguageChange
        }}
      >
        {children}
      </Context.Provider>
    )
  }
};

export default Context;


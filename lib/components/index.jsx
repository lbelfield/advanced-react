import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    answer: 42
  };

  // babel-polyfill allows this es6 promise to work
  asyncFunc = () => {
    return Promise.resolve(38);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>Hello Class Component {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
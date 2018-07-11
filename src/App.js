import React, { Component } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      rawMark: '',
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({rawMark: e.target.value});
  }

  render() {
    return (
      <div>
      <Editor enterText={this.handleTextChange}/>
      <Previewer>{this.state.rawMark}</Previewer>
      </div>
    );
  }
}

export default App;

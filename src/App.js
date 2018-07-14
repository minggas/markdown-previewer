import './App.css';
import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import { MarkdownInput } from 'react-marked-markdown';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.defaultValue ? props.defaultValue : '',
      };
    }
    handleTextChange(e) {
      this.setState({ value: e.target.value });
      if (this.props.onTextChange) {
        this.props.onTextChange(e.target.value);
      }
    }
    clear() {
      this.setState({ value: '' });
    }
    render() {
      const {
        placeholder,
        className,
        inputClassName,
        inputId,
        previewId,
        previewClassName
      } = this.props;
      const { value } = this.state;

      return (
        <section className={ className }>
          <div className='wrap'>
            <h4 className='toolbar-title'>Editor</h4>
          <MarkdownInput
            placeholder={ placeholder }
            onChange={ this.handleTextChange.bind(this) }
            value={ value }
            className={ inputClassName }
            id={inputId}
          />
          </div>
  
          <div className='wrap pw-wrap'>
            <h4 className='toolbar-title'>Previewer</h4>
            <MarkdownPreview
            value={ value }
            className={ previewClassName }
            id={previewId}
          />
          </div>
        </section>
      );
    }
  }

  export default App;
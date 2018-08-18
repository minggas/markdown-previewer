import React from "react";
import marked from "marked";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownPreview from "./components/MarkdownPreview";
import Footer from "./components/Footer";
import "./App.css";

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : ""
    };
  }
  handleTextChange = e => {
    this.setState({ value: e.target.value });
    if (this.props.onTextChange) {
      this.props.onTextChange(e.target.value);
    }
  };
  clear = () => {
    this.setState({ value: "" });
  };
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
    const mark = {
      __html: marked(this.state.value, { renderer: renderer, sanitize: true })
    };
    const footer = {
      link: "https://minggas.website",
      title: "Link to Minggas Website"
    };
    return (
      <section className={className}>
        <MarkdownInput
          placeholder={placeholder}
          onChange={this.handleTextChange.bind(this)}
          value={value}
          className={inputClassName}
          id={inputId}
          clearBtn={this.clear}
        />

        <MarkdownPreview
          value={mark}
          className={previewClassName}
          id={previewId}
        />
        <Footer link={footer.link} title={footer.title}>
          Minggas
        </Footer>
      </section>
    );
  }
}

export default App;

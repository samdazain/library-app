import React from "react";

class AddBookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      createdAt: new Date().toISOString(),
      body: "",
      maxTitleLength: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onDateChangeHandler = this.onDateChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    let title = event.target.value;
    const maxTitleLength = this.state.maxTitleLength;

    if (title.length > maxTitleLength) {
      title = title.slice(0, maxTitleLength);
    }

    this.setState(() => {
      return {
        title: title,
      };
    });
  }

  onDateChangeHandler(event) {
    this.setState(() => {
      return {
        createdAt: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addBook(this.state);
  }

  render() {
    const { title, createdAt, body, maxTitleLength } = this.state;
    const remainingChars = maxTitleLength - title.length;

    return (
      <form
        className="max-w-md mb-4 mx-auto p-4 bg-blue-100 shadow-md rounded-md focus:border-blue-500"
        onSubmit={this.onSubmitEventHandler}
      >
        <input
          type="text"
          value={title}
          onChange={this.onTitleChangeHandler}
          placeholder="Title"
          className="w-full mb-0.5 py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="text-sm text-gray-500 mb-3">
          Remaining characters: {remainingChars}
        </div>
        <input
          type="text"
          value={body}
          onChange={this.onBodyChangeHandler}
          placeholder="Description"
          className="w-full mb-4 py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AddBookForm;

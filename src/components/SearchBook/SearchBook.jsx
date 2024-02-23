import React from "react";

class SearchBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };
  }

  onSearchChangeHandler = (event) => {
    this.setState({ searchQuery: event.target.value }, () => {
      this.props.onSearchChange(this.state.searchQuery);
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchQuery}
          onSearch={this.onSearchChangeHandler}
          placeholder="Search books..."
        />
      </div>
    );
  }
}

export default SearchBook;

import React from 'react';
import { Search } from 'semantic-ui-react';
import Fuse from 'fuse.js';

export default class CityInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: this.props.value ? this.props.value : '',
    };
    this.fuse = new Fuse(this.props.results, { keys: ['title'] });

    this.onFilterInput = this.onFilterInput.bind(this);
    this.onResultSelect = this.onResultSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.results.length !== nextProps.results.length) {
      this.fuse = new Fuse(nextProps.results, { keys: ['title'] });
    }

    if (nextProps.value && this.state.filter !== nextProps.value) {
      this.setState({ filter: nextProps.value });
    }
  }

  onFilterInput(e, data) {
    this.setState({ filter: data.value });
  }

  onResultSelect(e, data) {
    this.setState({ filter: data.result.title });
    this.props.onResultSelect(e, data);
  }

  get results() {
    if (this.fuse && this.state.filter) {
      return this.fuse.search(this.state.filter);
    }

    return this.props.results;
  }

  render() {
    return (
      <Search
        id={this.props.id}
        value={this.state.filter}
        name={this.props.name}
        loading={this.props.loading}
        results={this.results}
        onSearchChange={this.onFilterInput}
        onResultSelect={this.onResultSelect}
      />
    );
  }
}

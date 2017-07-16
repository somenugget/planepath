import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let header = 'Find path ';

  if (state.city) {
    if (state.city.from) {
      header += ` from ${state.city.from.title}`;
    }

    if (state.city.to) {
      header += ` to ${state.city.to.title}`;
    }
  }

  return {
    children: header,
  };
};


const mapDispatchToProps = () => ({});

const SearchHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default SearchHeader;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import AssetDetails from "./AssetDetails";
import AssetDetailsSlice from "../../../redux/slices/AssetDetailsSlice/AssetDetailsSlice";

class AssetDetailsContainer extends Component {
  constructor(props) {
    super(props);

    props.fetch();
  }

  render() {

    const { data } = this.props;

    return (
      <AssetDetails
        data={data}
      />
    );
  }
}

AssetDetailsContainer.propTypes = {
  /** The data to display */
  data: PropTypes.object,
  /** Action for fetching data */
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: AssetDetailsSlice.Selectors.getData(state),
});

const mapDispatchToProps = {
  fetch: AssetDetailsSlice.Actions.fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetDetailsContainer);



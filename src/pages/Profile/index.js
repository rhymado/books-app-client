import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import store from "../../redux/store";

import "./Profile.css";

import withParams from "../../helper/withParams";
import withSearchParams from "../../helper/withSearchParams";
import { counterDown, counterUp } from "../../redux/actionCreator/counter";

class Profile extends React.Component {
  state = {
    counterChange: 0,
  };
  render() {
    const { params, searchParams, number, doCounterDown, doCounterUp } =
      this.props;
    // console.log(number);
    // return dengan <></>
    // return dengan Fragment
    return (
      <React.Fragment>
        <h1>Profile id {params.id}</h1>
        <main className="profile-content">
          <div className="profile-left"></div>
          <div className="profile-right"></div>
        </main>
        <footer>
          <p>nama = {searchParams.get("name")}</p>
          <p>lokasi = {searchParams.get("location")}</p>
          <p>counter = {number}</p>
          <input
            type="number"
            value={this.state.counterChange}
            onChange={(e) => {
              this.setState({
                counterChange: e.target.value,
              });
            }}
          />
          <div
            className="btn btn-large btn-primary mx-2"
            onClick={() => doCounterUp(this.state.counterChange)}
          >
            up
          </div>
          <div
            className="btn btn-large btn-secondary mx-2"
            onClick={() => doCounterDown()}
          >
            down
          </div>
          <Link to="/">
            <div className="btn btn-large btn-success">Home</div>
          </Link>
        </footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const {
    counter: { number },
  } = reduxState;
  return {
    number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doCounterUp: (num) => {
      dispatch(counterUp(parseInt(num)));
    },
    doCounterDown: () => {
      dispatch(counterDown());
    },
  };
};

// connect ()()
// 1. () => diisikan dengan enhancer
// 2. () => komponen yang akan disambungkan
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSearchParams(withParams(Profile)));

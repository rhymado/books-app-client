import React from "react";

import "./Profile.css";

import withParams from "../../helper/withParams";
import withSearchParams from "../../helper/withSearchParams";

class Profile extends React.Component {
  render() {
    const { params, searchParams } = this.props;
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
        </footer>
      </React.Fragment>
    );
  }
}

export default withSearchParams(withParams(Profile));

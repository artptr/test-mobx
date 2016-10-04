import React, { Component, PropTypes } from "react";
import { observer } from "mobx-react";

const Section = ({ form }) => {
  return (
    <form className="form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={form.$("email").value}
          onChange={form.$("email").sync} />
      </div>
    </form>
  );
};

Section.propTypes = {
  form: PropTypes.object.isRequired,
};

export default observer(Section);

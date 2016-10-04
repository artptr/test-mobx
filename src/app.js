import React, { Component } from "react";
import { render } from "react-dom";

import Store from "./store";
import Section from "./section";

const store = new Store();
render(
  <div className="container">
    <Section form={store.form} />
  </div>,
  document.getElementById("app"));

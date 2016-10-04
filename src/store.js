import MobxReactForm from "mobx-react-form";

class Store {
  constructor() {
    this.form = new MobxReactForm({
      fields: ["email"],
      values: {
        email: "test@example.com",
      }
    });
  }
}

export default Store;

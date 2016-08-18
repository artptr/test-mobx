import * as React from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

interface Item {
    text: String;
}

@observer
class App extends React.Component<{}, {}> {
    @observable
    items: Array<Item> = [];

    @observable
    input = "";

    handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.input = e.target.value;
    };

    handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.items.push({ text: this.input });
        this.input = "";
    };

    render() {
        return (
            <div>
                <ul>{this.items.map(item =>
                    <li>{item.text}</li>
                )}</ul>
                <form onSubmit={this.handleAdd}>
                    <input type="text" value={this.input} onChange={this.handleInput} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));

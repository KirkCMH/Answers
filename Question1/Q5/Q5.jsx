/** Can you explain the problem with the following code, and how to fix 
it. **/
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  /* PROBLEM
  Calling this.setState multiple times without a function form will not produce the expected result.

  The code will not increment the count by 3. Instead, it will only increment the count by 1 because this.state.count does not update immediately, and each setState call sees the same initial state.
   */

  /* WRONG */
  /*  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  } */

  /* Hance, it should fix as: */
  /* CORRECT */
  handleAddCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById("root"));

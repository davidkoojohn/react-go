### [State & 生命周期](https://doc.react-china.org/docs/state-and-lifecycle.html)

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

// update arg is object
this.setState({})
// update arg is function
this.setState(() => ({}))

/*
 * 上边的更新 state 的方法与小程序的更新 data 方法类似
 * 小程序更新date：
 * this.setData({ key: val })
 *
 * == React vs WxApp
 *
 * constructor 中的生命 state 与小程序中的 data 类似
 * React:
 * this.state = { key: value }
 * WxApp:
 * data: { key: value }
 */

```
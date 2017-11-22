### [事件处理](https://doc.react-china.org/docs/handling-events.html)

```
/*
 * 不能使用返回 false 的方式阻止默认行为
 * 你必须明确的使用 preventDefault
 * 
 */
// 传统的
<a href="#" onclick="console.log('The link was clicked.'); return false"> Click me </a>
// React
handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

/*
 * 不需要使用 addEventListener 为一个已创建的 DOM 元素添加监听器。
 * 你仅仅需要在这个元素初始渲染的时候提供一个监听器。
 * JSX 回调函数中，类的方法默认是不会绑定 this 的
 * onClick={(e) => this.handleClick(e)} 
 * 传递额外的参数
 * onClick={(e) => this.deleteRow(id, e)}
 * onClick={this.deleteRow.bind(this, id)}
 */
{/* Pass params via bind() method. */}
onClick={this.preventPop.bind(this,this.state.name)}
preventPop(name, e){    //事件对象e要放在最后
  e.preventDefault();
  alert(name);
}

```









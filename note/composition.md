### [组合 vs 继承](https://doc.react-china.org/docs/composition-vs-inheritance.html)

> **React 具有强大的组合模型，我们建议使用组合而不是继承来复用组件之间的代码。**

```
// 建议这些组件使用 children 属性将子元素直接传递到输出。
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

return (
  <FancyBorder color="blue">
    <h1 className="Dialog-title">
      Welcome
    </h1>
    <p className="Dialog-message">
      Thank you for visiting our spacecraft!
    </p>
  </FancyBorder>
);

// 由于 FancyBorder 在一个 <div> 内渲染了 {props.children}，所以被传递的所有元素都会出现在最终输出中。

// 虽然不太常见，但有时你可能需要在组件中有多个入口，这种情况下你可以使用自己约定的属性而不是 children：
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

return (
  <SplitPane
    left={
      <Contacts />
    }
    right={
      <Chat />
    } />
);

```
> 属性和组合为你提供了以清晰和安全的方式自定义组件的样式和行为所需的所有灵活性。请记住，组件可以接受任意元素，包括基本数据类型、React 元素或函数。




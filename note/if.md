### [条件渲染](https://doc.react-china.org/docs/conditional-rendering.html)

```
retutn (
  <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
      </h2>
    }
  </div>
)

/*
 * 在 JavaScript 中，
 * true && expression 总是返回 expression，
 * false && expression 总是返回 false。
 * 因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过
 */

// condition ? true : false。
```
```
// 阻止组件渲染

if (!props.warn) {
  return null;
}

return (
  <div className="warning">
    Warning!
  </div>
);

```





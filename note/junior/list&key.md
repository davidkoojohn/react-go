### 列表 & Keys


```
// map function
<ul>
  [].map((val, index) => ({ <li key={ val.toString() }>{ val }</li> }))
</ul>
```

> Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。
> 因此你应当给数组中的每一个元素赋予一个确定的标识。
```
<li key={todo.id}>
  {todo.text}
</li>

<li key={index}> // 不推荐
  {todo.text}
</li>

// 元素的key只有在它和它的兄弟节点对比时才有意义。
// 元素的key在他的兄弟元素之间应该唯一
// 不能读出props.key
// JSX允许在大括号中嵌入任何表达式，所以我们可以在map()中这样使用：
return (
  <ul>
    {numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />
    )}
  </ul>
);

```





### [状态提升](https://doc.react-china.org/docs/lifting-state-up.html)


* React在DOM原生组件<input>上调用指定的onChange函数。在本例中，指的是TemperatureInput组件上的handleChange函数。
* TemperatureInput组件的handleChange函数会在值发生变化时调用this.props.onTemperatureChange()函数。这些props属性，像onTemperatureChange都是由父组件Calculator提供的。
* 当最开始渲染时，Calculator组件把内部的handleCelsiusChange方法指定给摄氏输入组件TemperatureInput的onTemperatureChange方法，并且把handleFahrenheitChange方法指定给华氏输入组件TemperatureInput的onTemperatureChange。两个Calculator内部的方法都会在相应输入框被编辑时被调用。
* 在这些方法内部，Calculator组件会让React使用编辑输入的新值和当前输入框的温标来调用this.setState()方法来重渲染自身。
* React会调用Calculator组件的render方法来识别UI界面的样子。基于当前温度和温标，两个输入框的值会被重新计算。温度转换就是在这里被执行的。
* 接着React会使用Calculator指定的新props来分别调用TemperatureInput组件.React也会识别出子组件的UI界面。
* React DOM 会更新DOM来匹配对应的值。我们编辑的输入框获取新值，而另一个输入框则更新经过转换的温度值。






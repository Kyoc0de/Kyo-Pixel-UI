import React from 'react';

//组件
import Button, {ButtonSize, ButtonType} from "./components/Button/button";


function App() {
  return (
    <div className="App">
      <Button>Hello</Button>
        <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Large} disabled={true}>Hello</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" size={ButtonSize.Small}>Hello</Button>
    </div>
  );
}

export default App;

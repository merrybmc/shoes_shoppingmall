import { useState } from 'react';
import './App.css';

import Router from './router/Router';

function App() {
  const [testValue, setTestValue] = useState('test');

  // localStorage 데이터 저장
  localStorage.setItem('key', 'value');

  // localStorage 데이터 가져오기
  let data = localStorage.getItem('key');
  console.log(data);

  // localStorage 데이터 삭제
  localStorage.removeItem('key');

  // localStorage 수정은 불가능 데이터를 가져온 후 다시 저장

  // 배열/객체를 저장하려면 JSON 변경
  let obj = { name: 'kim' };
  localStorage.setItem('objData', obj); // 불가능
  localStorage.setItem('objData2', JSON.stringify(obj)); // 가능

  let data2 = localStorage.getItem('objData2'); // JSON 형태라 배열/객체 사용 불가능
  data2 = localStorage.getItem(JSON.parse(data2).name); // JSON 형태를 원래대로 변환
  console.log(data2);

  return (
    <div className='App'>
      {/* <Context.Provider value={{ testValue }}> */}
      <Router />
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;

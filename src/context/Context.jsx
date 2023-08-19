import React, { createContext } from 'react';

export function Context() {
  // index부터 하위 모든 컴포넌트가 전부 재렌더링 됨

  //Context 보관함 생성
  let ContextData = createContext();

  return <div>Context</div>;
}

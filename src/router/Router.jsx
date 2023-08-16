import React from 'react';
import { Routes, Route, Outlet } from 'react-router';
import Detail from '../components/Detail';
import Mainpage from '../pages/Mainpage';
import About from '../components/About';
import Member from '../components/Member';
import Location from '../components/Location';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      {/* /: URL Parameter */}
      <Route path='/detail/:id' element={<Detail />} />

      {/* Route로 설정된 페이지 외의 모든 페이지 */}
      <Route path='*' element={<div>잘못된 접근입니다.</div>} />

      {/* nested routes */}
      <Route path='/about' element={<About />}>
        <Route path='member' element={<Member />} />
        <Route path='location' element={<Location />} />
      </Route>

      {/* 💩 bad case, nested routes ,Outlet 사용 */}
      {/* <Route path='/about/member' element={<Member />} />
      <Route path='/about/location' element={<Location />} /> */}

      {/* 과제 */}
      <Route
        path='/event'
        element={
          <>
            <h3>오늘의 이벤트</h3> <Outlet />
          </>
        }
      >
        <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
        <Route path='two' element={<p>생일긴염 쿠폰받기</p>} />
      </Route>
    </Routes>
  );
}

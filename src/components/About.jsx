import React from 'react';
import { Outlet } from 'react-router';

export default function About() {
  return (
    <>
      <h4>회사 정보임</h4>
      <Outlet />
    </>
  );
}

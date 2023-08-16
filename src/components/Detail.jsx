import React, { useEffect, useState } from 'react';
import { data } from '../data.js';
import { useParams, useNavigate } from 'react-router';
import { Nav } from 'react-bootstrap';

export default function Detail() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(false);
  const [tab, setTab] = useState(0);

  // useEffect는 html 렌더링이 끝난 후 동작한다.
  // mount시 실행
  useEffect(() => {
    setTimeout(() => {
      setTimer(!timer);
    }, 2000);
  }, []);

  // 특정 값이 update될 때 실행
  useEffect(() => {
    console.log('안녕');
  }, [count]);

  // mount, update될 때 실행
  useEffect(() => {
    console.log('안녕!!!');
  });

  // return -> unmount시 실행
  useEffect(() => {
    let myTimer = setTimeout(() => {
      console.log('할인 이벤트 끝');
    }, 2500);
    return () => {
      clearTimeout(myTimer);
    };
  }, []);

  const { id } = useParams();
  return (
    <div className='container'>
      {timer || <div className='alert alert-warning'>2초이내 구매시 할인</div>}
      <div className='row'>
        <div className='col-md-4'>
          <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width='80%' alt='' />
          <h4>{data[id].title}</h4>
          <p>{data[id].content}</p>
          <p>{data[id].price}원</p>
          <button className='btn btn-danger' onClick={() => setCount(count + 1)}>
            주문하기
          </button>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link eventKey='link0' onClick={() => setTab(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link1' onClick={() => setTab(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link2' onClick={() => setTab(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 0 && <div>내용0</div>}
      {tab === 1 && <div>내용1</div>}
      {tab === 2 && <div>내용2</div>}
    </div>
  );
}

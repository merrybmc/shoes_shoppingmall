import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../store/store';

export default function Cart() {
  let { user } = useSelector((state) => state);
  let { user2 } = useSelector((state) => state);
  let { basket } = useSelector((state) => state);

  let dispatch = useDispatch();

  return (
    <>
      <h6>
        {user2.name} age {user2.age}
      </h6>
      <button
        onClick={() => {
          dispatch(increase(100));
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {basket?.map((data) => (
            <tr key={data.id}>
              <td>{data.id + 1}</td>
              <td>{data.name}</td>
              <td>{data.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

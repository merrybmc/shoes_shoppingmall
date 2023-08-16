import React, { useEffect } from 'react';
import { data } from '../data.js';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Card() {
  const navigate = useNavigate();
  const [shoes] = useState(data);
  const [moreBtn, setMoreBtn] = useState(false);
  const [moreData, setMoreData] = useState([]);
  const [dataNum, setDataNum] = useState(2);

  useEffect(() => {
    if (dataNum === 4) setMoreBtn(!moreBtn);
  }, [dataNum]);

  const handleData = () => {
    axios
      .get(`https://codingapple1.github.io/shop/data${dataNum}.json`)
      .then(({ data }) => setMoreData([...moreData, ...data]));
    setDataNum(dataNum + 1);
  };

  return (
    <div className='container'>
      <div className='row'>
        {shoes?.map((data) => (
          <div key={data.id} onClick={() => navigate(`detail/${data.id}`)} className='col-md-4'>
            <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width='80%' alt='' />
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        ))}
      </div>

      <div className='row'>
        {moreData?.map((data) => (
          <div key={data.id} onClick={() => navigate(`detail/${data.id}`)} className='col-md-4'>
            <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width='80%' alt='' />
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
      {moreBtn || (
        <button
          onClick={() => {
            handleData();
          }}
        >
          더보기
        </button>
      )}
    </div>
  );
}

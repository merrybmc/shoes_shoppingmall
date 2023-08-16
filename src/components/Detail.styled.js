import styled from 'styled-components';

export const YellowBtn = styled.button`
  background-color: yellow;
  color: black;
  padding: 10px;
`;

// 재사용성이 높을 때 : props 사용
export const YellowBtn1 = styled.button`
  background-color: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

export const Box = styled.div`
  background-color: grey;
  padding: 20px;
`;

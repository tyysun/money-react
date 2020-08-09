import styled from 'styled-components';
import React, { useRef, useState } from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span { 
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  }
`;
// 受控模式
// const NoteSection:React.FC = ()=>{
//   const [note,setNote] = useState('')
//   return (
//     <Wrapper>
//       <label>
//         <span>备注</span>
//         <input type="text" placeholder="在这里添加备注" value={note}
//           onChange={(e) => setNote(e.target.value)}
//         />
//       </label>
//     </Wrapper>
//   )
// }
// 非受控模式
const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlue = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlue}
               onChange={(e) => setNote(e.target.value)}
        />
      </label>
    </Wrapper>
  );
};

export { NoteSection };
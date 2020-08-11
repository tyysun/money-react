import styled from 'styled-components';
import React, { useState } from 'react';

const Wrapper = styled.section`
  > ul {
    display: flex;
    font-size: 24px;
     background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        height: 3px;
        background: #333;
        display: block;
        position: absolute;
        width: 100%;
        bottom: 0;
      }
    }
    
  }
`;

type Props = {
  value:'-'|'+';
  onChange:(value:'-'|'+')=>void
}

const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value
  const categoryMap = {
    '-': '支出',
    '+': '收入'
  };
  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(c =>
            <li className={category === c ? 'selected' : ''}
                key={c}
                onClick={() => {props.onChange(c);}}>{categoryMap[c]}
            </li>
          )
        }

      </ul>
    </Wrapper>
  );
};

export { CategorySection };
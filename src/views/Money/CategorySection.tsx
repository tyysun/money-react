import styled from 'styled-components';

const CategorySection = styled.section`
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
export { CategorySection };
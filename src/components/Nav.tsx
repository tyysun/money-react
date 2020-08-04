import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow:  0 0 3px rgba(0,0,0,0.25);
  background: #fff;
  > ul {
    display: flex;
    > li {
      width:  33.33% ;
      text-align: center;
      padding: 4px 0;
      > a {
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: red;
          .icon{
            fill: red;
          }
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected"><Icon name="tag"/>标签页</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected"><Icon name="money"/>记账页</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected"><Icon name="chart"/>统计页</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
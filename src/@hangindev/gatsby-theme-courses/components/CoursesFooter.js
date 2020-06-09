import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  background-color: '#EDEDED';
  li {
    display: inline;
  }
`;

const Wrapper = styled.nav`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: white;
`;

function CoursesFooter() {
  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <a
        href="https://about.me/henriquesilva"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://about.me/henriquesilva
        <Wrapper>
          <img src="../img/header.png" alt="header" />
        </Wrapper>
      </a>
      <hr />
      <footer style={{ textAlign: 'left' }}>
        <List>
          <ul>
            <li>©2020 by Henrique Silva.</li>
          </ul>
        </List>
      </footer>
    </div>
  );
}

export default CoursesFooter;

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

function CoursesFooter() {
  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <hr />
      <footer style={{ textAlign: 'left' }}>
        <List>
          <ul>
            <li>©2020 by Henrique Silva | </li>
            <li>
              <a
                href="https://about.me/henriquesilva"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Me
              </a>
            </li>
          </ul>
        </List>
      </footer>
    </div>
  );
}

export default CoursesFooter;

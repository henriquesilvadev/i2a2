import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 0.2rem;
    span {
      &:first-child {
        display: inline-block;
        width: 30px;
        text-align: center;
      }
    }
  }
`;

const Wrapper = styled.nav`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: white;
`;

function CoursesHeader() {
  return (
    <header>
      <Wrapper>
        <img src="../img/header.png" alt="header" />
      </Wrapper>
      <a
        href="https://www.linkedin.com/in/henriquesilvadev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../img/linkedin.png" alt="linkedin" width="300px" />
      </a>

      <List>
        <li>
          <span role="img" aria-label="memo">
            <img src="img/annotations-files.png" alt="annotations" />
          </span>{' '}
          <a
            href="https://drive.google.com/drive/folders/1ZK9CvqG3ovd8nIdS2ZqXij2c0W9xukdf?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Annotations
          </a>
          🇺🇸
        </li>
        <li>
          <span role="img" aria-label="video Camera">
            <img src="img/youtube.png" alt="youtube" />
          </span>{' '}
          <a
            href="https://www.youtube.com/channel/UCSi18AMnRETZoNSQrOwwaOw"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Youtube Channel
          </a>
          🇧🇷 🇺🇸
        </li>
        <li>
          <span role="img" aria-label="microfone">
            <img src="img/podcast.png" alt="podcast" />
          </span>{' '}
          <a
            href="https://soundcloud.com/henrique-silva-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Podcast RSS
          </a>
          🇧🇷
        </li>
        <li>
          <span role="img" aria-label="chart increasing">
            <img src="img/octocat.png" alt="octacat" />
          </span>{' '}
          <a
            href="https://github.com/henriquesilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Code Repository
          </a>
          🇺🇸
        </li>
        <li>
          <span role="img" aria-label="chart increasing">
            <img src="img/kaggle.png" alt="kaggle" />
          </span>{' '}
          <a
            href="https://www.kaggle.com/henriquesilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Kaggle Profile
          </a>
          🇺🇸
        </li>
        <li>
          <span role="img" aria-label="heart">
            <img src="img/data-science.png" alt="data-science" />
          </span>{' '}
          <a
            href="https://observablehq.com/@henriquesilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Data Analytics Notebooks
          </a>
          🇺🇸
        </li>
        <li>
          <span role="img" aria-label="heart">
            <img src="img/writing.png" alt="writing" />
          </span>{' '}
          <a
            href="https://medium.com/@henriquesilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Personal Blog
          </a>
          🇺🇸
        </li>
      </List>
    </header>
  );
}

export default CoursesHeader;

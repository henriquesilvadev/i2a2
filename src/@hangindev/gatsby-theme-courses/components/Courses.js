import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import SEO from './SEO';
import CoursesList from './CoursesList';
import CoursesHeader from './CoursesHeader';
import CoursesFooter from './CoursesFooter';

const Wrapper = styled.div`
  margin-left: -15px;
`;

function Courses() {
  return (
    <Layout>
      <SEO title="Courses" />
      <Wrapper>
        <CoursesHeader />
        <h2>Study Modules</h2>
        <CoursesList />
        <CoursesFooter />
      </Wrapper>
    </Layout>
  );
}
export default Courses;

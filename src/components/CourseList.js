import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>Uma Ampla Seleção De Cursos</h2>
          <p>Escolha entre 204.000 cursos em vídeo online com novas adições publicadas todos os meses.</p>
        </div>

        <Tabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList
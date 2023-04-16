import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Route, useSearchParams, useLocation, Routes, useParams } from "react-router-dom";


import { ProjectSlider } from "components/sliders/ProjectSlider";

import { Project } from "./Project";

export const Projects = () => {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<ProjectSlider showNumProjects={16} />} />
        <Route path="/:project" element={<Project/>} />     
      </Routes>
    </Container>
  );
}


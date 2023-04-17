import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Route, useSearchParams, useLocation, Routes, useParams } from "react-router-dom";


import { SkillSlider } from "components/sliders/SkillSlider";

import { Skill } from "./Skill";

export const Skills = () => {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<SkillSlider showNumSkills={24} />} />
        <Route path="/:skill" element={<Skill/>} />     
      </Routes>
    </Container>
  );
}


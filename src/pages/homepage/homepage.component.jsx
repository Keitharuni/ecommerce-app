import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles.js";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;

import React from "react";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";
import { InfoSection, Pricing } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;

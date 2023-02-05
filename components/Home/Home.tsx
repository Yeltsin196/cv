import React from "react";
import { AvailableGlobally } from "./AvailableGlobally";
import { HowCanYouHelp } from "./HowCanYouHelp";
import { WeHelping } from "./Information";
import { MainContainerHome } from "./MainContainerHome";
import { SwiperInfo } from "./SwiperInfo";
import { WhereWe } from "./WhereWe";

export const HomeComponent = () => {
  return (
    <div>
      <MainContainerHome></MainContainerHome>
      <SwiperInfo></SwiperInfo>
      <WeHelping></WeHelping>
      <HowCanYouHelp></HowCanYouHelp>
      <WhereWe></WhereWe>
      <AvailableGlobally></AvailableGlobally>
    </div>
  );
};

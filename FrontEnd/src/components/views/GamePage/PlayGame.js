import React, { useState } from "react";
import { IntrodialogueData } from "../../scripts/Scripts";
import Header from "../Header/Header.js";
import RoleSelect from "../../RoleSelect.js";
import FriendsRTC from "../Footer/FriendsRTC";
import { GameComp } from "./GamePlay";
import { GameComp_1_11, GameComp_1_12, GameComp_1_13, GameComp_2_11, GameComp_2_12 } from './GameComps/GameComps';

const GamePlayPage = () => {
  const [isState, setIsState] = useState(0);
  const [isIndex, setIsIndex] = useState(0);
  const stageLimits = [16, 11, 12, 11, 7, 14];
  const handleNext = () => {
    if (isIndex < stageLimits[isState]) {
      setIsIndex(isIndex + 1);
    } else {
      setIsIndex(0);
      setIsState(isState + 1);
    }
  };
  const renderComponent = (isState, isIndex) => {
    const types = ["intro", "stage1", "stage2", "stage3", "stage4", "outro"];
    return <GameComp type={types[isState]} index={isIndex} />;
  };

  // const renderComponent = (isState, isIndex) => {
  //   switch (isState) {
  //     case 0:
  //       console.log(1);
  //       return <GameComp type="intro" index={isIndex} />;
  //     case 1:
  //       console.log(2);
  //       console.log(isIndex);
  //       return <GameComp type="stage1" index={isIndex} />;
  //     case 2:
  //       return <GameComp type="stage2" index={isIndex} />;
  //     case 3:
  //       return <GameComp type="stage3" index={isIndex} />;
  //     case 4:
  //       return <GameComp type="stage4" index={isIndex} />;
  //     case 5:
  //       return <GameComp type="outro" index={isIndex} />;
  //     default:
  //       return null;
  //   }
  // };

  const divStyle = {
    margin: "0",
    padding: "0",
    height: "100vh",
    overflow: "hidden",
  };
  const isStage = 2;
  const isIndex = 12;

  let componentToRender;

  switch (isStage) {
    case 0: // 이게 스테이지 구분 (0-1)
      switch (isIndex) { // 이게 인덱스 구분
        case 1:
          componentToRender = null;
          break;
        case 2:
          componentToRender = null;
          break;
        case 3:
          componentToRender = null;
          break;
      }
      break;
    case 1: // 이게 스테이지 구분 (1-1)
      switch (isIndex) { // 이게 인덱스 구분
        case 1:
          componentToRender = null;
          break;
        case 2:
          componentToRender = null;
          break;
        case 3:
          componentToRender = null;
          break;
        case 11:
          componentToRender = <GameComp_1_11 />;
          break;
        case 12:
          componentToRender = <GameComp_1_12 />;
          break;
        case 13:
          componentToRender = <GameComp_1_13 />;
          break;
      }
      break;
    case 2: // 이게 스테이지 구분 (2-1)
      switch (isIndex) { // 이게 인덱스 구분
        case 1:
          componentToRender = null;
          break;
        case 2:
          componentToRender = null;
          break;
        case 3:
          componentToRender = null;
          break;
        case 11:
          componentToRender = <GameComp_2_11 />;
          break;
        case 12:
          componentToRender = <GameComp_2_12 />;
          break;
        case 13:
          componentToRender = null;
          break;
      }
      break;
  }

  const bodyStyle = {
    width: "100%",
    height: "60%",
    backgroundColor: "#DDE5B6",
  };

  return (
    <div style={divStyle}>
      <Header />
      <div style={bodyStyle}>{renderComponent(isState, isIndex)}</div>
      <button onClick={handleNext}>Next</button>
      {isIndex}
    </div>
      <div style={bodyStyle}>
        {componentToRender}
      </div>
  );
};

export default GamePlayPage;

  
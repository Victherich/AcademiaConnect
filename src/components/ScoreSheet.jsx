import React, { useState } from 'react'
import EnglishLanguageScores from './EnglishlanguageScores'
import "../CSS/ScoreSheetTabs.css"
import MathsScores from './MathsScores'
import EconomicsScores from './EconomicsScores'
import OverallScores from './OverAllScores'

const ScoreSheet = () => {
    const [scoreSwitch, setScoreSwitch]=useState(0)
  return (
    <div>
      <div className='ScoreSheetTabs'>
        <p onClick={()=>setScoreSwitch(0)} className={scoreSwitch===0?"ScoreSheetTabsMenuA":"ScoreSheetTabsMenu"}>English</p>
        <p onClick={()=>setScoreSwitch(1)} className={scoreSwitch===1?"ScoreSheetTabsMenuA":"ScoreSheetTabsMenu"}>Maths</p>
        <p onClick={()=>setScoreSwitch(2)} className={scoreSwitch===2?"ScoreSheetTabsMenuA":"ScoreSheetTabsMenu"}>Economics</p>
        <p onClick={()=>setScoreSwitch(3)} className={scoreSwitch===3?"ScoreSheetTabsMenuA":"ScoreSheetTabsMenu"}>Over All Scores</p>
      </div>
      <div className='ScoreSheetBody'>
        {scoreSwitch===0&&<EnglishLanguageScores/>}
        {scoreSwitch===1&&<MathsScores/>}
        {scoreSwitch===2&&<EconomicsScores/>}
        {scoreSwitch===3&&<OverallScores/>}
        
      </div>

    </div>
  )
}

export default ScoreSheet

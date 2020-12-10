import React, { useState } from "react";
function Mapp() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
     const [ques, setQues]= useState(0);
     const [showScore,setShowScore]= useState(false);
     const [score,setScore]= useState(0);
    //  const [prev, setPrev]= useState(score);
   
     const changeQues = (isCorrect)=>{
      if(isCorrect){
        setScore(score+1);
      }      
      if(ques+1<questions.length){
          setQues(ques+1);
        }else{
            setShowScore(true);
        
        }
  }
  const Change= ()=>{
      setShowScore(false);
      setQues(0);
      setScore(0)
  }
  
  return (
      <div className="mapp">

    {showScore ? (
        <div className="score-section"> you scored {score} of {questions.length}
        <button on onClick={()=>{Change()}}>Reset </button>
        {/* <span> {prev}</span> */}
        {/* <button onclick={()=>{setPrev(score)}}>set previous score </button> */}
        </div>
    ):(<>
      <div className="question-section">
        <div className="question-count">
          <span>Question {ques+1} </span>/ {questions.length}
        </div>
        <div className="question-name">{questions[ques].questionText}</div>
      </div>
      <div className="answer-section">
        {questions[ques].answerOptions.map((ans, index) => {
          return <button key={index} onClick={()=>changeQues(ans.isCorrect)}> {ans.answerText}</button>;
        })}
      </div>
      </>)}
    </div>
  );
}

export default Mapp;

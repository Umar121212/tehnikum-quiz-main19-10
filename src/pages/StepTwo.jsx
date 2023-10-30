import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { TextAnswerOption } from "../components/TextAnswerOption";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState()

  const answersData = [
    {
      id: 'variant-1',
      textAnswer: 'Ваш ответ 1'
    },
    {
      id: 'variant-2',
      textAnswer: 'Ваш ответ 2'
    },
    {
      id: 'variant-3',
      textAnswer: 'Ваш ответ 3'
    },
    {
      id: 'variant-4',
      textAnswer: 'Ваш ответ 4'
    }
  ]



  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
        <ProgressBar/>
        <div className="question">
          <h2>1. Занимательный вопрос</h2>
          <ul className="variants">
            {
              answersData.map(answer => (
                <TextAnswerOption
                key={answer.id}
                id={answer.id}
                textAnswer={answer.textAnswer}
                isAnswerChecked={answer.id === selectedAnswerId}
                onClick={() => setSelectedAnswerId(answer.id)}
                />
              ))
            }
          </ul>
          <LinkButton
              path="/step-two"
              buttonText="Далее" 
              type="submit" 
              isDisabled={true} 
            />
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepTwo;

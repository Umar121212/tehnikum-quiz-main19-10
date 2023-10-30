import React, { useEffect, useState } from "react";
import { AppInput } from "../components/AppInput";
/* import { AppButton } from "../components/AppButton"; */
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");

  const [answerError, setAnswerError] = useState(false);

  useEffect(() => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  }, [answerValue]);

  const isNextButtondisabled = answerError;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
          <ProgressBar/>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <AppInput
              inputLabel="Ваш ответ"
              isRequired={true}
              type="text"
              inputName="username"
              inputId="username"
              inputPlaceholder="Ваш ответ"
              inputValue={answerValue}
              onInputChange={(e) => setAnswerValue(e.target.value)}
              isError={answerError}
            />
            <LinkButton
              path="/step-two"
              buttonText="Далее" 
              type="submit" 
              isDisabled={isNextButtondisabled} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;

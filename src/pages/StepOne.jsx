import React, { useEffect, useState } from "react";
import { AppInput } from "../components/AppInput";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");

  const [answerError, setAnswerError] = useState(false);

  useEffect(() => {
    if (!answerValue) {
      setAnswerError(true)
    } else {
      setAnswerError(false)
    }
  }, [answerValue])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description"
                >Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <AppInput
              inputLabel='Ваш ответ'
              isRequired={true}
              type='text'
              inputName='username'
              inputId='username'
              inputPlaceholder='Ваш ответ'
              /* errorText='Введите номер в правильном формате например' */
              inputValue={answerValue}
              onInputChange={(e) => setAnswerValue(e.target.value)}
              isError={answerError}
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <button disabled id="next-btn">Далее</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;

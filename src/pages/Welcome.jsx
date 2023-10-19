import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("")
  const [phoneNumberValue, setPhoneNumberValue] = useState("")

  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  useEffect(() => {
    if (!nameValue) {
      setNameError(true)
    } else {
      setNameError(false)
    }
  }, [nameValue])

  useEffect(() => {
    if (!phoneNumberValue) {
      setPhoneError(true)
    } else {
      setPhoneError(false)
    }
  }, [phoneNumberValue]) 

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <Heading text="Добро пожаловать в квиз от лучшего учебного центра" />
            <form className="welcome__form">
              <AppInput
                inputLabel='Ваше имя'
                isRequired={true}
                type='text'
                inputName='username'
                inputId='username'
                inputPlaceholder='Ваш ответ'
                errorText='Введите номер в правильном формате например'
                inputValue={nameValue}
                onInputChange={(e) => setNameValue(e.target.value)}
                isError={nameError}
              />
              <AppInput
                inputLabel='Ваш номер'
                isRequired={true}
                type='tel'
                inputName='phone'
                inputId='phone'
                inputPlaceholder='+998 9- --- -- --'
                errorText='Введите номер в правильном формате'
                inputValue={phoneNumberValue}
                onInputChange={(e) => setPhoneNumberValue(e.target.value)}
                isError={phoneError}
              />
              <AppButton buttonText="Далее" type="submit" isDisabled={true} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

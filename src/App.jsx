import { useEffect, useState } from "react";

import { Map } from "./components/Map.jsx";
import { Header } from "./components/Header.jsx";
import { Form } from "./components/Form.jsx";
import { LoadSpinner } from "./components/LoadSpinner.jsx";
import { useUser } from "@clerk/clerk-react";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();

  const onSubmitFormData = (fromAddress, toAddress, tariffType, payType) => {
    if (isLoaded === false || isSignedIn === false) {
      alert("Войдите в систему!");
      return;
    }

    if (fromAddress && toAddress) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        setTimeout(() => {
          alert(
            `Ваша заявка принята! Ждите!\n\nПользователь: ${user.username}\nОткуда: ${fromAddress}\nКуда: ${toAddress}\nТариф: ${tariffType}\nОплата: ${payType}`,
          );
        }, 1000);
      }, 5000);
    } else {
      alert("Неправильный адрес или пустое!");
    }
  };

  return (
    <div className="app">
      {isLoading && <LoadSpinner />}

      <Header />

      <div className="container">
        <div className="inner pt:40px flex flex:row jc:space-between ai:center">
          <div className="form-container">
            <p className="f:24px f:heavy mb:15px">Заказать такси</p>

            <Form onSubmitFormData={onSubmitFormData} />
          </div>

          <div className="map-container">
            <p className="f:24px f:heavy mb:15px">Карта</p>

            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

import { InputText } from "./InputText.jsx";
import { useState } from "react";

export const Form = ({ onSubmitFormData }) => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");

  const [tariffIndex, setTariffIndex] = useState(0);
  const [payTypeIndex, setPayTypeIndex] = useState(0);

  const tariffTypes = [
    {
      title: "Эконом",
      imageUrl: "/эконом.png",
    },
    {
      title: "Комфорт",
      imageUrl: "/комфорт.png",
    },

    {
      title: "Бизнес",
      imageUrl: "/бизнес.png",
    },
    {
      title: "Минивэн",
      imageUrl: "/Минивэн.png",
    },
  ];

  const payTypes = [
    {
      title: "MasterCard",
      imageUrl: "/Mastercard-Logo.png",
    },
    {
      title: "Visa",
      imageUrl: "/Visa_Inc.-Logo.wine.png",
    },
    {
      title: "Apple Pay",
      imageUrl: "/Apple_Pay_logo.svg.png",
    },
    {
      title: "Наличными",
      imageUrl: "/cash-logo-icon-design-vector-illustration_586739-3611.avif",
    },
  ];

  return (
    <div className="w:400px h:700px p:20px r:10px border:2px|solid|#63636321 flex flex:col jc:space-between">
      <div className="inputs">
        <div className="mb:15px">
          <InputText
            value={fromAddress}
            setValue={setFromAddress}
            placeholderText="Откуда"
          />
        </div>

        <div className="mb:15px">
          <InputText
            value={toAddress}
            setValue={setToAddress}
            placeholderText="Куда"
          />
        </div>
      </div>

      <div className="tariff-types-container">
        <p className="mb:15px f:bold f:#000">Выберите тариф:</p>

        <div className="tariff-type-items flex flex:row gap:20px ai:center flex:wrap">
          {tariffTypes.map((tariffType, index) => (
            <div
              key={tariffType.title}
              className={
                "item w:160px h:120px flex flex:col p:20px jc:space-between ai:center r:7px border:2px|solid|#63636321 border:2px|solid|#ffa300.active cursor:pointer" +
                (index === tariffIndex ? " active" : "")
              }
              onClick={() => setTariffIndex(index)}
            >
              <img
                src={tariffType.imageUrl}
                alt="tariff image"
                className="h:50px w:auto"
              />
              <p
                className={
                  "mt:10px f:semibold f:#636363b3 f:14px f:#ffa300.active" +
                  (index === tariffIndex ? " active" : "")
                }
              >
                {tariffType.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pay-types-container">
        <p className="mb:15px f:bold f:#000">Метод оплаты:</p>

        <div className="method-pay flex flex:row gap:12px">
          {payTypes.map((pay, index) => (
            <div
              key={pay.title}
              className={
                "w:75px h:45px overflow:hidden flex jc:center ai:center r:7px border:2px|solid|#63636321 border:2px|solid|#ffa300.active cursor:pointer" +
                (index === payTypeIndex ? " active" : "")
              }
              onClick={() => setPayTypeIndex(index)}
            >
              <img
                src={pay.imageUrl}
                alt="pay type"
                className="w:40px h:auto"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          onSubmitFormData(
            fromAddress,
            toAddress,
            tariffTypes[tariffIndex].title,
            payTypes[payTypeIndex].title,
          );

          setToAddress("");
          setFromAddress("");
          setTariffIndex(0);
          setPayTypeIndex(0);
        }}
        className="border:none bg:#ffa300 f:#fff w:full f:16px p:20px uppercase f:bold r:10px cursor:pointer bg:#cc8200:hover"
      >
        Отправить заказ
      </button>
    </div>
  );
};

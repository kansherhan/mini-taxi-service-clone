import { FaSpinner } from "react-icons/fa";

export const LoadSpinner = () => {
  return (
    <div className="fixed flex flex:col jc:center ai:center top:0 left:0 w:full h:100vh z-index:1000 bg:#ffffff">
      <FaSpinner
        size={36}
        color="#ffa300"
        className="@rotate|1s|infinite"
      />

      <p className="mt:20px f:semibold f:14px f:#636363b3">
        Загрузка... Пожалуйста подождите!
      </p>
    </div>
  );
};

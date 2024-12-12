export const InputText = ({ value, setValue, placeholderText }) => {
  return (
    <div className="input-text">
      <p className="mb:7px f:bold f:#636363b3">{placeholderText}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder=""
        className="w:full f:16px f:semibold f:#636363 r:7px border:2px|solid|#63636321 outline:none p:10px"
      />
    </div>
  );
};

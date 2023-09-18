const Screen = ({ monitorVal, valHolder }) => {
  return (
    <>
      <div id="valueHolder">{valHolder}</div>
      <div id="calculator__screen" className="screen__component">
        {monitorVal}
      </div>
    </>
  );
};

export default Screen;

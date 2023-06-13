export const Logo = () => {
  const classConstructor = () => {
    // if (found) {
    //   return " logo-top";
    // }

    return "";
  };

  return (
    <div className={"logo-container" + classConstructor()}>
      <a className="logo-ref" href="#" target="_blank">
        <img
          className={"logo" + classConstructor()}
          src=".\src\assets\icons\logo.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};

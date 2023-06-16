import useSearchline from "../../hooks/components/useSearchline";

export const Searchline = () => {
  const {
    t,
    setInput,
    memoized,
    input,
    loading,
    selected,
    buttonRenderer,
  } = useSearchline();

  return (
    <>
      <div className="search-container">
        <input
          onChange={(input) => {
            setInput(input.target.value);
            memoized(input.target.value);
          }}
          value={input}
          className="search-input"
          placeholder={t("search-placeholder")!}
        />
        <img
          className={`loading ${loading ? "" : "hidden"}`}
          src=".\src\assets\icons\loading.svg"
          alt="loading"
        />
        <img
          className={`loading error-x ${
            !loading && !selected.found && selected.nickname
              ? ""
              : "hidden"
          }`}
          src=".\src\assets\icons\x.svg"
          alt="icon"
        />
      </div>

      {buttonRenderer(selected)}
    </>
  );
};

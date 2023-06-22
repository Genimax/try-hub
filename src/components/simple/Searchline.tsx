import useSearchline from "../../hooks/components/useSearchline";

import loadPNG from "../../assets/icons/loading.svg";
import errorPNG from "../../assets/icons/x.svg";

export const Searchline = () => {
  const { t, setInput, memoized, input, loading, selected, buttonRenderer } =
    useSearchline();

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
          src={loadPNG}
          alt="loading"
        />
        <img
          className={`loading error-x ${
            !loading && !selected.found && selected.nickname ? "" : "hidden"
          }`}
          src={errorPNG}
          alt="icon"
        />
      </div>

      {buttonRenderer(selected)}
    </>
  );
};

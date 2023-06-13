import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { IStreamer } from "../../models/IStreamer";

export const Searchline = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<IStreamer>({
    found: false,
  });
  const [input, setInput] = useState("");

  let timeout: ReturnType<typeof setTimeout> | undefined;
  const handleChange = (value: string) => {
    // Clearing states
    clearTimeout(timeout);
    setSelected({ found: false });
    setLoading(false);

    // Setting states
    timeout = setTimeout(async () => {
      if (value.length > 0) {
        setLoading(true);

        const response = await fetch(
          "http://localhost:3000/streamer",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nickname: value }),
            mode: "cors",
          }
        ).then((res) => res.json());

        setLoading(false);
        setSelected(response);
      }
    }, 500);
  };

  const memoized = useCallback(handleChange, []);

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

      {selected.found ? (
        <button
          onClick={() => {}}
          className={`button play-btn${
            selected.found ? " fade-in" : " hidden"
          }`}
        >
          <img src={selected.icon} alt="icon" />
          <p>{selected.nickname}</p>
        </button>
      ) : null}
    </>
  );
};

import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { IStreamer } from "../../models/IStreamer";
import { useActions } from "../store/useActions";

const useSearchline = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<IStreamer>({
    found: false,
  });
  const [input, setInput] = useState("");
  const { setStreamer } = useActions();

  const onEnter = (event: KeyboardEvent) => {
    if (selected.found && event.key === "Enter") {
      setStreamer(selected);
      window.removeEventListener("keydown", onEnter);
    }
  };

  window.addEventListener("keydown", onEnter);

  const buttonRenderer = (selected: IStreamer) => {
    if (selected.found) {
      return (
        <button
          onClick={() => {
            setStreamer(selected);
          }}
          className={`button play-btn${
            selected.found ? " fade-in" : " hidden"
          }`}
        >
          <img src={selected.icon} alt="icon" />
          <p>{selected.nickname}</p>
        </button>
      );
    }

    return null;
  };

  let timeout: ReturnType<typeof setTimeout> | undefined;
  const handleChange = (value: string) => {
    // Clearing states
    clearTimeout(timeout);
    setSelected({ found: false });
    setLoading(false);
    if (!value.replaceAll(" ", "")) return;

    // Setting states
    timeout = setTimeout(async () => {
      if (value.length > 0) {
        setLoading(true);

        const response = await fetch("http://localhost:3000/streamer", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname: value.replaceAll(" ", ""),
          }),
          mode: "cors",
        }).then((res) => res.json());

        setLoading(false);
        setSelected(response);
      }
    }, 500);
  };

  const memoized = useCallback(handleChange, []);

  return {
    t,
    loading,
    setLoading,
    selected,
    setSelected,
    input,
    setInput,
    buttonRenderer,
    memoized,
  };
};

export default useSearchline;

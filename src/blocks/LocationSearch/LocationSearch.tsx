import { useEffect, useRef, useState } from "react";
import css from "./LocationSearch.module.css";
import Button from "~/components/Button";
import { useTranslation } from "react-i18next";
import searchIcon from "~/assets/icon-search.svg";
import Dropdown from "~/components/Dropdown";
import loadingIcon from "~/assets/icon-loading.svg";

interface Location {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

interface Props {
  onSubmit?: () => void;
}

export default function LocationSearch(props: Props) {
  const { t } = useTranslation("", { keyPrefix: "search" });
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true); // not show dropdown on input focus without typing

  const { onSubmit } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  // ensures dropdown closes if results become empty after async updates
  useEffect(() => {
    if (open && !loading && !results.length) {
      setOpen(false);
    }
  }, [loading, results, open]);

  const handleType = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(false);
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setResults([]);
      // closes dropdown synchronously on input clear
      if (open) {
        setOpen(false);
      }
      return;
    }

    try {
      setLoading(true);
      setOpen(true);
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          value
        )}`
      );
      if (!response.ok) throw new Error("Failed to fetch locations");
      const data = await response.json();

      setResults(data.results || []);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (loc: Location) => {
    setQuery(`${loc.name}, ${loc.country}`);
    setResults([]);

    inputRef.current?.focus();
  };

  return (
    <form
      className={css.LocationSearch}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
        console.log("submit");
        setQuery("");
      }}
    >
      <Dropdown
        trigger={
          <div className={css.searchBlock}>
            <img src={searchIcon} alt='search icon' />
            <input
              ref={inputRef}
              name='locationInput'
              type='text'
              placeholder={t("inputPlaceholder")}
              value={query}
              onChange={handleType}
            />
          </div>
        }
        disabled={disabled}
        position='bottom left'
        open={open}
      >
        {(close) => (
          <>
            {loading && <SearchInProgress loadingText={t("loading")} />}
            {error && <li style={{ color: "red" }}>{error}</li>}
            {results.map((loc) => (
              <Button
                variant='option'
                key={`${loc.latitude}-${loc.longitude}`}
                onClick={() => {
                  handleSelect(loc);
                  close();
                }}
              >
                {loc.name}, {loc.country}
              </Button>
            ))}
          </>
        )}
      </Dropdown>

      <Button variant='search' type='submit'>
        {t("button")}
      </Button>
    </form>
  );
}

function SearchInProgress({ loadingText }: { loadingText: string }) {
  return (
    <div className={css.loading}>
      <img src={loadingIcon} alt='loading' />
      <span>{loadingText}</span>
    </div>
  );
}

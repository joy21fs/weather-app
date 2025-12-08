import { useEffect, useRef, useState } from "react";
import css from "./LocationSearch.module.css";
import Button from "~/components/Button";
import { useTranslation } from "react-i18next";
import searchIcon from "~/assets/icon-search.svg";
import Dropdown from "~/components/Dropdown";
import loadingIcon from "~/assets/icon-loading.svg";
import { useWeather } from "~/contexts/WeatherContext";

interface Props {
  results: Location[];
  onSearch: (value: React.SetStateAction<Location[]>) => void;
}
export interface Location {
  name: string;
  latitude?: number;
  longitude?: number;
  country?: string;
}

export default function LocationSearch(props: Props) {
  const { results, onSearch } = props;
  const { t } = useTranslation("", { keyPrefix: "search" });
  const [query, setQuery] = useState<Location | undefined>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true); // not show dropdown on input focus without typing

  const { setLocation } = useWeather();
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

    const [name, country] = value.split(",").map((s) => s.trim());

    setQuery({
      name,
      country: country || undefined,
    });

    if (!value) {
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

      onSearch(data.results || []);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (loc: Location) => {
    setQuery({
      name: loc.name,
      country: loc.country,
      latitude: loc.latitude,
      longitude: loc.longitude,
    });
    onSearch([loc]);
    inputRef.current?.focus();
  };

  return (
    <form
      className={css.LocationSearch}
      onSubmit={(e) => {
        e.preventDefault();
        setLocation(
          query?.latitude ?? 0,
          query?.longitude ?? 0,
          `${query?.name}, ${query?.country}`
        );
        setQuery(undefined);
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
              value={
                query
                  ? query.country
                    ? `${query.name}, ${query.country}`
                    : query.name
                  : ""
              }
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
            {results?.map((loc) => (
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

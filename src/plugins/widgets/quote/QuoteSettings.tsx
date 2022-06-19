import React from "react";

import { dailyCategories, hourlyCategories } from "./categories";
import { Props, defaultData } from "./types";

function updateCategories<T>(current: T[], updated: T, checked: boolean): T[] {
  const isLastItemBeingUnchecked = !checked && current.length === 1;
  if (isLastItemBeingUnchecked) {
    return current;
  }

  return checked
    ? [...current, updated]
    : current.filter((category) => category !== updated);
}

const QuoteSettings: React.FC<Props> = ({ data = defaultData, setData }) => (
  <div className="QuoteSettings">
    <h5>Daily Quotes</h5>
    {dailyCategories.map((category) => (
      <label key={category.key}>
        <input
          type="checkbox"
          checked={data.categories.includes(category.key)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({
              categories: updateCategories(
                data.categories,
                category.key,
                event.target.checked,
              ),
            })
          }
        />{" "}
        {category.name}
      </label>
    ))}
    <p>
      Powered by{" "}
      <a
        href="https://theysaidso.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        They Said So
      </a>
    </p>
    <h5>Hourly Quotes</h5>
    {hourlyCategories.map((category) => (
      <label key={category.key}>
        <input
          type="checkbox"
          checked={data.categories.includes(category.key)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({
              categories: updateCategories(
                data.categories,
                category.key,
                event.target.checked,
              ),
            })
          }
        />{" "}
        {category.name}
      </label>
    ))}
    <p>
      Powered by{" "}
      <a
        href="http://www.developerexcuses.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developer Excuses
      </a>
    </p>
  </div>
);

export default QuoteSettings;

import React, { useEffect, useRef, useState } from "react";
import "./index.css";

type ItemValue = string | number;

type Item<T extends ItemValue> = {
  label: string;
  value: T;
};

type MultiSelectProps<T extends ItemValue> = {
  items: Item<T>[];
  onSelect?: (i: Item<T>) => void;
  onDeselect?: (i: Item<T>) => void;
  onSelectAll?: (i: Item<T>[]) => void;
  searchPlaceHolder?: string;
};

const MultiSelect = <T extends ItemValue>({
  items,
  onSelect,
  onDeselect,
  onSelectAll,
  searchPlaceHolder = "Search",
}: MultiSelectProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState(() =>
    items.reduce<Record<string, boolean>>((acc, el) => {
      acc[el.label] = false;

      return acc;
    }, {}),
  );

  const check = (i: Item<T>, value: boolean) => {
    setValues((prev) => ({ ...prev, [i.label]: value }));
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setValues((prev) =>
      Object.keys(prev).reduce(
        (acc, key) => {
          acc[key] = checked;

          return acc;
        },
        { ...prev },
      ),
    );

    if (checked) {
      onSelectAll?.(items);
    } else {
      onSelectAll?.([]);
    }
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckBoxClick =
    (item: Item<T>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        onSelect?.(item);
      } else {
        onDeselect?.(item);
      }

      check(item, e.currentTarget.checked);
    };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const isItemHidden = (i: Item<T>): boolean => {
    return !i.label.toLowerCase().includes(searchValue.toLowerCase());
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        e.target &&
        !containerRef.current?.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const selectedCount = Object.values(values).filter(Boolean).length;

  return (
    <div className={`multiselect${isOpen ? " open" : ""}`} ref={containerRef}>
      <div className="label" onClick={toggleOpen} role="button">
        <span>
          {selectedCount === 0 ? "Select" : `${selectedCount} selected`}
        </span>
        <span className="icon">&#9658;</span>
      </div>
      <div className={`contents ${isOpen ? "open" : "hidden"}`}>
        <input
          type="text"
          className="search"
          placeholder={searchPlaceHolder}
          onChange={handleSearchChange}
        />
        <div className="select-all">
          <input type="checkbox" id="select-all" onChange={handleSelectAll} />
          <label htmlFor="select-all">Select All</label>
        </div>
        <ul className="items">
          {items.map((item) => (
            <li
              key={item.label}
              className={`item${isItemHidden(item) ? " hidden" : ""}`}
            >
              <input
                id={item.label}
                type="checkbox"
                value={item.value}
                onChange={handleCheckBoxClick(item)}
                checked={values[item.label]}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;

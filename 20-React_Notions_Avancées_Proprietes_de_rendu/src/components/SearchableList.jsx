import { Fragment, useEffect, useMemo, useState } from "react";
import  {clsx}  from "clsx";
import React from 'react';




export function SearchableList({ items, itemRenderer }) {
  const [search, setSearch] = useState("");
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, items]);
  const [selectedItemIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);
  const handleKeys = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(
          (v) => (v + 1 + filteredItems.length) % filteredItems.length
        );
        break;
      case "Arrowup":
        e.preventDefault();
        setSelectedIndex(
          (v) => (v - 1 + filteredItems.length) % filteredItems.length
        );
        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mb-1"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeys}
      />
      <ul className="list-group">
        {filteredItems.map((item, k) => (
          <Fragment key={item.name}>
            {itemRenderer ? itemRenderer(item) : <li
              aria-current={k === selectedItemIndex}
              className={clsx(
                "list-group-item",
                k === selectedItemIndex && "active"
              )}
              key={item.name}
            >
              {item.name}
            </li>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}


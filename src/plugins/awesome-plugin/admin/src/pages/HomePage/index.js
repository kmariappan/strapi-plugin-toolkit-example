/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from "react";
import { contents } from "strapi-plugin-toolkit";

const HomePage = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    contents.article
      .select()
      .get()
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  if (items === null) {
    return <p style={{ margin: "3rem" }}>Plugin Homepage</p>;
  }

  return (
    <div style={{ margin: "3rem" }}>
      {items &&
        items.map((item) => (
          <p style={{ marginTop: "1rem" }} key={item.id}>
            {item?.title || item?.name}
          </p>
        ))}
    </div>
  );
};

export default memo(HomePage);

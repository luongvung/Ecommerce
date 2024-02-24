import React from "react";
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";
import "./NewCollections.css";
const NewCollections = () => {
  return (
    <div>
      <div className="new-collections">
        <h1>NEW Collections</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCollections;

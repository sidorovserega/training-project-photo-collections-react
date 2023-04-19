import React from "react";
import Collection from "./Collection";

const GridCollections = ({ collection, searchValue }) => {

    return (
        collection
            .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) =>
              <Collection key={index}
                name={obj.name}
                images={obj.photos}
              />
            )  
    );
}

export default GridCollections;
import React from "react";

const TagList = ({ categories, searchCategory, setSearchCategory}) => {

    return (
        <ul className="tags">
          {categories.map((category, index) => 
            <li 
              key={index} 
              className={index === searchCategory ? 'active' : ''}
              onClick={() => setSearchCategory(index)}
            >
              {category.name}
            </li>
          )}
        </ul>
    );
}

export default TagList;
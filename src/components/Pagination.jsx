import React from "react";

const Pagination = ({ page, setPage}) => {

    return (
        <ul className="pagination">
        {
          [...Array(5)].map((_, i) => 
            <li 
              className={i + 1 === page ? 'active' : ''}
              onClick={() => setPage(i + 1)}  
            >
              {i + 1}
            </li>
          )
        }
      </ul>
    );
}

export default Pagination;
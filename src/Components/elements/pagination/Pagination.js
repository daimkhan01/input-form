import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  goToFirstPage,
  goToPrevPage,
  goToNextPage,
  goToLastPage,
}) => (
  <div className="pagination">
    <button onClick={goToFirstPage} disabled={currentPage === 1}>
      First
    </button>
    <button onClick={goToPrevPage} disabled={currentPage === 1}>
      Prev
    </button>
    <span>{`${currentPage} / ${totalPages}`}</span>
    <button onClick={goToNextPage} disabled={currentPage === totalPages}>
      Next
    </button>
    <button onClick={goToLastPage} disabled={currentPage === totalPages}>
      Last
    </button>
  </div>
);

export default Pagination;

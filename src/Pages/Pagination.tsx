import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageClick = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };
  
    const pageNumbers = [];
    const maxButtonsToShow = 5;
  
    if (totalPages <= maxButtonsToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfRange = Math.floor(maxButtonsToShow / 2);
  
      if (currentPage <= halfRange) {
        pageNumbers.push(...Array.from({ length: maxButtonsToShow }, (_, i) => i + 1));
      } else if (currentPage + halfRange >= totalPages) {
        pageNumbers.push(...Array.from({ length: maxButtonsToShow }, (_, i) => totalPages - maxButtonsToShow + 1 + i));
      } else {
        pageNumbers.push(...Array.from({ length: maxButtonsToShow }, (_, i) => currentPage - halfRange + i));
      }
  
      if (pageNumbers[0] > 2) {
        pageNumbers.unshift('...');
      }
      if (pageNumbers[0] !== 1) {
        pageNumbers.unshift(1);
      }
  
      if ([pageNumbers[pageNumbers.length - 1] ]<[ totalPages -1]) {
        pageNumbers.push('...');
      }
      if (pageNumbers[pageNumbers.length - 1] !== totalPages) {
        pageNumbers.push(totalPages);
      }
    }
  
    return (
      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
  
        {pageNumbers.map((page, index) =>
          page === '...' ? (
            <span key={index} className="pagination-ellipsis">
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`pagination-button ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageClick(Number(page))}
            >
              {page}
            </button>
          )
        )}
  
        <button
          className="pagination-button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    );
  };
  

export default Pagination;

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const maxVisible = 5;

  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, currentPage + 2);

  if (currentPage <= 3) {
    start = 1;
    end = Math.min(totalPages, maxVisible);
  }

  if (currentPage > totalPages - 3) {
    start = Math.max(1, totalPages - maxVisible + 1);
    end = totalPages;
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex gap-2 justify-center items-center mt-8">
      <div className="flex items-center gap-1 text-sm sm:gap-2 md:gap-5 lg:gap-6">

        {/* Flecha izquierda */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border border-gray-200 flex items-center justify-center size-10 transition-colors rounded-lg hover:bg-white disabled:opacity-30 lg:size-12"
        >
          <FaChevronLeft />
        </button>

        {/* Primera página + ... */}
        {start > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="border border-gray-200 flex items-center justify-center rounded-lg size-10 transition-colors hover:bg-white disabled:opacity-30 lg:text-2xl lg:size-12"
            >
              1
            </button>
            {start > 2 && (
              <span className="border border-gray-200 flex items-center justify-center size-10 transition-colors rounded-lg hover:bg-white disabled:opacity-30">...</span>
            )}
          </>
        )}

        {/* Páginas visibles */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`border border-gray-200 flex items-center justify-center rounded-lg transition-colors size-10 duration-200 lg:text-2xl lg:size-12 ${
              currentPage === page
                ? "bg-btn-primary text-white"
                : "hover:bg-white disabled:opacity-30"
            }`}
          >
            {page}
          </button>
        ))}

        {/* ... + Última página */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span className="px-2 text-text-secondary">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="border border-gray-200 flex items-center justify-center rounded-lg size-10 hover:bg-white transition-colors disabled:opacity-30 lg:text-2xl lg:size-12"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Flecha derecha */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border border-gray-200 flex items-center justify-center size-10 transition-colors rounded-lg hover:bg-white disabled:opacity-30 lg:size-12"
        >
          <FaChevronRight />            
        </button>

      </div>
    </nav>
  );
}
export default Pagination;
import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center w-full px-4 py-2 border rounded-full hover:shadow-md">
        <FaSearch className="text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          aria-label="Search"
        />
        <FaMicrophone className="text-gray-500 ml-3 cursor-pointer" />
        <FaCamera className="text-gray-500 ml-3 cursor-pointer" />
      </div>
      <div className="flex justify-center mt-6 space-x-3">
        <button className="px-4 py-2 bg-gray-100 text-sm hover:border">
          Google Search
        </button>
        <button className="px-4 py-2 bg-gray-100 text-sm hover:border">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
}
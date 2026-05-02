import Link from "next/link";
import Card from "./Card";

const LocationNotFound = ({ locationName }) => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center p-12 bg-[#1a2634] rounded-[2rem] shadow-2xl max-w-lg mx-auto border border-white/5 overflow-auto">
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light text-center mb-10 leading-relaxed">
          Location info not found for{" "}
          <span className="text-gray-300 font-mono italic">{locationName}</span>
        </h2>
        <Link
          href="/"
          className="group relative flex items-center gap-3 px-5 py-3 bg-blue-700 hover:bg-blue-500 text-white font-bold text-lg rounded-2xl shadow-[0_10px_20px_-10px_rgba(14,165,233,0.5)] transition-all duration-300 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span>Get current location info</span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Link>
      </div>
    </Card>
  );
};

export default LocationNotFound;

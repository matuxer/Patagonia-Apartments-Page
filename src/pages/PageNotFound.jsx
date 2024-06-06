import React from "react";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      className={`flex justify-center items-center bg-[#f0f4f4] h-[80vh] pt-[56px] md:pt-[80px] ${styles.errorBg}`}
    >
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-[#4E6E82] font-raleway md:text-7xl">
          404
        </h1>
        <p className="text-gray-600 font-raleway font-semibold md:text-xl dark:text-gray-400">
          Chan! Parece que el apartment que estas buscando no existe.
        </p>
        <Link
          to="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#4E6E82] px-6 text-sm font-semibold text-white shadow font-raleway duration-150 active:text-[#4E6E82] active:bg-white active:border-2 active:border-[#4E6E82] hover:bg-[#456477]"
        >
          Volver a Patagonia Apartments
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;

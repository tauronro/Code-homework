import React from "react";
import NavbarComponent from "../../components/navbar/navbarComponent";
import SearchComponent from "../../components/search/searchComponent";

const HomePage = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <NavbarComponent />
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto  sm:py-20 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <SearchComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

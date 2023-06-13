// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 relative">
          <img src="https://st.depositphotos.com/1006899/2650/i/600/depositphotos_26505551-stock-photo-error-metaphor.jpg" alt="" className="w-[100%] "/>
          <div className="max-w-md text-center absolute bottom-0 text-white">
            <h2 className="mb-8 font-extrabold text-9xl ">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/" className="btn font-bold text-xl bg-black text-red-500 hover:bg-red-600 hover:text-white">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;
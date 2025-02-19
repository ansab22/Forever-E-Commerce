import React from "react";

function newsLetter() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="text-center">
        <p className="text-xl sm:text-3xl font-bold text-gray-800">
          Subscribe now & get 20% off
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mt-3">
          Lorem, ipsum dolor sit amet consectetur amet consectetur voluptates.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        >
          <input
            className="w-full sm:flex-1 outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-4 py-3 sm:px-10 sm:text-sm sm:py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </>
  );
}

export default newsLetter;

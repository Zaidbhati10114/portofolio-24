"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn: React.FC = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // This effect runs only on the client side
    setIsClient(true);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    // Simulate form submission
    setTimeout(() => {
      setPending(false);
      // Handle successful form submission
    }, 2000);
  };

  if (!isClient) {
    // Render a fallback UI while waiting for the client to hydrate
    return (
      <button
        className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full"
        disabled
      >
        Loading...
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </button>
    </form>
  );
};

export default SubmitBtn;

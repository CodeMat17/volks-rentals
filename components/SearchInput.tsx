"use client";

import { useState } from "react";

const SearchInput = () => {
  const [date, setDate] = useState<Date | undefined>();

  const isDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getTime() < today.getTime() || date < new Date("1900-01-01");
  };

  return (
    <div className='flex flex-col justify-center p-4'>
      <h2 className='text-xl text-center text-sky-500 font-medium tracking-wider'>
        Search for your Volks spec
      </h2>
    </div>
  );
};

export default SearchInput;

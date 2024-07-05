"use client";

import { carData } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { BsFuelPump } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiHorseBold } from "react-icons/pi";
import { TbSteeringWheel } from "react-icons/tb";
import Filters from "./Filters";
import { Button } from "./ui/button";
import RentModal from "./RentModal";

const CarsList = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("asc");

  const filteredCars = carData
    .filter((car) => (selectedModel ? car.name === selectedModel : true))
    .sort((a, b) =>
      selectedPriceOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const models = Array.from(new Set(carData.map((car) => car.name)));


  return (
    <div className='px-4 max-w-5xl mx-auto'>
      <Filters
        models={models}
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
        selectedPriceOrder={selectedPriceOrder}
        onPriceChange={setSelectedPriceOrder}
      />

      <div className='py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {filteredCars &&
          filteredCars.map((car) => (
            <div
              key={car.id}
              className='relative bg-sky-50 dark:bg-gray-800 dark:hover:bg-gray-950 hover:bg-white hover:border p-5 rounded-xl shadow-md transition-all transform duration-300 ease-in hover:scale-105 group'>
              <h2 className='font-semibold'>
                {car.name} {car.tag}
              </h2>
              {/* <p>{car.description}</p> */}
              <p className='text-lg font-semibold tracking-tighter'>
                <span className='text-sm font-semibold'>$</span>
                {car.price}
              </p>
              <div className='flex items-center gap-1 text-gray-500'>
                <BsFuelPump className='w-3 h-3 text-sky-500' />
                <p className='text-xs flex'>{car.fuel_consumption}</p>
              </div>
              {/* <div className='flex items-center gap-1 text-gray-500'>
              <FaCar className='w-3 h-3 text-sky-500' />
              <p className='text-xs'>{car.drive_type}</p>
            </div> */}
              <div className='flex items-center justify-center'>
                <Image
                  alt='car image'
                  priority
                  src={car.image}
                  width={100}
                  height={60}
                  className='w-full max-w-[120px] aspect-auto'
                />
              </div>
              <div className='flex items-center justify-between group-hover:hidden mt-2'>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <TbSteeringWheel className='w-5 h-5 text-sky-500' />
                  <p className='text-sm font-semibold'>{car.transmission}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <MdAirlineSeatReclineNormal className='w-5 h-5 text-sky-500' />
                  <p className='text-sm font-semibold'>{car.seats}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <PiHorseBold className='w-5 h-5 text-sky-500' />
                  <p className='text-sm font-semibold'>{car.horsepower} hp</p>
                </div>
              </div>
              <RentModal
                name={car.name}
                tag={car.tag}
                fuel_consumption={car.fuel_consumption}
                image={car.image}
                transmission={car.transmission}
                seats={car.seats}
                horsepower={car.horsepower}
                price={car.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarsList;

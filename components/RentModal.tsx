"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { BsFuelPump } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiHorseBold } from "react-icons/pi";
import { TbSteeringWheel } from "react-icons/tb";
import { Input } from "./ui/input";
import RentModalForm from "./RentModalForm";
import { useState } from "react";

export type CarProps = {
  name: string;
  tag: string;
  seats: number;
  transmission: string;
  price: number;
  horsepower: number;
  fuel_consumption: string;
  image: string;
};

const RentModal = ({
  name,
  tag,
  seats,
  transmission,
  price,
  horsepower,
  fuel_consumption,
  image,
}: CarProps) => {
const [open, setOpen] = useState(false)

  return (
    <div className='hidden group-hover:block'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className='w-full bg-sky-500 rounded-md py-1.5 text-white hover:bg-sky-700'>
          Rent Now
        </DialogTrigger>
        <DialogContent className="w-full sm:max-w-xl rounded-lg">
          <DialogHeader>
            <DialogTitle>Rent A Volks Now!</DialogTitle>
          </DialogHeader>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-3'>
            <div className='bg-sky-50 dark:bg-gray-900 rounded-xl p-4 text-sm w-full sm:w-[40%] h-full flex flex-col justify-center'>
              <h2 className='font-semibold'>
                {name} {tag}
              </h2>
              <p className=' font-medium tracking-tighter'>
                <span className='text-sm font-semibold'>$</span>
                {price}
              </p>
              <div className='hidden sm:flex items-center gap-1 text-gray-500'>
                <BsFuelPump className='w-3 h-3 text-sky-500' />
                <p className='text-xs flex'>{fuel_consumption}</p>
              </div>
              <div className='flex items-center justify-center h-full'>
                <Image
                  alt='car image'
                  priority
                  src={image}
                  width={100}
                  height={60}
                  className='w-full max-w-[120px] aspect-auto'
                />
              </div>

              <div className='hidden sm:flex items-center justify-between group-hover:hidden mt-2'>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <TbSteeringWheel className='w-5 h-5 text-sky-500' />
                  <p className='text-sm font-semibold'>{transmission}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <MdAirlineSeatReclineNormal className='w-5 h-5 text-sky-500' />
                  <p className='text-sm font-semibold'>{seats}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <PiHorseBold className='w-5 h-5 text-sky-500' />
                  <p className='text-sm font-semibold'>{horsepower} hp</p>
                </div>
              </div>
            </div>
            <div className='w-full sm:w-[60%]'>
            <RentModalForm name={name} tag={tag} setOpen={setOpen} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RentModal;

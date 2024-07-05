"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { Calendar as CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const FormSchema = z.object({
  location: z.string().min(6, {
    message: "Select a location.",
  }),
  pickupdate: z.date({
    required_error: "Select a pick up date.",
  }),
  dropoffdate: z.date({
    required_error: "Select drop off date.",
  }),
  pickuptime: z.string().min(5, {
    message: "Select a pick up time.",
  }),
  dropofftime: z.string().min(5, {
    message: "Select a drop off time.",
  }),
  phone: z.string().length(11, {
    message: "Phone number must be exactly 11 digits.",
  }),
});

export type Props = {
  name: string;
  tag: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RentModalForm = ({ name, tag, setOpen }: Props) => {
  const [booked, setBooked] = useState(false);
  const [bookedLocation, setBookedLocation] = useState("");
  const [bookedDate, setBookedDate] = useState("");
   const [bookedTime, setBookedTime] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    // defaultValues: {
    //   location: "",
    //   pickupdate: '',
    //   dropoffdate: new Date(),
    //   pickuptime: "",
    //   dropofftime: "",
    //   phone: "",
    // },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setBookedLocation(data.location);
    setBookedDate(dayjs(data.pickupdate).format("DD-MMM-YYYY"));
    setBookedTime(data.pickuptime);

    toast(`Booking submitted successfully! booked volkswagen`);
    setBooked(true);
    // setOpen((prev) => !prev);
  }

  const words = `We are glad to inform you that we have received your booking for a Volkswagen ${name} ${tag} from our ${bookedLocation} office on ${bookedDate} ${bookedTime}. See you then! Thank you.
`;

  if (booked) {
    return (
      <div>
        <TextGenerateEffect words={words} />
        <div className="mt-3">
          <Button onClick={() => setOpen(false)} className="w-full dark:bg-sky-600 dark:text-white">Close</Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='PickUp Location' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Maitama, Abuja'>Maitama, Abuja</SelectItem>
                  <SelectItem value='Unizik, Anambra'>
                    Unizik junction, Awka
                  </SelectItem>
                  <SelectItem value='Ogui, Enugu'>Ogui, Enugu</SelectItem>
                  <SelectItem value='VI, Lagos'>VI, Lagos</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-center gap-3'>
          <FormField
            control={form.control}
            name='pickupdate'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <FormLabel>Pickup date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "text-lef font-normal",
                          !field.value && "text-muted-foreground"
                        )}>
                        <p className='mt-1'>
                          {field.value ? (
                            dayjs(field.value).format("DD MMM, YYYY")
                          ) : (
                            <span className=''>Pick a date</span>
                          )}
                        </p>
                        <CalendarIcon className='ml-3 h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0  align="start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = dayjs().startOf("day"); // Get the start of today (00:00:00)
                        const inputDate = dayjs(date).startOf("day"); // Get the start of the input date

                        return (
                          inputDate.isBefore(today) ||
                          inputDate.isBefore(dayjs("1900-01-01"))
                        );
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='dropoffdate'
            render={({ field }) => (
              <FormItem className='w-full flex flex-col'>
                <FormLabel>Drop off date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "text-lef font-normal",
                          !field.value && "text-muted-foreground"
                        )}>
                        <p className='mt-1'>
                          {field.value ? (
                            dayjs(field.value).format("DD MMM, YYYY")
                          ) : (
                            <span className=''>Pick a date</span>
                          )}
                        </p>
                        <CalendarIcon className='ml-3 h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0  align="start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = dayjs().startOf("day"); // Get the start of today (00:00:00)
                        const inputDate = dayjs(date).startOf("day"); // Get the start of the input date

                        return (
                          inputDate.isBefore(today) ||
                          inputDate.isBefore(dayjs("1900-01-01"))
                        );
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex gap-3'>
          <FormField
            name='pickuptime'
            control={form.control}
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Pickup time</FormLabel>
                <FormControl>
                  <Input
                    type='time'
                    value={field.value}
                    onChange={field.onChange}
                    placeholder='Select pickup time'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name='dropofftime'
            control={form.control}
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Drop off time</FormLabel>
                <FormControl>
                  <Input
                    type='time'
                    placeholder='Select pickup time'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone No</FormLabel>
              <FormControl>
                <Input placeholder='Enter your phone no.' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='pt-2'>
          <Button type='submit' className='w-full dark:bg-sky-900 dark:text-white dark:hover:bg-sky-950'>
            Book Now
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RentModalForm;

import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Try us today.",
    "Experience the ease now.",
    "Enjoy seamless rentals.",
    "Discover the difference.",
  ];

  return (
    <div className=''>
      <div className='text-xl mx-auto font-medium text-neutral-600 dark:text-neutral-300 mt-3'>
        Effortlessly select and reserve your vehicle.
        <br />
        <FlipWords words={words} />
      </div>
    </div>
  );
}

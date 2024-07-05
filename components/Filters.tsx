import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export type CarFilterProps = {
  models: string[];
  selectedModel: string;
  onModelChange: (model: string) => void;
  selectedPriceOrder: string;
  onPriceChange: (order: string) => void;
};

const Filters = ({
  models = [],
  selectedModel,
  selectedPriceOrder,
  onModelChange,
  onPriceChange,
}: CarFilterProps) => {
  return (
    <div className='mt-5 w-full flex items-center justify-between'>
      <div className='leading-5'>
        <h1 className='text-2xl font-semibold'>Cars Catalog</h1>
        {/* <pre>Models:::::{JSON.stringify(models, null, 2)}</pre> */}
        <p className='text-sm text-gray-400'>Explore our car options</p>
      </div>
      <div className='flex items-center gap-3'>
        <Button
          variant='ghost'
          onClick={(e) => {
            onModelChange("");
            onPriceChange("asc");
          }}
          className='border py-5'>
          All
        </Button>
        <Select value={selectedPriceOrder} onValueChange={onPriceChange}>
          <SelectTrigger className='w-[120px]'>
            <SelectValue placeholder='Price' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price</SelectLabel>
              <SelectItem value='asc'>Low to High</SelectItem>
              <SelectItem value='desc'>High to Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='hidden sm:block'>
          <Select value={selectedModel} onValueChange={onModelChange}>
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder='Brand' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Brand</SelectLabel>
                {models.map((model, i) => (
                  <SelectItem key={i} value={model}>
                    {model}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filters;

import CarsList from "@/components/CarsList";
import SearchInput from "@/components/SearchInput";
import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <div className='pb-12'>
      <Hero />
      <SearchInput />
    
        {/* <Filters /> */}
        <CarsList />
  
    </div>
  );
};

export default Home;

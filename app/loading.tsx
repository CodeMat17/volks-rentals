import { CgLoadbarAlt } from "react-icons/cg";


const loading = () => {
  return (
    <div className='w-full py-32 flex justify-center items-center'>
      <CgLoadbarAlt className='w-8 h-8 animate-spin mr-3' /> wait...
    </div>
  );
};

export default loading;

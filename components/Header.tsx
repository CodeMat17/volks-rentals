import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Title from "./Title";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className='p-4 shadow-md'>
      <div className='flex items-center justify-between max-w-5xl mx-auto'>
        <Title text='Volks' classnames='font-bold text-xl' />
        <div className="flex items-center gap-5">
          <ModeToggle />
           {/* <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div> */}
        </div>
       
      </div>
    </div>
  );
};

export default Header;

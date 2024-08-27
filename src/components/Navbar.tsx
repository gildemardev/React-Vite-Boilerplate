import { FC } from "react";
import { Link } from "@tanstack/react-router";
import { Box } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
const Navbar: FC = () => {
	return (
		<div className='py-3 px-3 sm:px-7 fixed flex w-full items-center justify-between border-b bg-background/75 backdrop-blur-sm'>
			<div className='inline-flex flex-shrink-0 items-center'>
				<Box className='size-7 mr-1' />
				<span className='font-bold'>Boilerplate</span>
			</div>
			<div className='inline-flex gap-1 sm:gap-3 text-sm sm:text-base'>
				<Button asChild variant={"ghost"} className='[&.active]:bg-secondary'>
					<Link to='/'>Home</Link>
				</Button>
				<Button asChild variant={"ghost"} className='[&.active]:bg-secondary'>
					<Link to='/about'>Sobre</Link>
				</Button>
				<ModeToggle />
			</div>
		</div>
	);
};

export default Navbar;

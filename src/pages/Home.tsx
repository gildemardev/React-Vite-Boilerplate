import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Blocks, ChevronRightIcon, Github } from "lucide-react";

const Home: FC = () => {
	return (
		<section>
			{/* Hero */}
			<div>
				<div className='container py-24 lg:py-32'>
					{/* Banner */}
					<div className='flex justify-center'>
						<a
							className='inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition hover:border-foreground/50 duration-500'
							href='https://github.com/gildemardev/React-Vite-Boilerplate'
							target='_blank'
							rel='noopener noreferrer'>
							Versão 1.0 - Código Fonte
							<span className='py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm '>
								<ChevronRightIcon className='flex-shrink-0 w-4 h-4' />
							</span>
						</a>
					</div>
					{/* Fim Banner */}
					{/* Título */}
					<div className='mt-5 max-w-2xl text-center mx-auto'>
						<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
							Minimal Boilerplate: Vite + TS
						</h1>
					</div>
					{/* Fim título */}
					<div className='mt-5 max-w-3xl text-center mx-auto'>
						<p className='text-xl text-muted-foreground'>
							Projeto utilizando Vite com Typescript com o mínimo inicial para
							ter uma aplicação single page funcional e performática!
						</p>
					</div>
					{/* Botões */}
					<div className='mt-8 gap-3 flex flex-col sm:flex-row justify-center'>
						<Button
							size={"lg"}
							className='hover:-translate-y-1 transition-transform'
							asChild>
							<a
								href='https://github.com/gildemardev/React-Vite-Boilerplate'
								target='_blank'
								rel='noopener noreferrer'>
								<Github className='mr-2 size-5' />
								Repositório
							</a>
						</Button>
						<Button
							size={"lg"}
							variant={"outline"}
							className='hover:-translate-y-1 transition-transform'
							asChild>
							<Link to='/about'>
								<Blocks className='mr-2 size-5' />
								Funcionalidades
							</Link>
						</Button>
					</div>
					{/* Fim Botões */}
					<div className='mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3'>
						<span className='text-sm text-muted-foreground'>
							Package Manager:
						</span>
						<span className='text-sm font-bold'>npm </span>
						<svg
							className='h-5 w-5 text-muted-foreground'
							width={16}
							height={16}
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'>
							<path
								d='M6 13L10 3'
								stroke='currentColor'
								strokeLinecap='round'
							/>
						</svg>
						<a
							className='inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium'
							href='https://github.com/gildemardev/React-Vite-Boilerplate/blob/master/README.md'
							target='_blank'
							rel='noopener noreferrer'>
							Guia de Instalação:
							<ChevronRightIcon className='flex-shrink-0 w-4 h-4' />
						</a>
					</div>
				</div>
			</div>
			{/* Fim Hero */}
		</section>
	);
};

export default Home;

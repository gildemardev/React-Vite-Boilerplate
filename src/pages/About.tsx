import { Tecnologies } from "@/constants";
import { FC } from "react";

const About: FC = () => {
	return (
		<section>
			{/* Bloco de Ícones */}
			<div className='container my-10 '>
				<div className='max-w-2xl mx-auto'>
					{/* Grid */}
					<div className='grid gap-12'>
						<div>
							<h2 className='text-3xl font-bold lg:text-4xl'>Tecnologias:</h2>
							<p className='mt-3 text-muted-foreground text-balance'>
								Um starter deve incluir ferramentas essenciais para iniciar um
								projeto rapidamente, como configuração de build, gerenciamento
								de estado, estilização e roteamento. Esses elementos garantem
								uma base sólida, permitindo que você já comece sem perder tempo
								com configurações iniciais. Confira como cada tecnologia
								escolhida contribui para esse objetivo:
							</p>
						</div>
						<div className='space-y-6 lg:space-y-10'>
							{Tecnologies.map((tech, index) => (
								<div className='flex' key={index}>
									<tech.icon className='flex-shrink-0 mt-2 h-6 w-6' />
									<div className='ms-5 sm:ms-8'>
										<h3 className='text-base sm:text-lg font-semibold'>
											{tech.title}
										</h3>
										<p className='mt-1 text-muted-foreground'>
											{tech.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Fim Grid */}
				</div>
			</div>
			{/* Fim Bloco de ìcones */}
		</section>
	);
};

export default About;

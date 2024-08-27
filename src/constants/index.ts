import { Brush, ChevronsLeftRightEllipsis, Cog, Component, LucideIcon, Route } from "lucide-react";

interface TecnologiesType {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const Tecnologies: TecnologiesType[] = [
  {
    title: "Vite + TypeScript",
    description: "Vite é um build tool que melhora o processo de desenvolvimento, combinando auto reload com suporte nativo a TypeScript.",
    icon: Cog
  },
  {
    title: "TailwindCSS",
    description: "TailwindCSS é um framework de utilitários CSS que acelera o desenvolvimento, mantendo o código limpo e evitando conflitos de estilos.",
    icon: Brush
  },
  {
    title: "ShadcnUI",
    description: "ShadcnUI oferece componentes acessíveis e sólidos, permitindo interfaces coesas e personalizadas. Ajuda a economizar tempo.",
    icon: Component
  },
  {
    title: "Tanstack Router",
    description: "Serve para facilitar o roteamento em React com uma navegação simples e performance otimizada, além de sua sinergia com o Tanstack Query.",
    icon: Route
  },
  {
    title: "Tanstack Query",
    description: "A ferramenta gerencia dados assíncronos em React, simplificando fetching, caching e sincronização, com tipagem segura em TypeScript.",
    icon: ChevronsLeftRightEllipsis
  }
];

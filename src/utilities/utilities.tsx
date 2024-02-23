import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type SpotlightProps = {
  className?: string;
  fill?: string;
};

export type TextGenerateProps = {
  words: string;
  className?: string;
  childClassName?: string;
};

export type FloatingNavProps = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
};
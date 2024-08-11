import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import HomeIcon from "@/assets/home-svgrepo-com.svg";

export default function HomeButton({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button>{HomeIcon}</button>;
}

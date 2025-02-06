import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: 'text' | "email" | "password" | "tel" | "url" | "number"; // union
  placeholder?: string;
  label?: string;
  id?: string;
  // value?: string | number | boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  max?: number;  
  min?: number;  
}
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GITHUB_PREFIX = "https://github.com/";

//! FIXME: Pull language list form backend
export const LANGUAGES = [
  "javascript",
  "typescript",
  "python",
  "go",
  "rust",
] as const;

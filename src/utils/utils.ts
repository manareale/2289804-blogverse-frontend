import { Post } from "./types";


export const shufflePosts = (arr: Post[]) => [...arr].sort(() => 0.5 - Math.random());

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs
    .filter(Boolean)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean)
    .join(' ')
}

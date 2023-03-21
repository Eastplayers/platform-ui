export const SizeArr = ["base", "lg"] as const;
export type Sizes = (typeof SizeArr)[number];

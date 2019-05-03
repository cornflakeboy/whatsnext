
/**
 * Takes a source type T and a string (or a string literal union type) K and returns a copy of T containing each
 * key of T excluding those in K
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

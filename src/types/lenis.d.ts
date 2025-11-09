declare module "lenis" {
  export type LenisOptions = Record<string, unknown>;

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    on(event: string, handler: (...args: any[]) => void): void;
    destroy(): void;
  }
}


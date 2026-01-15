// global.d.ts
export {};

declare global {
  interface Steward {
    name: string;
    dateTrained: string;
    image: string;
    link?: string;
    location: string;
    description: string;
  }
}

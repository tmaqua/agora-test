/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly APP_ENV: string;
    readonly AGORA_APP_ID: string;
  }
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.css" {
  const classNames: { [className: string]: string };
  export = classNames;
}

declare module "*.sass" {
  const classNames: { [className: string]: string };
  export = classNames;
}

declare module "*.scss" {
  const classNames: { [className: string]: string };
  export = classNames;
}

declare module "*.mp3" {
  const value: any;
  export = value;
}

declare module 'iPhoneFrame' {
  const iPhoneFrame: React.ComponentType<any>;
  export default iPhoneFrame;
}

declare module 'iPadFrame' {
  const iPadFrame: React.ComponentType<any>;
  export default iPadFrame;
}

declare module 'AndroidFrame' {
  const AndroidFrame: React.ComponentType<any>;
  export default AndroidFrame;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

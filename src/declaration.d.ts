declare module 'IPhoneFrame' {
  const IPhoneFrame: React.ComponentType<any>;
  export default IPhoneFrame;
}

declare module 'IPadFrame' {
  const IPadFrame: React.ComponentType<any>;
  export default IPadFrame;
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

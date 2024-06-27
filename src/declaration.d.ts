declare module 'PhoneFrame' {
  const PhoneFrame: React.ComponentType<any>;
  export default PhoneFrame;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

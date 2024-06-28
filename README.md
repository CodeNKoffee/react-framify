# React-Framify

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CodeNKoffee)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/h4temsoliman)
[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/h4temsoliman)
[![Website Badge](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://hatemsoliman.dev)

React-Framify is a lightweight and versatile React component library that provides device framesets for showcasing screenshots and images. Whether you're looking to spice up your app presentations or just want to give your project visuals that extra edge, React-Framify has got you covered!

## Exciting News! 🎉

As of version **1.3.37**, React-Framify is smoother, faster, and more reliable than ever before! We've ironed out the kinks, ensuring that your experience is seamless and your projects shine. But that's not all - we're committed to making React-Framify even better. Expect new features, framesets, and a whole lot of customization options coming your way. Plus, we're revamping our landing page to make getting started with React-Framify a breeze. Stay tuned!

### Beta Release

After receiving valuable feedback and conducting several iterations, we are pleased to announce that we have achieved a robust beta version in **1.3.37**. This release incorporates numerous improvements and enhancements based on user input, ensuring a more stable and refined product experience. Thank you for your continued support and contributions in helping us reach this milestone.

**Note**: _Versions prior to 1.3.37 may have potential issues and could affect your project's performance. We highly recommend upgrading to the latest version as you're reviewing this library now to enjoy all the improvements and new features!_

## Features

- **Now supports the iPhone 14 Pro frameset**: Showcase your apps in the latest device frames.
- **Easy navigation**: Effortlessly browse through multiple screenshots or images.
- **Touch swipe gestures**: A natural and intuitive way to explore images.
- **Optimized performance**: Enjoy smooth animations without compromising on speed.
- **Cross-compatibility**: Works beautifully with both ReactJS and ReactTS.

## Installation

Get started with React-Framify in no time:

```bash
npm install react-framify
```

## Usage

Dive right in with this simple example of how to use the PhoneFrame component in your React application:

```jsx
import PhoneFrame from 'react-framify';

export default function MyApp() {
  const screenshotList = [
  'screenshot1.png',
  'screenshot2.png',
  'screenshot3.png',
];

  return (
    <>
      <PhoneFrame screenshotList={screenshotList} />;
    </>
  )
}
```

### Using with Next.js

If you're incorporating React-Framify into a Next.js project, you'll need to handle images a bit differently due to Next.js's image optimization features. Here's how you can do it:

```tsx
"use client"

import PhoneFrame from "react-framify";
// Import your images as StaticImageData
import FrameSetSSOne from "../../../public/img-1.png";
import FrameSetSSTwo from "../../../public/img-2.png";
import FrameSetSSThree from "../../../public/img-3.png";
import FrameSetSSFour from "../../../public/img-4.png";

export default function MyApp() {
  // Use the .src attribute of imported images for the screenshotList
  const screenshotList = [
    FrameSetSSOne.src,
    FrameSetSSTwo.src,
    FrameSetSSThree.src,
    FrameSetSSFour.src
  ];

  return (
    <>
      <PhoneFrame screenshotList={screenshotList} />;
    </>
  )
}
```

## License

React-Framify is proudly licensed under the GNU General Public License v3.0. Check out the LICENSE file for more details.

---

Join us on this exciting journey to make React-Framify the go-to library for all your app presentation needs. Your feedback and contributions are what make this project thrive. Let's create something amazing together!

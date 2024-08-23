# React-Framify

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CodeNKoffee)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/h4temsoliman)
[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/h4temsoliman)
[![Website Badge](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://hatemsoliman.dev)

## Introduction

React-Framify is a powerful library that allows you to showcase your app screenshots within realistic device frames. Whether you're presenting mobile or tablet designs, React-Framify makes it easy. Check out the [official React-Framify GitHub repository](https://github.com/CodeNKoffee/react-framify) for more details.

## Supported React.js

React-Framify supports React.js `18.2.0` and above.

## Supported Device Framesets

React-Framify supports the following devices:

- **iPhone 14 Pro/15/15 Pro**: These devices feature dynamic island displays.
- **iPad Pro**: Showcase your tablet designs with precision.
- **Google Pixel 8/9/9 Pro**: Android users, we've got you covered too!

## Installation

To install React-Framify, simply run:

```bash
npm install react-framify
```

Version 2.0.0 is the major release after our beta launch, and we encourage you to stick with it. If you have an older version installed, make sure to update to the latest.

## Usage

### Importing Components

You can import the following components from React-Framify:

```jsx
import { IPhoneFrame, AndroidFrame, IPadFrame } from "react-framify";
```

### Props

#### `IPhoneFrame`, `AndroidFrame`, and `IPadFrame`

These components accept the following props:

- `screenshotList`: An array of screenshot URLs (required).
- `statusBar`: Specify the status bar mode (`light` or `dark`) (required).
- `deviceColor`: Customize the device frame color (optional).
- `orientation`: Set to `"portrait"` or `"landscape"` (optional) - Default: `"portrait"`.
- `buttonStyles`: Customize button styles (optional).

#### `buttonStyles`

- `backgroundColor`: `string` (optional) - Default: `'#004F98'`
- `color`: `string` (optional) - Default: `'#FFF'`
- `border`: `string` (optional) - Default: `'none'`
- `borderRadius`: `string` (optional) - Default: `'16px'`
- `fontSize`: `string` (optional) - Default: `'16px'`
- `fontFamily`: `string` (optional) - Default: `'Verdana, Geneva, Tahoma, sans-serif'`
- `fontWeight`: `string` (optional) - Default: `'700'`
- `padding`: `string` (optional) - Default: `'8px 16px'`

Here's an example using `AndroidFrame`:

```tsx
<AndroidFrame
  screenshotList={screenshotList}
  deviceColor="#A6A6A6"
  orientation="portrait"
  statusBar={{ mode: "light" }}
  buttonStyles={{
    backgroundColor: "#1DCDFE",
  }}
/>
```

### Using with Next.js

If you're incorporating React-Framify into a Next.js project, you'll need to handle images a bit differently due to Next.js's image optimization features. Here's how you can do it:

```tsx
"use client"

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
      <AndroidFrame
        screenshotList={screenshotList}
        deviceColor="#A6A6A6"
        orientation="portrait"
        statusBar={{ mode: "light" }}
        buttonStyles={{
          backgroundColor: "#1DCDFE",
        }}
      />
    </>
  )
}
```

Feel free to explore additional customization options for `buttonStyles`.

### Implementing Screenshots

Showcasing screenshots in a normal React.js project versus a Next.js project is straightforward. If you're using Next.js, handle images as StaticImageData for optimal performance.

## Preview

Check out the [YouTube showcase](https://youtu.be/_KoRix1OtKc?si=x34T8xTuyOIlbuFQ) for a visual preview of React-Framify in action.

![Preview 1](/assets/how-to-img1.png)
![Preview 2](/assets/how-to-img2.png)

## License and Optional Support

React-Framify is open-source and available under the [GNU General Public License v3.0](/LICENSE).For information on how to contribute, please see our [Contributing Guidelines](/CONTRIBUTING.md). If you find our library useful, consider supporting [Hatem Soliman](https://hatemsoliman.dev) via [PayPal](https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US).

## Join the Journey

Join us on this exciting journey to make React-Framify the go-to library for all your app presentation needs. Your feedback and contributions are what make this project thrive. Let's create something amazing together!

---

Feel free to adapt and expand upon this documentation as needed. Happy framing! 📱🚀

---

## Launch on Product Hunt 🚀

We're excited to announce that **React-Framify** is now live on Product Hunt! If you love our library and want to support us, please check out our Product Hunt page. Your upvotes and feedback are greatly appreciated!

[![Product Hunt Badge](https://img.shields.io/badge/Product%20Hunt-Follow%20Us%20On%20PH-orange?style=for-the-badge&logo=product-hunt&logoColor=white)](https://www.producthunt.com/posts/react-framify)

### Product Preview

Here are a few sneak peeks at what you can do with React-Framify:

![Preview 1](/assets/product-hunt-img1.png)
![Preview 2](/assets/product-hunt-img2.png)

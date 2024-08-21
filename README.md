# React-Framify

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
npm install react-framify@2.0.0
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

- `screenshotList`: An array of screenshot URLs.
- `deviceColor`: Customize the device frame color (optional).
- `orientation`: Set to `"portrait"` or `"landscape"` (optional).
- `statusBar`: Specify the status bar mode (light or dark).
- `buttonStyles`: Customize button styles (optional).

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

Check out the [YouTube showcase](https://youtu.be/your-youtube-link) for a visual preview of React-Framify in action.

## License and Optional Support

React-Framify is open-source and available under the [GNU General Public License v3.0](/LICENSE). If you find our library useful, consider supporting [Hatem Soliman](https://hatemsoliman.dev) via [PayPal](https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US).

## Join the Journey

Join us on this exciting journey to make React-Framify the go-to library for all your app presentation needs. Your feedback and contributions are what make this project thrive. Let's create something amazing together!

---

Feel free to adapt and expand upon this documentation as needed. Happy framing! 📱🚀

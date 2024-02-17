# React-Framify

React-Framify is a lightweight and versatile React component library that provides device framesets for showcasing screenshots and images.

## Features

- Supports the iPhone 14 Pro frameset.
- Enables easy navigation between multiple screenshots or images.
- Provides touch swipe gestures for seamless image browsing.
- Optimized for performance and smooth animations.
- Compatible with both ReactJS and ReactTS.

## Installation

You can install React-Framify using npm:

```bash
npm install react-framify
```

## Usage

Here’s a basic example of how to use the PhoneFrame component in your React application:

```
import { PhoneFrame } from 'react-framify';

const screenshotList = [
  'screenshot1.png',
  'screenshot2.png',
  'screenshot3.png',
];

function MyApp() {
  return <PhoneFrame screenshotList={screenshotList} />;
}

export default MyApp;
```

## License

React-Framify is licensed under the GNU General Public License v3.0. See the LICENSE file for more information.
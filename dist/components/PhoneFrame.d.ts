import React from 'react';
import '../styles/styles.css';
interface PhoneFrameProps {
    screenshotList: string[];
    phoneColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    statusBar: 'light' | 'dark';
}
export default function PhoneFrame({ screenshotList, phoneColor, buttonColor, buttonTextColor, statusBar, }: PhoneFrameProps): React.JSX.Element;
export {};

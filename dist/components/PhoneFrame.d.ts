import React from 'react';
import '../styles/styles.css';
interface PhoneFrameProps {
    screenshotList: string[];
    phoneColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
}
export default function PhoneFrame({ screenshotList, phoneColor, buttonColor, buttonTextColor }: PhoneFrameProps): React.JSX.Element;
export {};

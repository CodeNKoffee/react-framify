export interface StatusBarProps {
    mode: 'light' | 'dark';
}
export interface DeviceFrameProps {
    screenshotList: string[];
    statusBar: StatusBarProps;
    orientation?: 'portrait' | 'landscape';
    deviceColor?: string;
    buttonStyles?: {
        backgroundColor?: string;
        color?: string;
        border?: string;
        borderRadius?: string;
        fontSize?: string;
        fontFamily?: string;
        fontWeight?: string;
        padding?: string;
    };
}

export interface StatusBarProps {
    mode: 'light' | 'dark';
}
export interface DeviceFrameProps {
    statusBar: StatusBarProps;
    orientation?: 'portrait' | 'landscape';
    deviceColor?: string;
    screenshotList: string[];
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
export interface PaginationButtonsProps {
    screenshotList: string[];
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
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
}

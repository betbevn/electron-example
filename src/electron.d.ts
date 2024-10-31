export declare global {
  interface Window {
    electronAPI: {
      onSetText: (callback: (text: string) => void) => void;
    };
  }
}

import Toast from 'react-native-toast-message';

export const showToast = (type: 'success' | 'error', message: string) => {
  Toast.show({
    type,
    text1: message,
    position: 'top', // or 'bottom'
    visibilityTime: 3000, // 3 seconds
    autoHide: true,
    topOffset: 50,
  });
};

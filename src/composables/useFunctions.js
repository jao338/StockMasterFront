import { ref } from 'vue';

export default function useFunctions() {
  const formatDate = (date, format = 'YYYY-MM-DD') => {
    return dayjs(date).format(format);
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard');
    }).catch((err) => {
      alert('Failed to copy: ', err);
    });
  };

  return {
    formatDate,
    debounce,
    copyToClipboard,
  };
}

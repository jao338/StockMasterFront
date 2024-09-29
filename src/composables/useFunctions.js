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

  const transformAccessType = (accessType) => {
    switch (accessType) {
      case 1:
        return "ADM"
        break;
      case 2:
        return "Gerente"
        break;
      case 3:
        return "Normal"
        break;

      default:
        break;
    }
  };

  const transformStatus = (accessType) => {
    switch (accessType) {
      case 0:
        return 'Inativo'
        break;
      case 1:
        return 'Ativo'
        break;

      default:
        break;
    }
  };

  return {
    formatDate,
    debounce,
    copyToClipboard,
    transformAccessType,
    transformStatus
  };
}

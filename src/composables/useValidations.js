import { useI18n } from "vue-i18n";

export default function useValidations() {
  const { t } = useI18n();

  const requiredField = (val) => {
    return (val && val.length > 0) || t("campo_obrigatorio");
  };

  const emailFormat = (val) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(val) || t("formato_invalido");
  };

  const minLength = (val, length) => {
    return (val && val.length >= length) || t("tamanho_minimo", { length });
  };

  const maxLength = (val, length) => {
    return (val && val.length <= length) || t("tamanho_maximo", { length });
  };

  const passwordStrength = (val) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return (
      passwordPattern.test(val) ||
      t("senha_invalida")
    );
  };

  const phoneNumber = (val) => {
    const phonePattern = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
    return phonePattern.test(val) || t("telefone_invalido");
  };
  
  return {
    requiredField,
    emailFormat,
    minLength,
    maxLength,
    passwordStrength,
    phoneNumber,
    maskInput,
  };
}

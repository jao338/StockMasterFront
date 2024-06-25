import { useI18n } from "vue-i18n";

export default function Validations() {
  const { t } = useI18n();

  const requiredField = (val) => {
    return (val && val.length > 0) || t("campo_obrigatorio");
  };

  return {
    requiredField,
  };
}

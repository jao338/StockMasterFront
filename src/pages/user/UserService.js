import useApi from "src/composables/useApi.js";

export default function UserService(url) {
  const { index, post, update, destroy } = useApi(url);

  return {
    post,
    index,
    update,
    destroy
  };
}

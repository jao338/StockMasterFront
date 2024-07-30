import { useAuthStore } from 'src/stores/authStore';

const Guard = {
  isLogged: (to, from, next) => {
    const authStore = useAuthStore();
    if (!authStore.token) {
      next({ name: 'login' });
    } else {
      next();
    }
  },
  isAdmin: (to, from, next) => {
    const authStore = useAuthStore();
    if (authStore.user && authStore.user.role === 'admin') {
      next();
    } else {
      next({ name: 'login' });
    }
  }
};

export default Guard;

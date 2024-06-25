import { Cookies } from 'quasar'

export default {
  redirect(to, from, next) {
    const logged = Cookies.get('logged')

    if (logged) {
      return next('/home')
    }

    return next('/login')
  },
}

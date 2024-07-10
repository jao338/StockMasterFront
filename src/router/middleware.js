import { Cookies } from 'quasar'

export default {
  isLogged(to, from, next) {
    const logged = Cookies.get('logged')

    if (logged) {
      return next('/home')
    }

    return next('/login')
  },

  //  Permite acessar a rota apenas se o usuário já estiver logado e ele for um gerente ou administrador
  isManager(to, from, next) {

  },
}

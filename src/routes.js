
import index from './views/index'
import proyects from './views/proyects.vue'

const routes= [
    {path: '/', component: index, name: 'index'},
    {path: '/proyects', component: proyects, name: 'proyects'}


]
export default routes;
import App from "../App.vue"
import Courses from "../views/CoursesPage.vue"
import HelloWorld from "../components/HelloWOrld.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: HelloWorld},
    { path: '/courses', component: Courses},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
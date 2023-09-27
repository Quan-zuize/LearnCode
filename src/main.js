import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import Tactics from './components/Tactics.vue';
import PlayerDetails from './components/PlayerDetails.vue';

const app = createApp(App);

const routes = [
  { path: '/', component: Tactics },
  { path: '/player/:id', component: PlayerDetails, props: true },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

app.use(router).mount('#app'); 

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.to" :class="{active: isActive(route.to)}">{{route.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const routes = [
      {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
      },
      {
        path: '/adminlogin',
        name: 'AdminLogin',
        component: AdminLogin
      },
      {
        path: '/adminhome',
        name: 'AdminHome',
        component: AdminHome
      },
      {
        path: '/manage',
        name: 'Manage',
        component: Manage
      },
      {
        path: '/thankyou',
        name: 'ThankYou',
        component: ThankYou
      },
      {
        path: '/contactus',
        name: 'ContactUs',
        component: ContactUs
      },
    ];
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = path => path === activeRoute.value
    return { isActive, routes };
  }
};
</script>

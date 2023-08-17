<template>
  <NavBar/>
  <Hero/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar-Comp.vue'
import Hero from '@/components/Hero-Comp.vue'

export default {
  name: 'HomeView',
  components: {
     NavBar,Hero
  }
}
</script>

<template>
  <Header />
  <Organizations />
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from '@/components/Header.vue'
  import Organizations from '@/components/Organizations.vue'
  export default defineComponent({
  components: {
    Header,
    Organizations
  },
})
</script>
<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "/src/layout/AuthLayout.vue";


export default {
  components: {
    AuthLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = "AuthLayout" // default
      }
    },
  },
};
</script>
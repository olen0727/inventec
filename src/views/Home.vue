<template>
  <div class="home">
    <VRIframe />
    <router-link to="NewsletterSign-up">test</router-link>
  </div>
</template>
<script>
import VRIframe from '@/components/VRIframe.vue'
export default {
  name: "Home",
  components: {
    VRIframe
  },
};
</script>

<style lang="scss">
.home {
  
}
</style>
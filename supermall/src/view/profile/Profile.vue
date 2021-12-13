<template>
  <div>
    <profile-top />
    <profile-center />
  </div>
</template>

<script>
import ProfileTop from "./profileComps/ProfileTop.vue";
import ProfileCenter from "./profileComps/ProfileCenter.vue";
export default {
  components: {
    ProfileTop,
    ProfileCenter,
  },
};
</script>
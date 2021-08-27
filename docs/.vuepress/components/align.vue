<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    center: Boolean,
    left: Boolean,
    right: Boolean,
  },
  computed: {
    style() {
      var dir;
      if (this.center) {
        dir = "center";
      } else if (this.left) {
        dir = "left";
      } else if (this.right) {
        dir = "right";
      } else {
        dir = "center";
      }
      return "text-align: " + dir + ";";
    },
  },
};
</script>

<style>
</style>

// <align center>
// <action icon="thumbs up" link="/zh/" extra="positive basic">LinkLiang</action>
// <action text="" link="/zh/">YYDS</action>
// </align>
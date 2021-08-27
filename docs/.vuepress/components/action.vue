<template>
  <RouterLink :to="link">
    <button class="ui button" :class="[extra, icon]">
      <i v-if="icon" :class="icon" class="icon"></i>
    <slot />
    </button>
  </RouterLink>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    extra: String,
    icon: String
  },
};
</script>

<style>
/* https://semantic-ui.com/elements/button.html */
/* @import url(https://cdn.bootcdn.net/ajax/libs/semantic-ui/2.4.1/components/button.min.css); */
@import url(https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/components/button.min.css);
/* https://semantic-ui.com/elements/icon.html */
/* @import url(https://cdn.bootcdn.net/ajax/libs/semantic-ui/2.4.1/components/icon.min.css); */
@import url(https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/components/icon.min.css);
</style>

// <action icon="thumbs up" link="/zh/" extra="positive basic">LinkLiang</action>
// <action text="" link="/zh/">YYDS</action>
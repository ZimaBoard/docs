<template>
  <RouterLink v-if="isRouterLink" :to="link">
    <button class="ui button" :class="[extra, icon]">
      <i v-if="icon" :class="icon" class="icon"></i>
      <slot></slot>
    </button>
  </RouterLink>
  <a v-if="!isRouterLink" :href="link" target="_blank">
    <button class="ui button" :class="[extra, icon]">
      <i v-if="icon" :class="icon" class="icon"></i>
      <slot></slot>
    </button>
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    extra: String,
    icon: String,
    // _blank: Boolean,
    // _parent: Boolean,
    // _top: Boolean,
  },
  computed: {
    isRouterLink() {
      return !this.link.toString().startsWith("http")
    },
    // _target() {
    //   var target;
    //   if (this._blank) {
    //     target = "_blank";
    //   } else if (this._parent) {
    //     target = "_parent";
    //   } else if (this._top) {
    //     target = "_top";
    //   } else {
    //     target = "_self";
    //   }
    //   return target;
    // },
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
// <action link="/zh/">YYDS</action>
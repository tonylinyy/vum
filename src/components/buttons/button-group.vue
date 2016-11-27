<template>
  <div class="buttons-group"
       :class="[
          type ? 'button-' + type : '',
          size ? 'button-' + size : '',
          {
            'button-large' : large,
            'button-round' : round,
            'button-bordered' : bordered
          }
       ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'default'  // default, light, danger, warning, success
      },
      size: {
        type: String,
        default: 'medium' // small, medium(default), large
      },
      round: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less">
  @import './button-group.less';
</style>

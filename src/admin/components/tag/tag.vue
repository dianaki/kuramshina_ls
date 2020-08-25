<template>
  <div 
    :class="['tag', {interactive: interactive}]"
  >
    <span>{{title}}</span>
    <button
      class="remove" 
      type="button"
      v-on="$listeners"
      v-if="interactive"
    >
    </button>
  </div>
</template>

<script>
import icon from "../icon";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    interactive: Boolean
  },
  components: {
    icon
  }
}

</script>

<style lang="postcss" scoped src="./tag.pcss"></style>
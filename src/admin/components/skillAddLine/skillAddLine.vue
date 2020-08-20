<template>
  <div class="skill-add-line-component">
    <div class="add-title">
       <app-input placeholder="Новый навык" />
    </div>
    <div class="add-percent">
      <app-input type="number" min="0" max="100" maxlength="3" />
    </div>
    <div class="add-button">
      <round-button type="round" />
    </div>
  </div> 
</template>

<script>
import input from "../input";
import button from "../button";

export default {
  components: {
    appInput: input,
    roundButton: button,
  }
}
</script>

<style lang="postcss" src="./skillAddLine.pcss"></style>
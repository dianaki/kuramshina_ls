<template>
  <ul class="tags-list-component">
    <li class="item" v-for="tag in tagsArray" :key="tag">
      <tag :title="tag" />
    </li>
  </ul>
</template>

<script>
  import tag from "../tag";
  export default {
    components: {tag},
    props: {
      tags: String,
    },
    computed: {
      tagsArray() {
        const tagsAdder = this.tags.split(",");
        return tagsAdder.filter(tag => {
          return tag !== ' ' && tag !== '';
        })
      }
    }
  }
</script>

<style scoped lang="postcss">
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  li {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
</style>
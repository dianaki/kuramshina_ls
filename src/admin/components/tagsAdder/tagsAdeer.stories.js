import tagsAdder from "./tagsAdder.vue";

export default {
  title: "tagsAdder",
  components: {tagsAdder}
}

export const defaultView = () => ({
  components: {tagsAdder},
  data() {
    return {
      tags: "Html, CSS, JavaScript"
    }
  },
  template: `
    <tags-adder v-model="tags" />
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backrounds: [
      {name: 'grey', value: '#F3F6F9', default: true},
    ],
  },
};


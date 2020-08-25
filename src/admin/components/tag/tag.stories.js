import tag from "./tag.vue";

export default {
  title: "tag",
  components: {tag}
}

export const defaultView = () => ({
  components: {tag},
  template: `
    <tag title="tag"/>
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      {name: 'grey', value: '#F3F6F9', default: true},
    ],
  },
};

export const interactiveView = () => ({
  components: {tag},
  template: `
    <tag title="tag" interactive />
  `
});

interactiveView.story = {
  name: "С контролом",
  parameters: {
    backgrounds: [
      {name: 'grey', value: '#F3F6F9', default: true},
    ],
  },
};

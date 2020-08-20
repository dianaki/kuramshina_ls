<template>
  <card slim>
    <edit-line slot="title" v-model="title" editModeByDefault/>
    <template slot="content">
      <ul class="skills" slot="content">
        <li class="item" v-for="skill in skills" :key="skill.id">
          <skill :skill="skill" />
        </li>
      </ul>
      <div class="bottom-line">
        <skill-add-line />
      </div>
    </template>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

const skills = [
  {id: 0, title: "Html", percent: 80},
  {id: 1, title: "CSS", percent: 70},  
  {id: 2, title: "JavaScript", percent: 30},
]
export default {
  components: {
    card, editLine, skill,
    skillAddLine
  },
  data() {
    return {
      title: "",
      skills
    }
  }
}
</script>

<style lang="postcss">

  .item {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .bottom-line  {
    padding-top: 60px;
    padding-left: 20%;
    margin-top: auto;
  }

</style>
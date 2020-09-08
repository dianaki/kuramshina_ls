<template>
  <div class="user-component">
    <avatar :size="size" :src="userPic" />
    <div class="userdata">
      <div class="username">{{name}}</div>
      <div class="occ">{{occ}}</div>
    </div>
  </div>
</template>

<script>
import avatar from "../avatar";
export default {
  props: {
    size: {
      type: Number,
      default: 2.7,
    },
    occ: String,
    name: String,
    photo: String,
  },
  components: {
    avatar
  },
  computed: {
    userPic() {
      if (this.photo) return `https://webdev-api.loftschool.com/${this.photo}`;
        return require("../../../images/content/cat.png").default;
    }
  }
}
</script>

<style lang="postcss">

.user-component {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: inherit;
}
.username {
  font-size: 18px;
  line-height: 25px;
}
.userdata {
  margin-left: 8px;
  font-weight: bold;
}
.occ {
  font-size: 16px;
  line-height: 22px;
  color: rgba(65, 76, 99, 0.5);
}

</style>
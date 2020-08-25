<template>
  <div class="user-component">
    <avatar size="2.7" :src="userPic" />
    <div class="username">Владимир Астаханов</div>
  </div>
</template>

<script>
import avatar from "../avatar";
export default {
  components: {
    avatar
  },
  computed: {
    userPic() {
      return require("../../../images/content/user.jpg").default
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
  color: #ffffff;
}

.username {
  margin-left: 18px;
}

</style>
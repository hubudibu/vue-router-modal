<template>
  <div class="modal">
    <h1>This is a modal</h1>
    <button class="close" @click="handleClose">close</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MOne',
  methods: {
    handleClose () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .modal {
    padding: 2em;
  }
  .close {
    position: absolute;
    top: .5em;
    right: .5em;
  }
</style>

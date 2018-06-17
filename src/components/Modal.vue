<template>
  <div>
    <h1>This is a modal</h1>
    <button @click="handleClose">close</button>
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

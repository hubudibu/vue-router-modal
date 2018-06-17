<template>
  <div>
    <div class="body">
      <router-link :to="{ name: 'One'}">One</router-link>
      <router-link :to="{ name: 'Two'}">Two</router-link>
      <router-view />
    </div>
    <router-view class="modal" name="modal"/>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
.modal {
  border: 4px solid;
  background: white;
  /* I'd rather see what's under
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  box-shadow: 0 0 0 1000px rgba(0,0,0,.5);
}
.modal:empty {
  display: none;
}
</style>

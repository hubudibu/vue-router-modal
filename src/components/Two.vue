<template>
  <div>
    <h1>View Two</h1>
    <router-link :to="{ name: 'MOne'}">open popup</router-link>
  </div>
</template>

<script>
export default {
  name: 'Two'
}
</script>

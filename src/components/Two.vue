<template>
  <div>
    <h1>View Two</h1>
    <router-link :to="{ name: 'Three'}">open three in popup</router-link>
  </div>
</template>

<script>
export default {
  name: 'Two'
}
</script>

<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" placeholder="just an input for example" />
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: String
  }
}
</script>

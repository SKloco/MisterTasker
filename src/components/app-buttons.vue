<template>
  <section class="app-buttons">
    <button class="btn blue" @click="toggleWorker(true)">Start task worker</button>
    <button class="btn red">Clear Tasks</button>
    <button class="btn green">Create new task</button>
    <button class="btn yellow" @click="toggleWorker(false)">Stop task worker</button>
  </section>
</template>

<script>
export default {
  created() {},
  data() {
    return {}
  },
  methods: {
    toggleWorker(isStarted) {
      console.log('app-btns cmp');
      this.$store.dispatch({ type: 'toggleWorker', isStarted })
    },
  },
  computed: {},
  components: {},
  unmounted() {},
}
</script>

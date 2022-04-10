<template>
  <main>
    <appButtons />
    <filter />
    <task-list />
    <taskSave />
  </main>
</template>

<script>
import appButtons from './app-buttons.vue'
import taskList from './task-list.vue'
import taskSave from './create-task.vue'
export default {
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: { appButtons, taskList, taskSave },
  unmounted() {},
}
</script>

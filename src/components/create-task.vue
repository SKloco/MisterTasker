<template>
  <form @submit.prevent="createTask">
    <label>Task Title:</label>
    <input type="text" v-model="newTask.title" name="taskTitle" />
    <label>Description:</label>
    <input type="text" v-model="newTask.description" name="description" />
    <label>importance:</label>
    <input type="number" v-model="newTask.importance" name="importance" min="1" max="3" />
    <button type="submit">Save</button>
  </form>
</template>

<script>
import { taskService } from '../services/task.service'
export default {
  data() {
    return {
      newTask: {},
    }
  },
  created() {
    this.newTask = taskService.getEmptyTask()
  },
  methods: {
    createTask() {
      this.$store.dispatch({ type: 'saveTask', task: this.newTask })
      this.newTask=taskService.getEmptyTask()
    },
  },
  computed: {},
  components: {},
  unmounted() {},
}
</script>

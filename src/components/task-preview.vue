<template>
  <tr class="task-preview">
    <td>{{ task.title }}</td>
    <td>{{ task.importance }}</td>
    <td>{{ task.status }}</td>
    <td>{{ task.triesCount }}</td>
    <td>
      <button v-if="task.status !== 'running'" @click="startAction">
        {{ action }}
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    startAction() {
      if (this.task.status === 'new' || this.task.status === 'failed') this.start()
      else if (this.task.status === 'done') this.delete()
    },
    start() {
      this.$store.dispatch({ type: 'startTask', taskId: this.task._id })
    },
    retry() {},
    delete() {},
  },
  computed: {
    action() {
      if (this.task.status === 'new') return 'Start'
      if (this.task.status === 'failed') return 'Retry'
      if (this.task.status === 'done') return 'Delete'
    },
  },
  components: {},
  unmounted() {},
}
</script>

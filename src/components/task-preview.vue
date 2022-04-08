<template>
  <section class="task-preview">
    <table>
      <tr>
        <td>{{ task.title }}</td>
        <td class="text-center">{{ task.importance }}</td>
        <td :class="task.status">{{ task.status }}</td>
        <td class="text-center">{{ task.triesCount }}</td>
        <td class="text-center">
          <button :class="task.status" v-if="task.status !== 'running'" @click="startAction">
            {{ action }}
          </button>
        </td>
      </tr>
    </table>
  </section>
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
      console.log('starting')
    },
    retry() {},
    delete() {
      this.$store.dispatch({ type: 'removeTask', taskId: this.task._id })
      console.log('removing')
    },
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

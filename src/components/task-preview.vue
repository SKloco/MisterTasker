<template>
  <section class="task-preview">
    <table>
      <tr>
        <td>{{ task.title }}</td>
        <td>{{ task.importance }}</td>
        <td>{{ task.status }}</td>
        <td>{{ task.triesCount }}</td>
        <td>
          <button v-if="task.status !== 'running' ">
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
  methods: {},
  computed: {
    action() {
      if (this.task.status === 'new') return 'Start'
      if (this.task.status === 'falied') return 'Retry'
      if (this.task.status === 'done') return 'Delete'
    },
  },
  components: {},
  unmounted() {},
}
</script>

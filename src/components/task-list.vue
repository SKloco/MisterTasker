<template>
  <section class="task-list">
    <table>
      <tr>
        <th>Title</th>
        <th>Importance</th>
        <th>Status</th>
        <th>TriesCount</th>
        <th>Actions</th>
      </tr>
    </table>
        <task-preview  v-for="task in tasks" :key="task._id" :task="task"/>
  </section>
</template>

<script>
import taskPreview from './task-preview.vue'
export default {
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
  },
  components: { taskPreview },
  unmounted() {},
}
</script>

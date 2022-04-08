<template>
  <section class="task-preview">
    <table>
      <tr>
        <td>{{ task.title }}</td>
        <td>{{ task.importance }}</td>
        <td>{{ task.status }}</td>
        <td>{{ task.triesCount }}</td>
        <td>{{ actions }}</td>
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
  computed: {},
  components: {},
  unmounted() {},
}
</script>

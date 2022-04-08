<template>
 <main>
    <appButtons/>
    <filter/>
    <task-list/>
 </main>
</template>

<script>
import appButtons from './app-buttons.vue'
import taskList from './task-list.vue'
export default {
  created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {appButtons,taskList,},
  unmounted() {},
}
</script>
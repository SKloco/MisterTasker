<template>
  <section>
    <app-header />
    <app-Main />
    <ul>
      <li v-for="task in tasks" :key="task._id" >{{task.title}}</li>
      <!-- <task-preview v-for="task in tasks" :key="task._id" :task="task"/> -->
    </ul>
    <!-- <div>{{tasks}}</div> -->
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
import appMain from './components/app-main.vue'
export default {
  name: 'cmp name',
  //  props: {
  //    car: Object,
  //  },
  created() {
    this.$store.dispatch({ type: 'loadTasks' })
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {
    tasks(){
      return this.$store.getters.tasks
    }
  },
  components: {
    appHeader,
    appMain,
  },
  unmounted() {},
}
</script>

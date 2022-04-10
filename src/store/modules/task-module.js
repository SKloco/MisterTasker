import { taskService } from '../../services/task.service'
import { socketService, SOCKET_EVENT_TASK_CHANGED } from '../../services/socket.service'

export default {
  state: {
    tasks: [],
    filterBy: { stock: 'All' },
  },
  getters: {
    tasks(state) {
      return JSON.parse(JSON.stringify(state.tasks))
    },
  },
  mutations: {
    setTasks(state, { tasks }) {
      state.tasks = tasks
    },
    removeTask(state, { taskId }) {
      const idx = state.tasks.findIndex((task) => task._id === taskId)
      state.tasks.splice(idx, 1)
    },
    saveTask(state, { savedTask }) {
      const idx = state.tasks.findIndex((currTask) => currTask._id === savedTask._id)
      if (idx !== -1) state.tasks.splice(idx, 1, savedTask)
      else state.tasks.push(savedTask)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadTasks({ commit, state }) {
      commit({ type: 'setIsLoading', isLoading: true })
      try {
        const tasks = await taskService.query(state.filterBy)
        commit({ type: 'setTasks', tasks })
        socketService.off(SOCKET_EVENT_TASK_CHANGED)
        socketService.on(SOCKET_EVENT_TASK_CHANGED, (task) => {
          commit({ type: 'saveTask', savedTask: task })
          console.log('socket in front work')
        })
      } catch (err) {
        console.log('err', err)
      } finally {
        commit({ type: 'setIsLoading', isLoading: false })
      }
    },
    async removeTask({ commit }, { taskId }) {
      try {
        await taskService.remove(taskId)
        commit({ type: 'removeTask', taskId })
      } catch (err) {
        console.log('err', err)
      }
    },
    async getTaskById(_, { taskId }) {
      try {
        const task = await taskService.getById(taskId)
        return JSON.parse(JSON.stringify(task))
      } catch (err) {
        console.log('err', err)
      }
    },
    async saveTask({ commit }, { task }) {
      const newTask = JSON.parse(JSON.stringify(task))
      try {
        const savedTask = await taskService.save(newTask)
        commit({ type: 'saveTask', savedTask })
      } catch (err) {
        console.log('err', err)
      }
    },
    async filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadTasks' })
    },
    async startTask({ commit }, { taskId }) {
      try {
        const savedTask = await taskService.start(taskId)
        commit({ type: 'saveTask', savedTask })
      } catch (err) {
        console.log('new err', err)
        throw err
      }
    },
    async toggleWorker({ commit }, { isStarted }) {
      try {
        console.log('task-module')
        taskService.toggleWorker(isStarted)
      } catch (err) {
        console.log('new err', err)
        throw err
      }
    },
  },
}

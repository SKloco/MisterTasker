import { httpService } from './http.service'

// import { utilService } from './util.service'
const ENDPOINT = 'task'

export const taskService = {
  query,
  remove,
  save,
  getById,
  getEmptyTask,
  start,
  toggleWorker
}

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function getById(taskId) {
  return await httpService.get(`${ENDPOINT}/${taskId}`)
}

async function save(task) {
  return task._id ? await httpService.put(`${ENDPOINT}/${task._id}`, task) : await httpService.post(ENDPOINT + '/', task)
}

function remove(taskId) {
  return httpService.delete(`${ENDPOINT}/${taskId}`)
}

function start(taskId){
  return httpService.get(`${ENDPOINT}/${taskId}/start`)
}

function toggleWorker(isStarted){
  return httpService.get(`${ENDPOINT}/toggleWorker/${isStarted}`)
}

function getEmptyTask() {
  return {
    title: '',
    status: 'new',
    description: '',
    importance: 1,
    createdAt: Date.now(),
    lastTriedAt: '',
    triesCount: 0,
    doneAt: '',
    errors: [],
    lastTried: '',
  }
}

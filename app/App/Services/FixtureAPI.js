// @flow
import timeout from '../Helpers/timeout'
import ToDoFeature from '../Features/ToDo/index'

export default {
  getToDos: async () => {
    await timeout(1000)
    return { ok: true, data: ToDoFeature.fixtures?.success }
  }
}

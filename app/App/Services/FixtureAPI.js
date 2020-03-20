// @flow
import timeout from '../Helpers/timeout'

import UserFeature from '../Features/User'

export default {
  getUser: async () => {
    await timeout(1000)
    return { ok: true, data: UserFeature.fixtures?.success }
    // return { ok: false, data: UserFeature.fixtures.failure }
  }
}

export const state = () => ({
  lastUpdated: null
})

export const mutations = {
  updateLastUpdated: (state, payload) => {
    state.lastUpdated = new Date(payload)
  }
}

export const actions = {
  async getLastUpdated ({ state, commit }) {
    if (state.lastUpdated) {
      return
    }

    const commits = await fetch(
      'https://api.github.com/repos/pjlledo/compromis-design/commits'
    ).then(res => res.json())
    commit('updateLastUpdated', commits[0].commit.committer.date)
  }
}

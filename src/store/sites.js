const state = {
  currentSiteId: null,
  sites: [
    { id: 1, name: 'Site 1' },
    { id: 2, name: 'Site 2' },
    { id: 3, name: 'Site 3' }
  ]
}

const actions = {
	/**
	* Get all the sites from the API and save to the store.
	*/
	fetch ({ commit, state, getters }) {
		return fetch('http://url.to.api/sites').then(function(response) {
			return response.json()
		}).then((sites) => {
			// Set the state
			commit('set_sites', sites)			
		})
	}
}


const mutations = {
  set_sites (state, sites) {
    state.sites = sites
  },

  add_site (state, site) {
    state.sites.push(site)
  },

  update_site (state, site) {
    // Find the site in the list and overwrite the data
    state.sites = state.sites.map((curSite) => {
      if (curSite.id === site.id) {
        return site
      } else {
        return curSite
      }
    })
  },

  set_current_site_id (state, siteId) {
    state.currentSiteId = siteId
  }
}

const getters = {
  all (state) {
    return state.sites
  },

  current (state) {
    return state.sites.find(site => site.id === state.currentSiteId) || null
  }
}

export default { namespaced: true, state, actions, mutations, getters }
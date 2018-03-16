<template>
	<div>
		<h1>Hello World</h1>
		<ul>
			<li v-for="site in sites">{{ site.name }}</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	
export default {
  name: 'sites',
  computed: {
  	...mapGetters({
  		sites: 'sites/all'
  	})
  },
  mounted() {
  	this.$store.dispatch('sites/fetch')
  }
}
</script>

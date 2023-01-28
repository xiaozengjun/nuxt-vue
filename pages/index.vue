<template>
  <div>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
	<div v-html="content" @click="abc()">

	</div>
  </div>
</template>

<script>
  import {getDemoinfo} from '@/content/js/api.js'

  export default {
    components: {},
    data() {
      return {
        content: "",
		idnex: 1
      }
    },
    created() {
      getDemoinfo({
		  page: 1,
		  type: 'video'
	  }).then(res => {
        console.log(res)
        console.log(12346598789)
        this.content = res.data.result;
		console.log(this.content)
      }).catch(error => {
        console.log("error", error)
      })
    },
	methods: {
		abc() {
			this.idnex = this.idnex + 1
			getDemoinfo({
				page: this.idnex,
				type: 'video'
	  		}).then(res => {
				console.log(res)
				console.log(12346598789)
				this.content = res.data.result;

			}).catch(error => {
				console.log("error", error)
			})
		}
	}
  }
</script>
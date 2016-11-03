<template>
	<div class="topic-view">
		<div class="topic-list">
			<ul>
				<li class="topic-item" v-for="topic in topics">
					<span class="visit" title="点击量">{{topic.visit_count}}</span>
					<span class="title">
						<router-link :to="{name:'topic', params:{id:topic.id}}">{{topic.title}}</router-link>
					</span>
					<br>
					<span class="meta">
						<span class="by">by {{topic.author.loginname}}</span>
						<span class="time">{{topic.create_at}}</span>
						<span class="comment">| {{topic.reply_count}}条回复</span>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Loading from '../components/Loading.vue'

export default {
	data() {
		return {
			topics: [],
			loading: true
		}
	},
	watch: {
    	'$route' (to, from) {
    		this.getTopics()
    	}
    },
	methods: {
		getTopics: function() {
			let tab = this.$route.params.tab
			let url = ''
			switch(tab) {
				case 'all':
					url = 'topics'
					break
				case 'good':
					url = 'topics?tab=good'
					break
				case 'share':
					url = 'topics?tab=share'
					break
				case 'ask':
					url = 'topics?tab=ask'
					break
				case 'job':
					url = 'topics?tab=job'
					break
				default:
					url = 'topics'
			}
			this.$http.get(url)
				.then((response) => {
					this.topics = response.body.data
					this.loading = false
				})
		}
	},
	created() {
		this.getTopics()
	},
	components: {
		Loading
	}
}
</script>

<style>
	.topic-view {
		padding-top: 45px;
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}
	.topic-list {
		position: absolute;
		margin: 30px 0;
		width: 100%;
		transition: all .5s cubic-bezier(.55,0,.1,1);
		background-color: #fff;
		border-radius: 2px;
	}
	.topic-list ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.topic-item {
		background-color: #fff;
		padding: 20px 30px 20px 80px;
		border-bottom: 1px solid #eee;
		position: relative;
		line-height: 20px;
	}
	.topic-item .visit {
		color: #41b883;
		font-size: 1.1em;
		font-weight: 700;
		position: absolute;
		top: 50%;
		left: 0;
		width: 80px;
		text-align: center;
		margin-top: -10px;
	}
	.topic-item .meta {
		font-size: .83em;
		color: #999;
	}
</style>
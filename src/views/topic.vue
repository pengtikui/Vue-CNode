<template>
	<div class="item-view">
		<div class="item-view-header">
			<h1>{{topic.title}}</h1>
			<p class="meta">
				浏览{{topic.visit_count}}次 |
				by {{topic.author.loginname}}
				{{topic.create_at}}
			</p>
			<div class="content" v-html="topic.content"></div>
		</div>
		<div class="item-view-comments">
			<p class="item-view-comments-header">{{topic.reply_count}}条回复</p>
			<ul class="comment-children">
				<li class="comment" v-for="reply in topic.replies">
					<div class="by">by {{reply.author.loginname}} {{reply.create_at}}</div>
					<div class="text" v-html="reply.content"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			topic: [],
			loading: true
		}
	},
	methods: {
		getTopic: function() {
			let url = 'topic/' + this.$route.params.id
			this.$http.get(url)
				.then((response) => {
					this.topic = response.body.data
					this.loading = false
				})
		}
	},
	created() {
		this.getTopic()
	}
}
</script>

<style>
	.item-view {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}
	.item-view-header {
		background-color: #fff;
		padding: 5.5em 2em 1em;
		box-shadow: 0 1px 2px rgba(0,0,0,.1);
	}
	.item-view-header h1 {
		display: inline;
		font-size: 1.5em;
		margin: 0;
		margin-right: .5em;
		color: #34495e;
	}
	.item-view-header .meta {
		color: #999;
		font-size: .9em;
	}
	.item-view-header .content {
		border-top: 2px solid #eee;
		padding-top: 5px;
	}
	.item-view-comments {
		background-color: #fff;
		margin-top: 10px;
		padding: 0 2em .5em;
	}
	.item-view-comments-header {
		margin: 0;
		font-size: 1.1em;
		padding: 1em 0;
	}
	.comment-children {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.comment-children .comment {
		border-top: 1px solid #eee;
		position: relative;
	}
	.comment .by {
		color: #999;
		padding-bottom: 0;
		font-size: .9em;
		padding: 1em 0 0 0;
	}

	/* topic & comment style */
	.markdown-text img {
		max-width: 100%;
	}
	.markdown-text p {
		line-height: 1.6;
	}
	.markdown-text pre {
		font-size: 14px;
		border-radius: 2px;
		padding: 15px;
		margin: 20px -10px;
		background-color: #f7f7f7;
		overflow: auto;
		line-height: 1.45;
		color: #080;
	}
	.markdown-text blockquote {
		padding: 0 0 0 15px;
		margin: 0 0 20px;
		border-left: 5px solid #41b883;
	}
</style>
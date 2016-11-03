<template>
    <div id="app">
    	<header>
    		<div class="container">
    			<router-link to="/" title="CNode">
    				<img src="./assets/cnode_icon_32.png" class="logo" alt="CNode">
    			</router-link>
    			<router-link to="/all">全部</router-link>
    			<router-link to="/good">精华</router-link>
    			<router-link to="/share">分享</router-link>
    			<router-link to="/ask">问答</router-link>
    			<router-link to="/job">招聘</router-link>
    			<a href="https://github.com/pengtikui/Vue-CNode" target="_blank" class="github">Build with Vue.js</a>
    		</div>
    	</header>
    	<router-view></router-view>
    </div>
</template>

<style>
	body {
		font-size: 15px;
		background-color: #f2f3f5;
	}
	a {
		text-decoration: none;
		color: #34495e;
	}
	header {
		background-color: #41b883;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
	}
	header .container {
		max-width: 800px;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 15px 5px;
	}
	header .logo {
		height: 24px;
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	header a {
		color: hsla(0,0%,100%,.8);
		line-height: 24px;
		transition: color .15s ease;
		display: inline-block;
		vertical-align: middle;
		font-weight: 300;
		letter-spacing: .075em;
		margin-right: 1.8em;
	}
	header a:hover {
		color: #fff;
	}
	header .github {
		float: right;
		color: #fff;
		font-size: .9em;
		margin: 0;
	}
	header .router-link-active {
		color: #fff;
		font-weight: 400;
	}
	@media(max-width: 600px) {
		header .github {
			display: none;
		}
		header .container {
			padding-left: 18px;
		}
		header a {
			margin-right: 1.45em;
		}
		header .logo {
			margin-right: 0;
		}
		.topic-view {
			padding-top: 28px;
		}
	}
</style>
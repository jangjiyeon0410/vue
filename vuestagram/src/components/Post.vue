<template>
	<div class="post">
		<div class="post-header">
			<div
				class="profile"
				:style="{ backgroundImage: `url(${postingData.userImage} )` }"
			></div>
			<span class="profile-name">{{ postingData.name }}</span>
		</div>
		<div
			@click="$store.commit('clickedLikes')"
			:class="`post-body ${postingData.filter}`"
			:style="{ backgroundImage: `url(${postingData.postImage} )` }"
		></div>
		<div class="post-content">
			<p>{{ $store.state.likes }} Likes</p>
			<p>
				<strong>{{ postingData.name }}</strong> {{ postingData.content }}
			</p>
			<p class="date">{{ postingData.date }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostItems',
	props: {
		postingData: Array,
		selectedFilter: String,
	},
};
</script>

<style>
.post {
	width: 100%;
}
.profile {
	background-image: url('https://placeimg.com/100/100/arch');
	width: 30px;
	height: 30px;
	background-size: 100%;
	border-radius: 50%;
	float: left;
}
.profile-name {
	display: block;
	float: left;
	padding-left: 10px;
	padding-top: 7px;
	font-size: 14px;
}
.post-header {
	height: 30px;
	padding: 10px;
}
.post-body {
	background-position: center;
	background-size: cover;
	background-image: url('https://placeimg.com/640/480/animals');
	height: 450px;
}
.post-content {
	padding-left: 15px;
	padding-right: 15px;
	font-size: 14px;
}
.date {
	font-size: 11px;
	color: grey;
	margin-top: -8px;
}
</style>

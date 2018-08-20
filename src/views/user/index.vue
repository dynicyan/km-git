<template lang="pug">
#km-user
	.kmuser-info
		.kmuser-avator
			img(src='../../assets/picTx.png')
		.kmuser-detail
			h3.km-nickName KILL’LE
			ul.clearfix.km-personInfo
				li
					span 性别
					b 男
				li
					span 年龄
					b 28
				li
					span 国籍
					b China
				li
					span 现居
					b HaErbin
			p.km-signature
				span 个性签名：
				b 个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名
			el-button.send-mails 发送私信
	.kmuser-adv
		ul.clearfix.kmuser-Adlist
			li(v-for='item in 2')
				img(src='../../assets/userAdpic.jpg')
</template>

<script>
  export default {
    name: 'km-user'
  }
</script>

<style lang='stylus'>
#km-user
	text-align left
	.kmuser-adv
		width 300px
		float left
		margin-left 20px
		.kmuser-Adlist
			clear: both
			width 100%
			li
				float left
				width 100%
				height 300px
				margin-bottom 20px
				&:last-child
					margin-bottom 0
				img
					width 100%
					height auto
	.kmuser-info
		width 880px
		height 618px
		padding 30px
		float left
		border-left 6px solid #014266
		background #fff
		.kmuser-avator
			float left
			width 78px
			height 78px
			border 1px solid #979797
			border-radius 100%
			img
				width 100%
				height 100%
		.kmuser-detail
			float left
			margin-left 18px
			h3.km-nickName
				margin 19px 0
				line-height 40px
				font-size 28px
				color #000
			ul.km-personInfo
				width 320px
				clear both
				li
					width 160px
					float left
					margin-top 25px
					line-height 22px
					font-size 16px
					color #000
					span
						margin-right 20px
			.km-signature
				max-width 700px
				margin-top 45px
				line-height 22px
				font-size 16px
		.send-mails
			display: block
			width 210px
			line-height 60px
			padding 0
			margin 120px auto
			background-image linear-gradient(45deg, #23ABE2, #53D5F3)
			font-size 18px
			font-weight bold
			color #fff
			border 0 none
</style>

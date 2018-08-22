<template lang="pug">
#km-personal
	.personal-top
		.pt-left
			p.pl-public
				span 20
				b 发布
			p.pl-activity
				span 4
				b 参加活动
		.pt-middle
			router-link.corner(to='/user/personal') 完善个人资料
				i.el-icon-arrow-right
			p.person-avator
				img(src='../../assets/picTx.png')
			p.person-name Mildred Barnett
			ul.person-infolist
				li
					span CHINA
					b COUNTRY
				li
					span MALE
					b AGENT
				li 
					span 18
					b AGE
		.pt-right
			p.person-km
				span 204
				b KM 里程值
			.km-progress
				.km-default-bar
					i.active_car(style='left: calc(30% - 47px)')
					p.active_bar(style='width: 30%')
			el-button.km-button(icon='el-icon-question') 了解KM里程值
				i.el-icon-arrow-right
	.personal-bottom
		ul.menulist
			li
				router-link(to='/user/notices')
					.list-wrapper
						i.icon.icon-info
						span 我的消息
			li
				router-link(to='/user/wish')
					.list-wrapper
						i.icon.icon-activity
						span 我的活动
			li
				router-link(to='/user/notices')
					.list-wrapper
						i.icon.icon-order
						span 我的订单
			li
				router-link(to='/user/collect')
					.list-wrapper
						i.icon.icon-collect
						span 我的收藏
			li
				router-link(to='/user/address')
					.list-wrapper
						i.icon.icon-address
						span 我的地址管理
</template>

<script>
  export default {
    name: 'km-personal'
  }
</script>
<style lang='stylus'>
#km-personal
  box-shadow 0 2px 9px rgba(0, 0, 0, .15)
  width: 99%
  margin: 0 auto
  border-radius 5px
  overflow: hidden
  b
  	font-weight normal
	.personal-top
		width 100%
		display flex
		.pt-left
		.pt-middle
		.pt-right
			float left
			flex 1
		.pt-left
			.pl-public
				border-bottom 1px dashed #d9d9d9
			.pl-activity
			.pl-public
				padding 36px 0
				margin 0 30px
				span
					margin-bottom 10px
					line-height 42px
					font-size 30px
					color #014266
					display block
				b
					line-height 18px
					font-size 12px
		.pt-middle
			background #014266
			box-shadow 0 2px 20px rgba(1, 66, 102, .15)
			position relative
			border-radius 5px
			text-align center
			color #fff
			&:after
				content: ''
				position absolute
				bottom -10px
				height 30px
				left 0
				right 0
				border-radius 5px
				background #014266
			.corner
				position absolute
				top 10px
				right 10px
				font-size 14px
			.person-avator
				width 128px
				height 128px
				border-radius 100%
				display block
				margin 10px auto
				padding 58px
				position relative
				background rgba(255, 255, 255, .15)
				box-shadow rgba(255, 255, 255, .5) 0 0 2px
				&:before
					content ''
					position absolute
					width 72px
					height 72px
					background #57829A
					border-radius 100%
					top 50%
					left 0
					right 0
					margin 0 auto
					transform translateY(-50%)
				img
					position absolute
					top 50%
					transform translateY(-50%)
					left 0
					right 0
					width 70px
					height 70px
					margin 0 auto
					border-radius 100%
			.person-name 
				line-height 34px
				font-size 24px
			.person-infolist
				display inline-block
				margin-top 25px
				li
					padding 0 20px
					float left
					span
						line-height 22px
						font-size 16px
						display block
						margin-bottom 10px
					b
						line-height 20px
						font-size 14px
		.pt-right
			background url(../../assets/km-psign.svg) no-repeat left top
			padding-top 32px
			.person-km
				span
						line-height 56px
						font-size 40px
						display block
						margin-bottom 10px
						color #41C3EC
						font-weight 500
					b
						line-height 20px
						font-size 12px
			.km-progress
				position relative
				margin 50px 70px 25px 20px
				&:after
					content ''
					position absolute
					background url(../../assets/km-gift.svg) no-repeat left top
					width 70px
					height 70px
					background-size 70px 70px
					top -59px
					right -65px
				.km-default-bar
					width 100%
					height 11px
					background #ececec
					border-radius 5px
					box-shadow rgba(0,0,0,0.5) 0 2px 4px
					position relative
					.active_car
						position absolute
						left 0
						top -25px
						width 47px
						height 23px
						background url(../../assets/km-car.svg) no-repeat 0
						background-size cover
					.active_bar
						position absolute
						left 0
						top 0
						z-index 9
						height 11px
						border-radius 5px
						background linear-gradient(left, #53D5F3, #29ABE2)
						overflow hidden
						&:after
							content: ''
							position absolute
							left 0
							top -2px
							height 17px
							border-radius 5px
							background url(../../assets/activeBg.png) repeat
							background-size contain
							width 100%
			.km-button
				width 145px
				height 50px
				line-height 50px
				padding 0
				font-size 12px
				color #000
				&:hover
				&:focus
				&.is_active
					background #eee
					color #000
					border 1px solid #dcdfe6
				.el-icon-arrow-right
					margin-left 7px
	.personal-bottom
		ul.menulist
			display flex
			li
				float left
				flex 1
				height 232px
				background #262626
				color #fff
				&:nth-child(2n+2)
					background #3B3A3A
				a
					width 100%
					height 100%
					display block
					display flex
					align-items center
					justify-content center
				.list-wrapper
					height 75px
				span
					display block
					width 100%
					font-size 18px
					line-height 26px
					margin-top 15px
				i.icon
					width 32px
					height 32px
					display inline-block
				.icon-info
					background url(../../assets/km-info.svg)
					background-size cover
				.icon-activity
					background url(../../assets/km-activity.svg)
					background-size cover
				.icon-order
					background url(../../assets/km-order.svg)
					background-size cover
				.icon-collect
					background url(../../assets/km-collect.svg)
					background-size cover
				.icon-address
					background url(../../assets/km-address.svg)
</style>

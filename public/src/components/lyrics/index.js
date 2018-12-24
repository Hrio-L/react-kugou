import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Lyrics extends PureComponent{
	static defaultProps = {
		classPrefixer:'lyrics',
		currentTime:0,
		lyrics:`[00:00.46]虎二 - 勇敢面对
[00:01.38]作词：刘家泽
[00:02.26]作曲：尤起胜
[00:03.13]编曲：王中易、高漠伊
[00:04.60]制作人：尤起胜
[00:05.66]混音：虎二
[00:06.36]吉他：高漠伊
[00:07.28]和声编写：虎二
[00:08.34]和声：虎二
[00:09.05]监制：宝山、刘晓倩
[00:10.42]出品：晟宝（北京）文化传媒有限公司
[00:15.06]影子被拉长我静静看你走远
[00:21.69]再多的阻拦恐怕也无法逆转
[00:27.50]就这样你消失在视线
[00:34.23]就这样街灯陪我整晚
[00:41.83]不爱了的人说再多也不会变
[00:48.36]眼泪和孤单如期而至到身边
[00:54.29]一个人失眠寂寞陪着我聊天
[01:02.08]日出对着我说晚安
[01:07.68]勇敢面对每一个明天
[01:11.20]陪伤感走一遍
[01:14.61]这个过程谁都逃不掉
[01:17.90]不如顺其自然
[01:20.81]幸福好坏与承诺无关
[01:24.64]我们谁都善变
[01:27.95]只不过我不舍得让你心酸
[01:48.50]不爱了的人说再多也不会变
[01:54.98]眼泪和孤单如期而至到身边
[02:00.99]一个人失眠寂寞陪着我聊天
[02:08.70]日出对着我说晚安
[02:14.22]勇敢面对每一个明天
[02:17.93]陪伤感走一遍
[02:21.22]这个过程谁都逃不掉
[02:24.67]不如顺其自然
[02:27.50]幸福好坏与承诺无关
[02:31.30]我们谁都善变
[02:34.49]只不过我不舍得让你心酸
[02:51.25]不如顺其自然
[02:54.15]幸福好坏与承诺无关
[02:57.94]我们谁都善变
[03:01.33]只不过我不舍得让你心酸
`
	}
	translateTime = timeStr => {
		const minute = parseFloat(timeStr.split(':')[0]) * 60
		const second = parseFloat(timeStr.split(':')[1])
		return minute + second
	}
	getLyricsData = () => {
		const {lyrics} = this.props
		const lyricsData = lyrics.trim().split(/\r|\n/g)
		const matchTimeReg =/[^]+]/g
		return lyricsData.map((d,i) => {
			const lyricsTime = d.match(matchTimeReg)[0]
			const lyricsStr =d.split(lyricsTime)[1]
			return ({
				time:this.translateTime(lyricsTime.replace(/\[|\]/g,'')),
				text:lyricsStr
			})
		})
	}
	renderLyrics = () => {
		const lyricsData = this.getLyricsData()
		const {currentTime} = this.props
		return lyricsData.map((d,i) => (
			<li key={i}>{d.text}</li>
		))
	}
	render(){
		const {classPrefixer,className} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<div className={classes}>
				<ul>
					{this.renderLyrics()}
				</ul>
			</div>
		)
	}
}

export default Lyrics
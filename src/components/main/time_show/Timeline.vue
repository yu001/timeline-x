<template lang="jade">
div#timeline
  div.timeline-wrapper
    div.timeline
      div.timeline-records(v-for="(record, i) in this.$store.state.timeRecords")
        div.side-info
          span.year {{ record.year }}
        div.timeline-icon(:class="iconBg[Number.parseInt(i%12)]")
          div.month {{ record.month }} 月
            span.date {{ record.date }}
        div.timeline-content
          h2.day {{ days[record.day] }}
          div.details
            p(v-for="(item, index) in record.items") {{ index + 1 + '. ' + item.content + ', ' + item.time + 'h.' }}
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
      iconBg: [ // 图标背景颜色
        'iconbg-turqoise',
        'iconbg-black',
        'iconbg-brown',
        'iconbg-indigo',
        'iconbg-purple',
        'iconbg-grey',
        'iconbg-blue',
        'iconbg-red',
        'iconbg-orange',
        'iconbg-opal',
        'iconbg-green',
        'iconbg-pink'
      ],
      days: [ // 星期几中文映射
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
    }
  }
}
</script>

<style lang="sass">
#timeline
  width: 100%
  height: 100%
  position: absolute
  .timeline-wrapper, .timeline-wrapper *
    box-sizing: border-box
    padding: 0
    margin: 0
  .timeline-wrapper
    width: 90%
    font-family: Arial,Helvetica,sans-serif
    font-weight: 400
    position: absolute
    top: 3em
    left: 5%
    .timeline
      padding: 15px 0
      position: relative
      .timeline-records
        margin: 0
        border: 0 none
        padding: 0 45px 4px 0
        width: 50%
        .side-info
          left: 50%
          margin: 34px 0 0 38px
          position: absolute
          font-weight: 375
          color: white
        .timeline-icon
          background: #fff
          line-height: 52px
          position: absolute
          text-align: center
          margin: 16px 0 0 -26px
          border-radius: 30px
          color: #FFF
          font-size: 14px
          height: 52px
          width: 52px
          left: 50%
          z-index: 10
          .month
            font-family: Arial,Helvetica,sans-serif
            line-height: 22px
            font-weight: 375
            font-size: 10px
            padding: 4px 0
            .date
              display: block
              line-height: 9px
              font-weight: 525
              font-size: 22px
        .iconbg-turqoise
          background: #28C0C6
        .iconbg-black
          background: #2F3949
        .iconbg-brown
          background: #E46D2B
        .iconbg-indigo
          background: #3F51B5
        .iconbg-purple
          background: #9C27B0
        .iconbg-grey
          background: #7E8DA3
        .iconbg-blue
          background: #2196F3
        .iconbg-red
          background: #F25B5A
        .iconbg-orange
          background: #F0CA45
        .iconbg-opal
          background: #76BBDA
        .iconbg-green
          background: #75CE66
        .iconbg-pink
          background: #F282C7
        .iconbg-turqoise, .iconbg-red, .iconbg-opal, .iconbg-blue,
        .iconbg-grey, .iconbg-pink, .iconbg-green, .iconbg-black,
        .iconbg-brown, .iconbg-purple, .iconbg-indigo, .iconbg-orange
          box-shadow: 0 0 0 4px white,inset 0 2px 0 rgba(0,0,0,0.30),0 3px 0 4px rgba(0,0,0,0.30)
        .timeline-content
          background: rgba(0, 0, 0, 0.2)
          color: white
          position: relative
          transition: all .4s
          border-radius: 10px
          padding: 22px
          box-shadow: 0px -3px 3px rgba(0,0,0,0.30) inset
          .day
            font-size: 14px
            font-family: Arial,Helvetica,sans-serif
            margin: 0 0 8px
            color: #00efc8
            font-weight: 375
          .details
            margin: 0
            p
              margin: 0
              line-height: 18px
              font-size: 14px
              font-weight: 300
        .timeline-content:after
          content: ""
          display: block
          border: 15px solid transparent
          border-left-color: rgba(0, 0, 0, 0.3)
          position: absolute
          right: -30px
          top: 26px
      .timeline-records:nth-child(even)
        margin-left: 50%
        padding: 0 0 4px 45px
        .side-info
          left: auto
          margin: 18px 38px 0 0
          text-align: right
          right: 50%
        .timeline-content:before
          border: 15px solid transparent
          border-right-color: rgba(0, 0, 0, 0.3)
          left: -30px
          right: auto
        .timeline-content:after
          border: 14px solid transparent
          border-right-color: rgba(0, 0, 0, 0.3)
          left: -27px
          right: auto
    .timeline:before
      content: ""
      background-color: rgba(0, 0, 0, 0.2)
      border-radius: 2px
      margin-left: -2px
      position: absolute
      display: block
      height: 100%
      width: 4px
      left: 50%
      top: 0
</style>
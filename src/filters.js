import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function(date) {
    // return moment(date).format('YYYY-MM-DD h:mm:ss')
    moment.locale('zh-CN')
    return moment(date).fromNow()
})
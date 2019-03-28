import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/default.config'

// base library
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

Vue.use(Antd)
Vue.use(VueStorage, config.storage)
import Vue from 'vue';
import Router from 'vue-router';
import UploadPanel from './views/UploadPanel';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'uploadpanel',
      component: UploadPanel,
      meta: {
        title: 'File upload'
      }
    }
  ]
})

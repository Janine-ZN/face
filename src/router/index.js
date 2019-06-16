import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import VideoPreview from '@/components/views/video-preview/VideoPreview.vue'

Vue.use(Router)

// 配置路由词典
export default new Router({
  routes: [
    // 页面默认加载登录界面
    {
      path: '/', name:'login',component: Login
    },
    // 与登录界面同级的路由 —— 主页面
    {
      // 一级路由
      path: '/main',
      name: 'main',
      // 组件懒加载
      component: () => import('@/components/Main.vue'),
      // 二級路由
      children: [
        // 默认加载 —— 视频预览
        {
          path: '/',
          name: 'video-preview',
          component: VideoPreview,
        },
        // 视频预览
        {
          path: 'video-preview',
          name: 'video-preview',
          component: () => import('@/components/views/video-preview/VideoPreview.vue'),
        },
        // 人脸抓拍
        {
          path: 'face-capture',
          name: 'face-capture',
          component: () => import('@/components/views/face-capture/FaceCapture.vue'),
        },
        // 人脸库配置
        {
          path: 'face-libs-configs',
          name: 'face-libs-configs',
          component: () => import('@/components/views/face-libs/FaceLibsConfigs.vue'),
        },
        // 系统设置
        {
          path: 'system-setting',
          name: 'system-setting',
          component: () => import('@/components/views/system-setting/SystemSetting.vue'),
        }
      ]
    },
    // 找不到路由默认加载的页面或跳转到指定页面
    { path: '*', component: ()=>import('@/components/404') }
  ]
  
})

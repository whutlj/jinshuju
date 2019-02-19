import pageRoutes from './config/router.config';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: pageRoutes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { 
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true
      },
      title: 'jinshuju',
      dll: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
        
          /components\//,
        ],
      },
    }],
  ],
}

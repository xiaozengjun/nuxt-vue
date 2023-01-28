Nuxt.js 通用 vue.js  ssr

SSR : 服务器渲染 - 服务器返回html

SPA: VUE SPA(单页面)  客户端渲染 - 返回数据客户端生成html

适应场景: SSR : 新闻, 博客等需要搜索引擎  SPA: 后台管理,不需要搜索引擎

## 配置项

修改启动地址为ip地址

```
  // package.json中加入
  "config": {
    "nuxt": {
      "host": "10.168.1.224",
      "port": "8085"
    }
  },
```

配置全局css

1.在assets里面加上css 2.再去nuxt.config.js设置css

```
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/normailze.css'
  ],
```

## 路由跳转

pages下面的index.vue为主页面 跳转方式为: 

```
<nuxt-link :to="{name: 'index'}">HOME</nuxt-link>
```

其他子页面, 创建方式: pages -> about-> index.vue, 这个时候如果使用a链接跳转就是href="/about" 或者 

```
// 自动寻找about下的index.vue
<nuxt-link :to="{name: 'about'}">ABOUT</nuxt-link>
```

参数传递: 

```
// 传
<nuxt-link :to="{name: 'news', params: {newsID:3306}}">NEWS</nuxt-link>
// 接收
<p>newsID: {{$route.params.newsID}}</p>
```

## 动态路由

这里用新闻页面来做比喻: 从新闻首页跳转到新闻详情页面, 往往只需要一个id参数做查询或区分

新建新闻详情页 , 文件名字必须 _ 开头 如接口id 文件名为 : '' _id.vue ", 且在新闻页的文件夹内

跳转的时候使用

```
<li><a href="news/123">111111</a></li>
<li><a href="news/abc">222222</a></li>
// 或者-id
<li><nuxt-link :to="{name: 'news-id', params: {id:123}}">news-28888888</nuxt-link></li>

```

这个时候跳转至详情页路由为: 'http://10.168.1.224:8085/news/123'

路由验证:  这里正则验证必须为数字,否则去404页面

```
validate({params}) {
    return /^\d+$/.test(params.id);
}
```



## 路由切换动画效果

前提是必须使用nuxt-link来做跳转, 而且跳转首页不能使用/ 而是/index

全局:  在全局css中加入代码, 

```
.page-enter-active, .page-leave-active {
    transition: opacity 2s;
}
.page-enter , .page-leave-active {
    opacity: 0;
}
```

个例: 在全局中加入代码, 与上面不同的地方是page代表全部,, test是自己设置的

```
.test-enter-active,.test-leave-active{
    transition: all 2s;
    font-size: 12px;
}
.test-enter,.test-leave-active{
    opacity: 0;
    font-size: 40px;
}
```

需要的vue文件中加入(注意是transition, 不是transitions)

```
<script>
export default {
    transition: 'test'
}
</script>
```





## 默认模板和默认布局( '没什么屌用')

默认模板: 根目录下加app.html如下就每个页面都加上了12345789 

```
<!DOCTYPE html>
<html lang="en">
<head>
    {{HEAD}}
</head>
<body>
    <p>123456789789</p>
    {{ APP }}
</body>
</html>
```



## 错误页面设置

在layouts中新建error.vue文件, 如果没有layouts则自己新建文件夹, 再到pages的index.vue中设置如下代码

```
 export default { 
   layout: 'error'
 }
```





## 个性meta标签

如新闻页,title可以设置为路由参数,做变化

```
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'description',
                    name: 'news1',
                    content: '我i的世界'
                }
            ]
        }
    },
```

## asyncData的使用方法

相当于在data函数里面写入了一个info: ''数据''

```
<script>
import axios from 'axios'
export default {
    data () {
        return {
            
        };
    },
    asyncData() {
        return axios.git('请求地址')
        .then((res)=> {
            return {info: res.data}
        })
    },
}
</script>
```


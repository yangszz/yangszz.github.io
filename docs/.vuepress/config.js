import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    // 请不要忘记设置默认语言
    lang: 'zh-CN',
    theme: plumeTheme({
        logo: '/images/yangszz_logo2.jpg',
        navbar: [
            {text: '首页', link: '/', icon: 'material-symbols:home-outline'},
            {text: '博客', link: '/blog/', icon: 'material-symbols:article-outline'},
        ],
        avatar: {
            url: '/images/yangszz_logo2.jpg',
            name: 'yangszz',
            description: '稍后等于永不！',
            circle: true, // 是否为圆形头像
        },
        notes: {
            link: '/', dir: 'notes', notes: [
                {
                    dir: 'rust',
                    link: '/rust/',
                    sidebar: [
                        {text: '简介', items: ['rust']}
                    ]
                }
            ]
        },
    }),
    bundler: viteBundler(),
})
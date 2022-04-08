module.exports = {
  base: "/huangxifang/",
  // 站点配置
  lang: 'en-US',
  title: '黄西方个人博客',
  description: '个人博客，记录工作内容点滴',
  debug: true,
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
    navbar: [
      {
        text: 'PHP',
        children: [
          {
            text: '时间处理',
            link: '/php/wechatTime.md',
          },
          {
            text: 'ThinkPHP',
            children: [
              {
                text: 'TP5定时任务',
                link: '/php/thinkphp/cron.md',
              },
              {
                text: 'TP6安装think-swoole',
                link: '/php/thinkphp/swoole.md',
              },
            ]
          }
        ]
      },
      {
        text: 'Linux',
        children: [
          {
            text: 'Linux常用命令',
            link: '/linux/command.md'
          }
        ],
      },
      {
        text: 'NPM',
        children: [
          {
            text: 'npm设置淘宝镜像',
            link: '/npm/configRegistry.md',
          }, {
            text: 'Yarn安装',
            link: '/yarn/install.md',
          }
        ]
      },
      {
        text: 'Git',
        children: [
          {
            text: 'Git常用命令',
            link: '/git/common.md',
          },
          {
            text: 'Git开发流程建议',
            link: '/git/development.md',
          }
        ]
      }
    ],
    sidebar: {
      '/php/': [
        {
          text: '指南',
          children: ['/php/wechatTime.md'],
        },
        {
          text: 'ThinkPHP',
          children: [
            '/php/thinkphp/cron.md',
            '/php/thinkphp/swoole.md',
          ],
        },
      ],
    },
    repo: 'https://huangxifang.github.io'
  },
  dev: {
    open: true
  }
}
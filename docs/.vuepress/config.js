const { copyCode } = require("vuepress-plugin-copy-code2");
module.exports = {
  base: "/",
  // 站点配置
  lang: 'zh-CN',
  title: '黄西方个人博客',
  description: '个人博客，记录工作内容点滴',
  debug: true,
  port: 8899,
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
    navbar: [
      {
        text: 'PHP',
        link: '/php/wechatTime.md',
        children: [
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
        ]
      },
      {
        text: 'Linux',
        children: [
          '/linux/command.md',
          '/linux/docker-qinglong-jd.md',
          '/linux/vmware/install.md',
          '/linux/vmware/connect-mysql.md',
        ],
      },
      {
        text: 'NPM',
        children: [
          '/npm/configRegistry.md',
          '/yarn/install.md'
        ]
      },
      {
        text: 'Redis',
        children: [
          '/redis/command.md',
          '/redis/redis-cache.md'
        ],
      },
      {
        text: 'Yii',
        children: [
          '/yii/not-use-gii.md'
        ],
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
    /* sidebar: {
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
      '/linux/': [
        {
          children: [
            '/linux/command.md',
            '/linux/vmware/install.md',
            '/linux/vmware/set-dir-share.md',
            '/linux/vmware/connect-mysql.md',
          ],
        }
      ],
    }, */
    repo: 'https://huangxifang.github.io',
    smoothScroll: true,
    lastUpdated: '上次更新', // string | boolean
  },
  dev: {
    open: true
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        placeholder: '搜索',
      },
    ],
    copyCode({
      // 插件选项
    }),
  ]
}

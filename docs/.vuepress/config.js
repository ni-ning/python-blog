module.exports = {
    title: 'Python小站',
    description: 'Python学习知识点笔记博客',
    themeConfig: {
        // 标题栏导航
        nav: [
          { text: '首页', link: '/' },
          { text: 'Python基础理论', link: '/python/' },
          { text: 'Python高级编程', link: 'https://advance-python.readthedocs.io/zh_CN/latest/' },
          { text: '设计模式', link: '/pattern/' },
          { text: '源码分析', link: '/code/' },
          { text: '企业工具', link: '/tool/' },
          { text: '前端入门', link: '/frontend/' },
          // {
          //   text: '选择语言',
          //   ariaLabel: 'Language Menu',
          //   items: [
          //     { text: '简体中文', link: '/language/chinese/' },
          //     { text: 'Japanese', link: '/language/japanese/'},
          //     { text: 'English', link: '/language/english/'}
          //   ]
          // }
        ],

        // 不不同的页面组来显示不同的侧边栏，需要页面文件组织结构相对应
        sidebar: {
          '/pattern/': [
            '',
            'simple-factory',
            'factory-method',
            'singleton',
            'adapter',
            'bridge',
            'composite',
            'facade',
            'proxy',
            'resp-chain',
            'observer',
            'strategy',
            'template',

          ],

        },
        sidebarDepth: 0,
        displayAllHeaders: false, // 默认值：false
        lastUpdated: '上次更新', // string | boolean
        // smoothScroll: true,
      }
  }
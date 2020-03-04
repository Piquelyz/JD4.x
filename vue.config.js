module.exports = {
  configureWebpack: {
    devServer: {
      port: 8089,
      open: true,

      //mock data
      before(app) {
        let userpool = [{
            username: 'yongzhi',
            password: '666666'
          },
          {
            username: 'yongzhi2',
            password: '666666'
          }
        ]

        app.get('/api/register', (req, res) => {
          // es6结构赋值
          const {
            username,
            password
          } = req.query
          const userlength = userpool.filter(u => u.username == username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })

        // 登录接口
        let tokenKey = 'happy666'
        app.get('/api/login', (req, res) => {
            const {
              username,
              password
            } = req.query
            if (username == 'yongzhi' && password == '666666' || username == 'yongzhi2' && password == '666666') {
              res.json({
                code: 0,
                message: '登陆成功',
                token: tokenKey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
              })
            } else {
              res.json({
                code: 1,
                message: '账号或密码错误'
              })
            }
          }),

          //首页轮播图数据接口
          app.get('/api/banner', (req, res) => {
            res.json({
              data: [{
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                }
              ]
            })
          }),

          //滚动分类接口
          app.get('/api/rollinglist', (req, res) => {
            res.json({
              data: [
                [{
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  }
                ],
                [{
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  },
                  {
                    url: 'https://m.jd.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                    label: '京东超市'
                  },
                  {
                    url: 'http://www.didichuxing.com/',
                    image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                    label: '数码电器'
                  }
                ]
              ]
            })
          }),

          //滚动分类接口
          app.get('/api/classify', (req, res) => {
            switch (req.query.type) {
              case '0':
                res.json({
                  data: [{
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                  ]
                });
                break;

              case '1':
                res.json({
                  data: [{
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                      label: '数码电器'
                    },
                    {
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                      label: '数码电器'
                    },
                  ]
                });
                break;

              case '2':
                res.json({
                  data: [{
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
                      label: '京东超市'
                    },
                    {
                      url: 'http://www.didichuxing.com/',
                      image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png',
                      label: '数码电器'
                    },
                  ]
                });
                break;
            }
          })

      }
    }
  },


  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
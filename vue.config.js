module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,
            open: true,

            //mock data
            before(app) {
            let userpool = [
              {username: 'yongzhi', password: '666666'},
              {username: 'yongzhi2', password: '666666'}
            ]
            app.get('/api/register', (req, res) => {
              // es6结构赋值
              const{ username, password} = req.query
              const userlength = userpool.filter(u => u.username==username).length
              if(userlength > 0) {
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

<template>
    <div>
        <img class="headerimg" src="
        https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/element.png" alt="">
        <cube-form
        :model="model"
        :schema="schema"
        @submit="submitHandler"
        ></cube-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    //用户名配置
                    {
                        type:'input',
                        modelKey:'username',
                        label: '用户名',
                        props: {
                            placeholder: '请输入用户名',
                        },
                        rules: {
                            //校验规则
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 15,
                        },
                        trigger: 'blur',
                        message: {
                            required: '用户名不能为空',
                            min: '用户名不能少于3个字符',
                            max: '用户名不能多于15个字符',
                        }
                    },

                    //密码配置
                    {
                        type:'input',
                        modelKey:'password',
                        label: '密码',
                        props: {
                            placeholder: '请输入用密码',
                            type: 'password',
                            eye: {
                                open: false,
                            },
                        },
                        rules: {
                            //校验规则
                            required: true,

                        },
                        trigger: 'blur',
                    },
                    {
                        type: 'submit',
                        label: '登陆'
                        
                    }
                ]
            }
        }
    },
    methods: {
        async submitHandler(e) {
            e.preventDefault();//防止冒泡
            // this.$http.get('/api/register', {params: this.model}).then(res =>{
            //     console.log(res.data.success)
            // }).catch(err=>{
            //     console.log(err)
            // })
            try {
                const result = await this.$http.get('/api/login', {params: this.model})
                if(result.code == '0') {
                    //commit 调用 mutation 方法, dispatch 调用action
                    this.$store.commit('settoken', result.token)
                    window.localStorage.setItem('token', result.token)
                    this.$router.replace({path:'index'})
                } else {
                    alert(result.message)
                }
            } catch(err) {
                console.log(err)
            }

        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%
</style>
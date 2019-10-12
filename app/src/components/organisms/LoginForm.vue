<template>
    <div class="c-login-form">
        <form @submit.prevent="submitForm">
            <Input
                name="login-id"
                type="text"
                placeholder="ユーザーID"
                v-model="userID"
            />
            <Input 
                name="login-password"
                type="password"
                placeholder="パスワード"
                v-model="password"
            />
            <Button
                type="submit"
                text="ログイン"
            />
        </form>
    </div>
</template>
<script>
import Input from '@/components/molecules/Input.vue'
import Button from '@/components/molecules/Button.vue'
export default {
    data() {
        return {
            userID: '',
            password: '',
            error: {
                id: false,
                password: false
            }
        }
    },
    props: ['onlogin'],
    components: {
        Input,
        Button
    },
    methods: {
        submitForm() {
            if(localStorage.token) {
                this.onlogin(localStorage.token)
                    .then(() => {
                        this.userID = ''
                        this.password = ''
                    })
            }else {
                if(!this.validate) {
                    return
                }else {
                    this.onlogin('', this.userID, this.password)
                        .then(() => {
                            this.userID = ''
                            this.password = ''
                        })
                }
            }           
        }
    },
    computed: {
        validate() {
            this.error.id = this.userID.match(/^[A-Za-z0-9]*$/)
            this.error.password = this.password.match(/^[A-Za-z0-9]*$/)
            if(this.error.id && this.error.password) {
                return true
            }else {
                return false
            }
        }
    }
}
</script>
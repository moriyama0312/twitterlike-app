<template>
    <div class="c-login-form">
        <form>
            <Input />
            <Input />
            <Button
                text="ログイン"
            />
        </form>
    </div>
</template>
<script>
import Input from '@/components/molecules/Input.vue'
import Button from '@/components/molecules/Button.vue'
export default {
    components: {
        Input,
        Button
    }
}
</script>
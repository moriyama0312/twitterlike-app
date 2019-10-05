<template>
    <div class="c-account-form">
        <form>
            <Button 
                text="アカウント作成"
            />
            <Button 
                text="ログイン"
            />
        </form>
    </div>
</template>
<script>
import Button from '@/components/molecules/Button.vue'
export default {
    components: {
        Button
    }  
}
</script>
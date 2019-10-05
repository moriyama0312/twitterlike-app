<template>
    <div id="p-top">
        <div id="p-top-contents">
            <div id="p-top-left">
                <div id="p-top-left__inner">
                    <div id="p-top-left-content">
                        <p class="text">あなたの「好き」をフォローしよう。
</p>
                        <p class="text">話題のトピックを追いかけましょう。</p>
                        <p class="text">Twitterに参加しましょう。</p>
                    </div>
                </div>
            </div>
            <div id="p-top-right">
                <div id="p-top-right__inner">
                    <div id="p-top-right-content">
                        <LoginForm />
                        <h1 id="p-top-right-ttl">「いま」起きていることを<br>見つけよう</h1>
                        <CreateAccountForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LoginForm from '../components/organisms/LoginForm'
import CreateAccountForm from '../components/organisms/CreateAccountFrom'
export default {
    components: {
        LoginForm,
        CreateAccountForm
    }
}
</script>
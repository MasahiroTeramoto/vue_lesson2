<template>
<div>
    <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8">
            <div class="input-info">
                <div class="has-background-primary-light input-info border">
                    <div class="tag is-link">STEP4</div>
                    <div class="subtitle is-5 has-text-centered">
                        以下の内容をご確認ください
                    </div>
                </div>
                <div class="box">
                    <div>
                        <label class="has-text-primary">-性別-</label><br />
                        <p>{{ myGender }}</p>
                    </div>
                    <div>
                        <label class="has-text-primary">-生年月日-</label><br />
                        <p>
                            <span>{{ myYear }}年</span>
                            <span>{{ myMonth }}月</span>
                            <span>{{ myDay }}日</span>
                        </p>
                    </div>
                    <div>
                        <label class="has-text-primary">現在、生命保険に加入されていますか？</label><br />
                        <p>{{ myJoinStatus }}</p>
                    </div>
                    <div>
                        <label class="has-text-primary">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</label><br />
                        <p>{{ myWarnStatus }}</p>
                    </div>
                    <div>
                        <label class="has-text-primary">-過去3年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-</label><br />
                        <p>{{ myPastStatus }}</p>
                    </div>
                    <div>
                        <label class="has-text-primary">-ご相談内容-</label><br />
                        <p>{{ myConsultationContent }}</p>
                    </div>
                </div>
            </div>
            <div class="buttons is-centered">
                <router-link to="/consulation">
                    <button class="button is-medium is-primary">前へ戻る ></button>
                </router-link>
                <button class="button is-medium is-primary">送信 ></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'myGender',
            'myYear',
            'myMonth',
            'myDay',
            'myJoinStatus',
            'myWarnStatus',
            'myPastStatus',
            'myConsultationContent'
        ])
    }
};
</script>

<style scoped>
.columns {
    margin-top: 50px;
}

.input-info {
    border: 0.1em solid #33cc66;
}

label,
p {
    margin: 20px;
}

.buttons {
    margin-top: 30px;
}
</style>

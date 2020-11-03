<template>
<div>
    <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8">
            <div class="input-info">
                <div class="has-background-primary-light input-info border">
                    <div class="tag is-link">STEP2</div>
                    <div class="subtitle is-5 has-text-centered">
                        以下にお答えください。
                    </div>
                </div>
                <div class="box">
                    <div>
                        <label class="has-text-primary">現在、生命保険に加入されていますか？</label><br />
                        <form name="join">
                            <input type="radio" name="join" value="はい" v-on:change="changeJoinStatus" />はい
                            <input type="radio" name="join" value="いいえ" v-on:change="changeJoinStatus" />いいえ
                        </form>
                    </div>
                    <div v-if="isJoinFlag">
                        <label class="has-text-primary">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</label><br />
                        <form name="warn">
                            <input type="radio" name="warn" value="はい" v-on:change="changeWarnStatus" />はい
                            <input type="radio" name="warn" value="いいえ" v-on:change="changeWarnStatus" />いいえ
                        </form>
                    </div>
                    <div v-if="isWarnedFlag">
                        <label class="has-text-primary">過去3年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</label><br />
                        <form name="past">
                            <input type="radio" name="past" value="はい" v-on:change="changePastStatus" />はい
                            <input type="radio" name="past" value="いいえ" v-on:change="changePastStatus" />いいえ
                        </form>
                    </div>
                </div>
            </div>
            <div class="buttons is-centered">
                <router-link to="/">
                    <button class="button is-medium is-primary">前へ戻る</button>
                </router-link>
                <router-link to="/consulation">
                    <button class="button is-medium is-primary">次へ進む</button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isJoinFlag: false,
            isWarnedFlag: false
        };
    },
    methods: {
        changeJoinStatus() {
            if (!this.isJoinFlag) this.isJoinFlag = !this.isJoinFlag;

            const joinStatus = document.join.join;
            joinStatus.forEach(d => {
                if (d.checked === true) {
                    console.log(d.value);
                    this.$store.dispatch('changeMyJoinStatus', d.value);
                }
            });
        },
        changeWarnStatus() {
            if (!this.isWarnedFlag) this.isWarnedFlag = !this.isWarnedFlag;

            const warnStatus = document.warn.warn;
            warnStatus.forEach(d => {
                if (d.checked === true) {
                    this.$store.dispatch('changeMyWarnStatus', d.value);
                }
            });
        },
        changePastStatus() {
            const PastStatus = document.past.past;
            PastStatus.forEach(d => {
                if (d.checked === true) {
                    this.$store.dispatch('changeMyPastStatus', d.value);
                }
            });
        }
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
form {
    margin: 20px;
}

.buttons {
    margin-top: 30px;
}
</style>

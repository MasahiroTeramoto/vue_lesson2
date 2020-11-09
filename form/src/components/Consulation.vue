<template>
<div>
    <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8">
            <div class="input-info">
                <div class="has-background-primary-light input-info border">
                    <div class="tag is-link">STEP3</div>
                    <div class="subtitle is-5 has-text-centered">
                        ご相談内容をご記入ください。
                    </div>
                </div>
                <div class="box">
                    <div>
                        <label class="has-text-primary">-ご相談内容-</label><br />
                        <form name="consulation">
                            <textarea class="textarea has-fixed-size" name="consulation" rows="20" cols="85" v-model="myConsultationContent"></textarea>
                        </form>
                    </div>
                </div>
            </div>
            <div class="buttons is-centered">
                <router-link to="/insurance">
                    <button class="button is-medium is-primary">前へ戻る ></button>
                </router-link>
                <button class="button is-medium is-primary">次へ進む ></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        myConsultationContent: {
            get() {
                return this.$store.state.myConsultationContent;
            },
            set(value) {
                this.$store.commit('changeMyConsultationContent', value);
            }
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

.text-area {
    width: 200px;
}
</style>

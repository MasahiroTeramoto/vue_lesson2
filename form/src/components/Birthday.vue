<template>
<div>
    <div class="columns">
        <div class="column is-2"></div>
        <div class="column is-8">
            <div class="input-info">
                <div class="has-background-primary-light input-info border">
                    <div class="tag is-link">STEP1</div>
                    <div class="subtitle is-5 has-text-centered">
                        お客様の情報を入力してください。
                    </div>
                </div>
                <div class="box">
                    <div>
                        <label class="has-text-primary">-性別-</label><br />
                        <form name="gender">
                            <input type="radio" name="gender" value="男性" v-model="myGender" />男性
                            <input type="radio" name="gender" value="女性" v-model="myGender" />女性
                        </form>
                    </div>
                    <div>
                        <label class="has-text-primary">-生年月日-</label><br />
                        <form name="birthday">
                            <select name="year" v-model="myYear">
                                <option v-for="year in years" :value="year.year" :key="year.year">
                                    {{ year.year }}({{ year.japanese }})
                                </option>
                            </select>
                            年
                            <select name="month" v-model="myMonth">
                                <option v-for="month in months" :value="month" :key="month">
                                    {{ month }}
                                </option>
                            </select>
                            月
                            <select name="day" v-model="myDay">
                                <option v-for="day in days" :value="day" :key="day">
                                    {{ day }}
                                </option>
                            </select>
                            日
                        </form>
                    </div>
                </div>
            </div>
            <div class="buttons is-centered">
                <router-link to="/insurance">
                    <button class="button is-medium is-primary">次へ進む ></button>
                </router-link>
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
        ...mapGetters(['years', 'months', 'days']),
        myGender: {
            get() {
                return this.$store.state.myGender;
            },
            set(value) {
                this.$store.commit('changeMyGender', value);
            }
        },
        myYear: {
            get() {
                return this.$store.state.myYear;
            },
            set(value) {
                this.$store.commit('changeMyYear', value);
            }
        },
        myMonth: {
            get() {
                return this.$store.state.myMonth;
            },
            set(value) {
                this.$store.commit('changeMyMonth', value);
            }
        },
        myDay: {
            get() {
                return this.$store.state.myDay;
            },
            set(value) {
                this.$store.commit('changeMyDay', value);
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
</style>

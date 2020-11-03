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
                            <input type="radio" name="gender" value="男性" v-on:change="changeMyGender('男性')" />男性
                            <input type="radio" name="gender" value="女性" v-on:change="changeMyGender('女性')" />女性
                        </form>
                    </div>
                    <div>
                        <label class="has-text-primary">-生年月日-</label><br />
                        <form name="birthday">
                            <select name="year" v-on:change="changeBirthday">
                                <option v-for="year in years" :key="year" :value="year">
                                    {{ year }}
                                </option>
                            </select>
                            年
                            <select name="month" v-on:change="changeBirthday">
                                <option v-for="month in months" :key="month">
                                    {{ month }}
                                </option>
                            </select>
                            月
                            <select name="day" v-on:change="changeBirthday">
                                <option v-for="day in days" :key="day">
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
    mapGetters,
    mapActions
} from 'vuex';

export default {
    computed: {
        ...mapGetters('birthday', ['years', 'months', 'days'])
    },
    methods: {
        ...mapActions(['changeMyGender']),
        changeBirthday() {
            const year = document.birthday.year;
            const month = document.birthday.month;
            const day = document.birthday.day;
            const birthYear = year.options[year.selectedIndex].value;
            const birthMonth = month.options[month.selectedIndex].value;
            const birthDay = day.options[day.selectedIndex].value;

            this.$store.dispatch('changeMyYear', birthYear);
            this.$store.dispatch('changeMyMonth', birthMonth);
            this.$store.dispatch('changeMyDay', birthDay);
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

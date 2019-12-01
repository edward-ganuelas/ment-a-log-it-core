<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2">
                    <nav>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/depression-checklist">Depression Checklist</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-10">
                    <div class="container-fluid">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import darkMode from './darkmode';
import persistedStore, { STORE_KEYS } from '@/localforage';
export default {
    data() {
        return {
            depressionChecklist: null
        }
    },
    methods: {
        async getPersistedDerpressionChecklist() {
            return persistedStore.getItem('depression-checklists')
        }
    },
    mounted() {
        darkMode.showWidget();
    },
    async beforeMount() {
        this.depressionChecklist = await this.getPersistedDerpressionChecklist();
        if (this.depressionChecklist ===  null) {
            await persistedStore.setItem(STORE_KEYS.DEPRESSION_CHECKLISTS, []);
            this.depressionChecklist = await this.getPersistedDerpressionChecklist();
        }
    }
}

</script>
<style lang="scss">
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
@import "./node_modules/bootstrap/scss/_buttons.scss";
@import url('https://fonts.googleapis.com/css?family=Nunito');
#app {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 1rem;
}
nav {
    text-align: left;
    padding: 30px;
    ul {
        list-style-type: none;
        padding-left: 0;
    }
    a {
        font-weight: bold;
        color: #2c3e50;
        text-align: center;
        &.router-link-exact-active {
        color: #0066ff;
        }
    }
}
textarea{
    border-color: #000;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 18px;
}
.show-text{
    padding-bottom: 18px;
}
.darkmode--activated  {
    p, h3, .vs__actions {
        color: #FFF;
    }
    #nav {
        a {
        color: #FFF;
        &.router-link-exact-active {
            color: #0066ff;
        }
        }
    }
    textarea, .vs__dropdown-toggle, .vs__dropdown-menu, .vs__dropdown-option {
        background-color: #484848;
        color: #FFF;
    }
    
    .vs__actions svg {
        fill: #FFF;
    }

}
</style>

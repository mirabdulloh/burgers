<template>
    <div class="navbar__section" @load="loadFunction">
        <ul class="nav__group">
            <RouterLink to="/" class="default__state">
                <li class="nav__group_item">
                    <i class="bx bx-home"></i>
                </li>
            </RouterLink>
            <RouterLink to="/message" class="default__state">
                <li class="nav__group_item">
                    <i class="bx bx-phone"></i>
                </li>
            </RouterLink>
            <RouterLink to="/news" class="default__state">
                <li class="nav__group_item">
                    <i class="bx bx-news"></i>
                </li>
            </RouterLink>
        </ul>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
const navbar = document.querySelector('.navbar_section')
export default {
    data() {
        return {
            homeState: true,
            messageState: false,
            bellState: false,
            callState: false,
        }
    },
    methods: {
        onToggleHome() {
            this.homeState = true;
            if (this.messageState || this.bellState || this.callState) {
                this.messageState = false,
                    this.bellState = false
                this.callState = false
            }
        },
        onToggleMessage() {
            this.messageState = true;
            if (this.homeState || this.bellState || this.callState) {
                this.bellState = false
                this.homeState = false
                this.callState = false
            }
        },
        onToggleBell() {
            this.bellState = true;
            if (this.homeState || this.messageState || this.callState) {
                this.homeState = false;
                this.messageState = false;
                this.callState = false
            }
        },
        onToggleCall() {
            this.callState = true;
            if (this.homeState || this.messageState || this.bellState) {
                this.homeState = false;
                this.messageState = false;
                this.bellState = false;
            }
        },
    },
    components: { RouterLink },
}
</script>
<style scoped lang="scss">
.navbar__section {
    background-color: #1F1D2B;
    width: 6.510416666666667vw;
    padding: 6.722689075630252vh 2.2408963585434174vh 2.2408963585434174vh 2.2408963585434174vh;
    text-align: center;
    .nav__group {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8.96358543417367vh;
    }
    .default__state {
        font-size: 4.481792717086835vh;
        cursor: pointer;
        border-radius: 1.0416666666666667vw 0 0 1.0416666666666667vw;
        color: #EA7C69;
        &.router-link-exact-active {
            color: #FFFFFF;
            padding: 2.2408963585434174vh;
            background-color: #252836;
            .nav__group_item {
                padding: 2.2408963585434174vh;
                border-radius: 0.6510416666666666vw;
                box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
                background-color: #EA7C69;
            }
        }
    }
    .nav_bg_active {
        background-color: #252836;
        width: 100%;
    }
}
@media (min-width: 0px) and (max-width: 520px) {
    .navbar__section {
        width: 100%;
        position: fixed;
        z-index: 100;
        background-color: #1f1e27c7;
        bottom: 0;
        padding: 0;
        .nav__group {
            flex-direction: row;
            justify-content: space-around;
            gap: 0;
            .nav__group_item {
                font-size: 1rem;
            }
        }
    }
}
.fixedNav {
    position: fixed;
    z-index: 99;
    bottom: 0;
    background-color: #2528367c;
}
@media (min-width: 520px) and (max-width: 768px) {
    .navbar__section {
        height: 100%;
        width: 100%;
        padding: .5rem;
        .nav__group {
            flex-direction: row;
            justify-content: space-between;
            gap: 0;
            .nav__group_item {
                font-size: 1.5rem;
            }
        }
    }
}
</style>
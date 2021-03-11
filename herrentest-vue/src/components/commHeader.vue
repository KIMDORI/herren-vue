<template>
    <header>
        <div class="wrap">
            <h1>공대남의 비즈니스 서비스</h1>
            <a href="#" class="go-store">
                <span>
                    <fa icon="shopping-cart" />
                </span>
                공비서 스토어
                <fa icon="angle-right" />
            </a>
            <div class="alarm">
                <button type="button">
                    알림
                </button>
                <span>0</span>
            </div>
            <ul class="header-menu">
                <li>
                    마이페이지(샵주)
                </li>
                <li class="">
                    이용권정보
                </li>
                <li>
                    로그아웃
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name:'commHeader'
}
</script>
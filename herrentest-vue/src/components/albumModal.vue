<template>
    <div id="albumModal" class="album-modal modal">
        <div class="modal-content">
            <div class="modal-header">
                <span id="albumNum">
                </span>
                <button type="button" @click="btnCloseModal" class="btn-close-modal">
                    상세창 닫기
                </button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button">
                    삭제
                </button>
                <button type="button">
                    수정
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'albumModal',
    methods:{
        btnCloseModal () {
            this.$emit('close',false);
        }
    }
}
</script>

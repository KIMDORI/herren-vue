<template>
    <div id="addArtModal" class="add-art-modal modal" >
        <div class="modal-content">
            <div class="modal-header">
                <span>
                    아트 등록
                </span>
                <button type="button" @click="btnCloseModal" class="btn-close-modal">
                    상세창 닫기
                </button>
            </div>
            <div class="modal-body">
                <input type="file" id="addImg" name="addimg" class="hidden" accept="image/jpeg,image/gif,image/png" @change="addImgFile">
                <label for="addImg" class="add-img-label">
                    <fa icon="plus-circle" />
                    이미지 찾아보기
                </label>
                <ul id="preview" class="preview">
                    <li v-for="(item,index) in addImgs" :key="index">
                        <img :src="addImgs[index]" alt="추가한 이미지">
                    </li>
                </ul>
                <table class="add-info">
                    <tbody>
                        <tr>
                            <td class="td-title">아트명</td>
                            <td>
                                <input type="text" placeholder="아트명 입력">
                                <span>
                                    * 필수
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="td-title">가격</td>
                            <td>
                                <input type="number" placeholder="가격 입력">
                                원
                            </td>
                        </tr>
                        <tr>
                            <td class="td-title">회원 가격</td>
                            <td>
                                <input type="number" placeholder="회원 가격 입력">
                                원
                            </td>
                        </tr>
                        <tr>
                            <td class="td-title">시술 시간</td>
                            <td>
                                <select name="hours" id="selectH">
                                    <option value="0">0시간</option>
                                    <option value="1" selected>1시간</option>
                                    <option value="2">2시간</option>
                                    <option value="3">3시간</option>
                                </select>
                                <select name="minute" id="selectM">
                                    <option value="0" selected>0분</option>
                                    <option value="30">30분</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="add-app">
                    <p>
                        <strong>
                            이 아트를 네일아트앱에 등록
                        </strong>
                        카테고리 등록시 앱 내 홍보가 가능합니다
                    </p>
                    <div class="switch-box">
                        <label class="switch">
                            <input type="checkbox" @click="switchBtn = !switchBtn">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="select-style-box" v-show="switchBtn === true">
                        <div>
                            <ul class="cate">
                                <li v-for="(item,index) in tabs" :key="index"
                                    :class="{'style-active':styleTab === index}" 
                                    @click="styleTab = index">
                                    {{tabs[index]}}
                                </li>
                            </ul>
                            <ul class="style" v-show="styleTab === 0">
                                <li v-for="(item, index) in styleList1" :key="index" @click="addTags(styleList1[index])">
                                    {{styleList1[index]}}
                                </li>
                            </ul>
                            <ul class="style" v-show="styleTab === 1">
                                <li v-for="(item, index) in styleList2" :key="index" @click="addTags(styleList2[index])">
                                    {{styleList2[index]}}
                                </li>
                            </ul>
                            <ul class="style" v-show="styleTab === 2">
                                <li v-for="(item, index) in styleList3" :key="index" @click="addTags(styleList3[index])">
                                    {{styleList3[index]}}
                                </li>
                            </ul>
                            <ul class="style" v-show="styleTab === 3">
                                <li v-for="(item, index) in styleList4" :key="index" @click="addTags(styleList4[index])">
                                    {{styleList4[index]}}
                                </li>
                            </ul>
                        </div>
                        <div class="style-selected">
                            <span v-for="(item,index) in tags" :key="index">
                                {{tags[index]}}
                                <button type="button" @click="btnDelStyle(index)">삭제</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button">
                    취소
                </button>
                <button type="button">
                    등록
                </button>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name:'addArtModal',
    data:function(){
        return{
            switchBtn:false,
            styleTab:0,
            tabs:['형태','컬러','디자인','컨셉'],
            styleList1:['라운드 스퀘어','라운드','오발(뾰족)','짧은 손톱','연장','패디'],
            styleList2:['화이트','블랙','베이지','레드','핑크','실버','옐로우 & 골드','그린'],
            styleList3:['라인','도트','프렌치','패턴 & 체크','그라데이션','글리터 & 필름','호피','캐릭터'],
            styleList4:['심플','큐트','러블리','웨딩','연예인','화려한','비비드','유니크'],
            tags:[],
            addImgs:[]
        }
    },
    methods:{
        addTags(name){
            this.tags.push(name);
        },
        addImgFile(e){
            let input = e.target;
            if(input.files && input.files[0]){
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.addImgs.push(e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        btnCloseModal(){
            this.addImgs = []
            this.tags = []
            this.$emit('close', false);
        },
        btnDelStyle(i){
            this.tags.splice(i,1);
        }
    }
}
</script>
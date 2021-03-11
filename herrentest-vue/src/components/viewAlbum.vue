<template>
    <div>
        <div id="contentView" class="content-view">
            <div class="view-album">
                <div class="album" v-for="(album, index) in albumList" :key="index" @click="openModal(album.cnt,album.num)">
                    <div class="album-photo">
                        <img :src="imgRequire(album.num)" alt="nail-photo">
                    </div>
                    <div class="album-info">
                        <p>{{album.num}}</p>
                        <p class="time">1시간 소요</p>
                        <p>
                            <span class="price">
                                {{album.price}}
                            </span>
                            <span class="price-for-member">
                                회원가: {{album.memPrice}}
                            </span>
                        </p>
                    </div>
                    <span class="img-cnt">
                        {{album.cnt}}
                    </span>
                </div>
            </div>
        </div>
        <albumModal v-show="albumModal" @close="closeModal"></albumModal>
    </div>
</template>
<script>
import albumModal from '../components/albumModal.vue'
export default {
    name:'viewAlbum',
    components: {
        albumModal
    },
    data:function(){
        return{
            albumList:[
                {
                    cnt:3,
                    num:12,
                    price:1000,
                    memPrice:12
                },
                {
                    cnt:2,
                    num:10,
                    price:1010,
                    memPrice:10
                },
                {
                    cnt:2,
                    num:9,
                    price:2000,
                    memPrice:9
                },
                {
                    cnt:1,
                    num:8,
                    price:1,
                    memPrice:12
                },
                {
                    
                    cnt:1,
                    num:7,
                    price:4000,
                    memPrice:12
                },
                {
                    
                    cnt:1,
                    num:6,
                    price:1000,
                    memPrice:1
                },
                {
                    
                    cnt:1,
                    num:5,
                    price:12,
                    memPrice:100
                },
                {
                    
                    cnt:1,
                    num:4,
                    price:1000,
                    memPrice:1
                },
                {
                    
                    cnt:1,
                    num:3,
                    price:1000,
                    memPrice:3
                },
                {
                    cnt:1,
                    num:2,
                    price:1000,
                    memPrice:1
                },
                {
                    cnt:1,
                    num:1,
                    price:2000,
                    memPrice:1
                }
            ],
            albumModal:false
        }
    },
    methods:{
        imgRequire(n){
            let src = require(`../assets/img/album${n}/1.jpg`);
            return src;
        },
        openModal(c,n){
            $('.flexslider').remove();
            $('#albumModal .modal-body').append('<div class="img-slide-box flexslider"><ul id="imgList" class="slides"></ul></div>');
            for(let i=1; i<c+1; i++){
                let img = require(`../assets/img/album${n}/${i}.jpg`);
                let list = `<li><a href="#"><img src="${img}"></a></li>`;
                $('#imgList').append(list);
            }
            $('#albumNum').text(n);
            this.albumModal = true;
            $('.flexslider').flexslider({
                animation: "slide",
                slideshowSpeed:4000,
                prevText:'이전',
                nextText:'다음',
                pauseOnAction:false
            });
        },
        closeModal(b){
            this.albumModal = b;
        }
    }
}
</script>
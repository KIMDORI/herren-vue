<template>
  <div id="app">
    <commHeader></commHeader>
    <div id="container">
      <sideBar></sideBar>
      <div class="content">
          <h2>우리샵 앨범</h2>
          <div class="view-filter">
              <ul>
                  <li :class="{'filter-active':viewMode}" @click="viewMode = true">앨범</li>
                  <li :class="{'filter-active':!viewMode}" @click="viewMode = false">이달의 아트</li>
              </ul>
          </div>
          <div class="add-new">
              <button type="button" v-if="viewMode" @click="addModal = true" >
                  새로운 아트 등록
              </button>
              <button type="button" v-else @click="addModal = true" >
                  이달의 아트 등록
              </button>
          </div>
          <viewAlbum v-if="viewMode"></viewAlbum>
          <viewMonthly v-else></viewMonthly>
          <pagenation></pagenation>
      </div>
    </div>
    <commFooter></commFooter>
    <addArtModal v-show="addModal" @close="closeModal"></addArtModal>
    <widget></widget>
  </div>
</template>

<script>
// import flexSlide from '@/FlexSlider/FlexSlider/jquery.flexslider.js'
import commHeader from './components/commHeader.vue'
import sideBar from './components/sideBar.vue'
import commFooter from './components/commFooter.vue'
import addArtModal from './components/addArtModal.vue'
import viewAlbum from './components/viewAlbum.vue'
import viewMonthly from './components/viewMonthly.vue'
import pagenation from './components/pagenation.vue'
import widget from './components/reserveWidget.vue'

export default {
  name: 'App',
  components: {
    commHeader,
    sideBar,
    commFooter,
    addArtModal,
    viewAlbum,
    viewMonthly,
    pagenation,
    widget
  },
  data:function(){
    return {
      viewMode:true,
      addModal:false
    }
  },
  methods:{
    closeModal(b){
        this.addModal = b;
    } 
  }
}
</script>

<style>
  @import './assets/normalize.css';
  @import './assets/reset.css';
  @import './assets/style.css';
  @import './FlexSlider/flexslider.css';
</style>
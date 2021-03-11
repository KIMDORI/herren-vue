<template>
    <div id="widget">
        <div class="reserve-widget" v-show="!widgetHidden">
            <div class="reserve-widget-open">
                <div class="widget-header">
                    <h3>
                        예약현황
                    </h3>
                    <ul class="filter">
                        <li :class="{'filter-active':filter}" @click="filter=!filter">오늘</li>
                        <li :class="{'filter-active':!filter}" @click="filter=!filter">날짜별</li>
                    </ul>
                    <button type="button" class="btn-close-widget" @click="widgetHidden = !widgetHidden">
                        위젯 접기
                    </button>
                </div>
                <div class="widget-body">
                    <div class="reserve-today" v-show="filter">
                        <nav>
                            <ul>
                                <li class="nav-active">전체(0)</li>
                                <li>예약(0)</li>
                                <li>시술중(0)</li>
                                <li>매출완료(0)</li>
                            </ul>
                        </nav>
                    </div>
                    <div class="reserve-date" v-show="!filter">
                        <div>
                            <ul id="calendar" class="calendar">
                                <li v-for="(item,index) in dates" :key="index" :class="item.color"
                                    @click="selectDate(item.date,item.daynum,item.ymdd)">
                                    <p class="day">
                                        {{item.day}}
                                    </p>
                                    <p class="date">
                                        {{item.date}}
                                    </p>
                                </li>
                            </ul>
                            <button type="button" class="btn-date-prev" @click="moveDate('prev')">
                                이전
                            </button>
                            <button type="button" class="btn-date-next" @click="moveDate('next')">
                                다음
                            </button>
                        </div>
                        <ul class="day-reserve-list" v-show="reserveToday">
                            <li v-for="(rList,index) in reserveList" :key="index">
                                <div class="time">
                                        {{today}}
                                    <strong>
                                        {{rList.time}}
                                    </strong>
                                </div>
                                <div class="info">
                                    <p class="customer">
                                        {{rList.customer}}
                                    </p>
                                    <p class="status">
                                        <span>
                                            {{rList.status}}
                                        </span>
                                        담당자
                                    </p>
                                    <button type="button" class="btn-edit">
                                        예약 정보 수정
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="widget-footer">
                    <pagenation></pagenation>
                </div>
            </div>
        </div>
        <div class="reserve-widget-close" v-show="widgetHidden" @click="widgetHidden = !widgetHidden">
            위젯 열기
        </div>
    </div>
</template>

<script>

import pagenation from '../components/pagenation.vue'
export default {
    name:'widget',
    data:function(){
        return{
            filter:true,
            filterAct:true,
            widgetHidden:false,
            reserveToday:true,
            today:'',
            reserveList:[
                {
                    time:'09:30',
                    customer:'김고객(눈썹>자연눈썹)',
                    status:'예약중'
                },
                {
                    time:'11:30',
                    customer:'윤고객(눈썹>남자눈썹)',
                    status:'예약중'
                }
            ],
            dates:[
                {
                    color:null, // 토요일, 일요일, 평일 구분
                    day:null, // 요일
                    date:null, // 일자
                    daynum:null, // 요일 순서
                    ymdd:null //년월일
                },
                {
                    color:null,
                    day:null,
                    date:null,
                    daynum:null,
                    ymdd:null
                },
                {
                    color:null,
                    day:null,
                    date:null,
                    daynum:null,
                    ymdd:null
                },
                {
                    color:null,
                    day:null,
                    date:null,
                    daynum:null,
                    ymdd:null
                },
                {
                    color:null,
                    day:null,
                    date:null,
                    daynum:null,
                    ymdd:null
                }
            ]
        }
    },
    components: {
        pagenation
    },
    methods:{
        makecalendar(){
            let now = new Date();
            let nowY = now.getFullYear();
            let nowM = now.getMonth()+1;
            let nowd = now.getDate();
            let nowday = now.getDay();
            if(nowM < 10){
                nowM = '0'+nowM;
            }
            let ymdd = String(nowY)+String(nowM)+String(nowd);
            this.today = `${nowM}.${nowd}`;
            this.makeDate(nowd,nowday,ymdd)
        },
        makeDate(date,day,ymdd){
            this.dates = [];
            let week = ['일','월','화','수','목','금','토'];

            for(let i=0; i<5; i++){
                let daynum = day-2;
                let d2 = date-2;

                if(daynum < 0){
                    daynum = daynum+7;
                }else if(daynum > 6){
                    daynum = daynum-7;
                }
                let d = week[daynum]; 
                // 3월만
                if(d2 < 1 || d2 > 31){
                    this.dates[i]={
                        color:null,
                        day:null,
                        date:null,
                        daynum:null,
                        ymdd:null
                    }
                }else{
                    this.dates[i]={
                        color:null,
                        day:d,
                        date:d2,
                        daynum:daynum,
                        ymdd:ymdd-2
                    }
                    if(d === '토'){
                        this.dates[i].color = 'sat';
                    }else if(d === '일'){
                        this.dates[i].color = 'sun';
                    }else{
                        this.dates[i].color = null;
                    }
                }
                day++;
                date++;
                ymdd++;
            };
        },
        moveDate(d){
            if(d === 'prev'){
                var date = this.dates[0].ymdd;
                if(Number(date) < 20210304 || date == undefined){
                    return false;
                }else{
                    date = date-3;
                };
            }else{
                var date = this.dates[4].ymdd;
                if(Number(date) > 20210328 || date == undefined){
                    return false;
                }else{
                    date = date+3;
                };
            };
            let getY = String(date).substr(0,4);
            let getM = String(date).substr(4,2);
            let getD = String(date).substr(6,2);
            let fullDate = getY+'-'+getM+'-'+getD;
            let nowDay = new Date(fullDate).getDay();

            this.makeDate(getD,nowDay,date) 
        },
        selectDate(sdate,sday,symdd){
            let date = new Date().getDate();
            if(sdate == date){
                this.reserveToday = true;
            }else{
                this.reserveToday = false;
            }
            this.makeDate(sdate,sday,symdd);
        }
    },
    created(){
        this.makecalendar()
    }
}
</script>
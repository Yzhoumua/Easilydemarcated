import './module/topnav.js';
import cenTerLun from './module/centerlun.js';
import tools from './module/tools.js';

// 导航顶部
const nav = document.getElementsByClassName('nav')[0];
document.onscroll= function(e){
   if(window.scrollY >= 60) nav.style.backgroundColor = 'black';
   else nav.style.backgroundColor = `rgba(0, 0, 0, 0.151)`
}
// 中部轮播图
const centerBannerCont = document.getElementsByClassName('bannerCont')[0];
const centerBannerBox = document.getElementsByClassName('centerBanner')[0];
const centerBannerBj = document.getElementsByClassName('bannerBj');
const lf = document.getElementsByClassName('contLf')[0];
const rg = document.getElementsByClassName('contRg')[0];
const lun = new cenTerLun(3000, centerBannerBox, centerBannerCont, centerBannerBj);
lun.init();
lf.onclick = () => {
    lun.lf()
}
rg.onclick = () => {
    lun.rg()
}


// 服务轮播图

const seriverBannerConten = document.getElementsByClassName('seriverBannerConten')[0];
const seriverBannerBox = document.getElementsByClassName('seriverBannerBox ')[0];
const seriverImgBox = document.getElementsByClassName('seriverImgBox');
const seriveAIndex = document.getElementsByClassName('seriveAIndex');
const realanrg = document.getElementsByClassName('realanrg');
const realanlf = document.getElementsByClassName('realanlf');
const lun1 = new cenTerLun(3000,seriverBannerConten,seriverBannerBox,seriverImgBox,seriveAIndex)
lun1.init()
for (let i = 0; i < seriveAIndex.length; i++) {
   seriveAIndex[i].addEventListener('mouseenter',function(){
        lun1.indexActive(i);
   })
}

//资讯轮播图
const realContent = document.getElementsByClassName('realContent')[0];
const realBanner = document.getElementsByClassName('realBanner')[0];
const realBannerItem = document.getElementsByClassName('realBannerItem');
const realindex =document.getElementsByClassName('realindex');
const onlf = document
const lun2 = new cenTerLun(3000,realContent,realBanner,realBannerItem,realindex)
lun2.init();
for (let i = 0; i < realindex.length; i++) {
    realindex[i].addEventListener('mouseenter',function(){
         lun2.indexActive(i);
    })
 }
 for(let i = 0; i < realanrg.length;i ++){
    realanrg[i].onclick =()=>{
        lun2.rg();
    }
    realanlf[i].onclick =()=>{
        lun2.lf();
    }
 }
 window.addEventListener('resize', tools.debounce(() => {
    lun.resize();
    lun2.resize();
}, 500))





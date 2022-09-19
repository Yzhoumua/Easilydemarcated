class Lun {
    //banner容器      移动容器  子容器
    constructor(dealy, bannerContent, bannerBox, bannerItem,bannerIndex) {
            this.bannerContent = bannerContent,
            this.bannerBox = bannerBox,
            this.bannerItem = bannerItem,
            this.dealy = dealy;
            this.bannerIndex = bannerIndex;
            this.timer;
            this.index = 0;
            this.len = bannerItem.length;
            this.indexLen = bannerIndex;
    }
    // 启动
    init() {
        this.bannerItem[0].classList.add('active');
        this.lun();
        this.getBannerWidth();
        this.Move();
        this.time();
    }
    // 判断自适应全屏
    getBannerWidth() {
        let bannerWidth = parseFloat(getComputedStyle(this.bannerContent).width);
        this.bannerBox.style.width = bannerWidth * this.len + 'px';
        for (let i = 0; i < this.len; i++) {
           this.bannerItem[i].style.width = parseInt(this.bannerBox.style.width) / this.len + 'px';
        }
        return bannerWidth;
    }
    // 启动轮播图
    lun(direction) {
        this.clearActive();
        let bannerItemWidth = this.getBannerLunWidth();
        switch (direction) {
            case '<': {
                this.index--;
                this.Move(-bannerItemWidth);
                break;
            }
            case '>': {
                this.index++;
                this.Move(-bannerItemWidth);
            }
        }
    }
    // 获取当前轮播图滚动宽度
    getBannerLunWidth(){
        this.getBannerWidth(this.bannerContent);
        return parseInt(this.bannerItem[0].style.width);
    }
    // 触发轮播移动事件
    Move(bannerItemWidth) {
        if (this.index < 0) {
            this.index = this.len - 1;
            this.MoveTo(bannerItemWidth)
        } else if (this.index >= this.len) {
            this.index = 0;
            this.MoveTo(bannerItemWidth)
        }
        this.MoveTo(bannerItemWidth)
    }
    // 轮播图移动方法
    MoveTo(bannerItemWidth) {
        if(this.bannerIndex) this.bannerIndex[this.index].classList.add('active');
        this.bannerItem[this.index].classList.add('active');
        this.bannerBox.style.marginLeft = bannerItemWidth * this.index + 'px';
    }
    // 计时器
    time() {
        this.timer = setInterval(() => {
            this.lun('>');
        }, this.dealy);
    }
    // 左右按钮事件
    lf() {
        this.lun('<');
    }
    rg() {
        this.lun('>');
    }
    // window宽口拖动检测
    resize() {
        clearInterval(this.timer);
        this.getBannerWidth(this.bannerContent);
        this.time()
    }
    indexActive(i){
        this.index = i;
        this.clearActive();
        let bannerWidth = this.getBannerLunWidth();
        this.MoveTo(-bannerWidth)
    }
    clearActive(){
        for (let i = 0; i < this.len; i++) {
            this.bannerItem[i].classList.remove('active');
            if(this.bannerIndex) this.bannerIndex[i].classList.remove('active');
        }
    }
}
export default Lun;

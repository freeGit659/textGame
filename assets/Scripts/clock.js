cc.Class({
    extends: cc.Component,

    properties: {
        time: 60,
        currentTime: 0,
        cover: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.currentTime = this.time;
        this.coverSprite = this.cover.getComponent(cc.Sprite);
    },

    update (dt) {
        if(this.currentTime >= (this.time*0.6)){
            this.cover.color = new cc.Color(0,255,0);
        }
        if(this.currentTime <= (this.time*0.6) && this.currentTime >= (this.time*0.3)){
            this.cover.color = new cc.Color(255,255,0);
        }
        if(this.currentTime <= (this.time*0.1)){
            this.cover.color = new cc.Color(255,255,0);
        }
        this.coverSprite.fillRange = this.currentTime/60;
        this.currentTime -= dt;
    },
});

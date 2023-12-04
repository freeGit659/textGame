cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        userName: cc.Label,
        wpm: cc.Label,

        accountManager: cc.Node,
        text:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.avatar.spriteFrame = this.accountManager.getComponent('accountManager').avatar;
        this.userName.string = this.accountManager.getComponent('accountManager').userName;
        this.wpm.string = "WPM: "+this.text.getComponent('text').wpm+ " words/min";
    },

    // update (dt) {},
});

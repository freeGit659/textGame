cc.Class({
    extends: cc.Component,

    properties: {
        userName: String,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    editingEnd(){
        this.userName = this.getComponent(cc.EditBox).string;
    }
});

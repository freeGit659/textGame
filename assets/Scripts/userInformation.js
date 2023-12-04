cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        userName: cc.Label,

        accountManager: cc.Node,

        isSetInformation: false,
        time: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._accountManager = this.accountManager.getComponent('accountManager');
    },

    update (dt) {
        if(!this.isSetInformation) {
            this.time = 0;
            return;
        }
        if (this.time >=1){
            this.setInformation();
        }
        this.time += dt;
    },

    setInformation(){
        this.avatar.spriteFrame = this._accountManager.avatar;
        this.userName.string = this._accountManager.userName;
    }

});

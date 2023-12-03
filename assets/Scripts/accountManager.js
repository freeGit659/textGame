cc.Class({
    extends: cc.Component,

    properties: {
        _useName: String,
        _avatar: cc.SpriteFrame,

        userNameInput: cc.Node,
        avatarInput: cc.Sprite,
        logInPanel: cc.Node,
    },


    // onLoad () {},

    start () {
        
    },

    // update (dt) {},

    setAccount(){
        this._useName = this.userNameInput.getComponent('userNameManager').userName;
        this._avatar = this.avatarInput.spriteFrame;
        this.logInPanel.active = false;
        cc.log(this._useName, this._avatar);
    }
});

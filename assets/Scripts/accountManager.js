cc.Class({
    extends: cc.Component,

    properties: {
        userName: String,
        avatar: cc.SpriteFrame,

        userNameInput: cc.Node,
        avatarInput: cc.Sprite,
        logInPanel: cc.Node,
        userInformation: cc.Node,
        gameMain: cc.Node,


    },


    // onLoad () {},

    start () {
        
    },

    // update (dt) {},

    setAccount(){
        this.userName = this.userNameInput.getComponent('userNameManager').userName;
        this.avatar = this.avatarInput.spriteFrame;
        this.logInPanel.active = false;
        this.gameMain.active = true;
        this.userInformation.getComponent('userInformation').isSetInformation = true;
    }
});

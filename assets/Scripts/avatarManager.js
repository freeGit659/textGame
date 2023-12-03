cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    setAvatar(){
        this.avatarCollection = this.node.getChildByName("Background").getComponent(cc.Sprite);

        this.avatarFrame = this.avatarCollection.spriteFrame;

        this.avatar.spriteFrame = this.avatarFrame;
    },
});

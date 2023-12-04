cc.Class({
    extends: cc.Component,

    properties: {
        caseTest: `Test your speed by typing the 500 most popular English words! There is no time-limit, practice to type as long as you like. Press Enter to select the word list to type and choose both the theme and audio settings.`,
        
        indexTyping: 0,

        _textTemp:'',

        words: [cc.Label],
        row1: cc.Node,
        wordsLayout: [cc.Label],

        wordsArray: [String],

        typingInput: cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.setWords();
    },

    update (dt) {
        
    },

    onEditingReturn() {
        if((this.typingInput.string.split(" ").length - 1) === this.indexTyping + 1) {
            this.checkMatch(this.typingInput.string.slice(this._textTemp.length).trimEnd());
            this._textTemp =  this.typingInput.string;
            cc.log(this._textTemp);
        }
    },

    setWords(){
        this.wordsArray = this.caseTest.split(' ');
        cc.log(this.wordsArray); 
        for(let i = 0; i < this.row1.childrenCount; i++){
            this.wordsLayout.push(this.row1.getChildByName(`Word `+i).getComponent(cc.Label));
            this.wordsLayout[i].string = this.wordsArray[i];
        }
        this.wordsLayout[this.indexTyping].node.color = new cc.Color(255,0,0);
    },

    checkMatch(input){
        if(this.wordsLayout[this.indexTyping].string === input) {
            cc.log('Dung');
        }
        else cc.log('Sai');
        cc.log(`|`+this.wordsLayout[this.indexTyping].string+`|`, `|`+input+`|`);
        this.wordsLayout[this.indexTyping].node.color = new cc.Color(0,0,0);
        this.indexTyping++;
    }
});

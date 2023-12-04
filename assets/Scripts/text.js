var randomParagraph = require('random-paragraph');
cc.Class({
    extends: cc.Component,

    properties: {
        caseTest: String,
        
        
        wpm: 0,
        indexTyping: 0,
        numSpace: 0,

        _textTemp:'',

        words: [cc.Label],
        row1: cc.Node,
        row2: cc.Node,
        wordsLayout: [cc.Label],
        wordsLayout2: [cc.Label],

        wordsArray: [String],

        typingInput: cc.EditBox,
        clock: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.caseTest = randomParagraph();
        this.wordsArray = this.caseTest.split(' ');
        this.setWords();
    },

    update (dt) {
        if(this.indexTyping >=5){
            this.wordsArray.splice(0, this.wordsLayout.length);
            cc.log(this.wordsLayout.length);
            cc.log(this.wordsArray);
            this.indexTyping = 0;
            this.setWords();
            this.numSpace += 5;
            cc.log(this.indexTyping);
        }
    },

    onTextChanged() {
        this.clock.getComponent('clock').isTyping = true;
        cc.log(this.typingInput.string.split(" ").length - 1 - this.numSpace, this.indexTyping);
        if(((this.typingInput.string.split(" ").length - 1) - this.numSpace) === this.indexTyping + 1) {
            cc.log('num', this.numSpace);
            this.checkMatch(this.typingInput.string.slice(this._textTemp.length).trimEnd());
            this._textTemp =  this.typingInput.string;
        }
    },

    setWords(){
        this.wordsLayout = [];
        this.wordsLayout2 = [];
        for(let i = 0; i < this.row1.childrenCount; i++){
            this.wordsLayout.push(this.row1.getChildByName(`Word `+i).getComponent(cc.Label));
            this.wordsLayout[i].string = this.wordsArray[i];
            this.wordsLayout[i].node.color = new cc.Color(0,0,0);
        }
        for(let j = 0; j < this.row2.childrenCount; j++){
            this.wordsLayout2.push(this.row2.getChildByName(`Word `+j).getComponent(cc.Label));
            this.wordsLayout2[j].string = this.wordsArray[j+this.row1.childrenCount];
            this.wordsLayout[j].node.color = new cc.Color(0,0,0);
        }
        this.wordsLayout[this.indexTyping].node.color = new cc.Color(0,0,255);
    },

    checkMatch(input){
        if(this.wordsLayout[this.indexTyping].string === input) {
            this.wpm++;
            this.wordsLayout[this.indexTyping].node.color = new cc.Color(0,255,0);
        }
        else this.wordsLayout[this.indexTyping].node.color = new cc.Color(255,0,0);
        // cc.log(`|`+this.wordsLayout[this.indexTyping].string+`|`, `|`+input+`|`);
        this.indexTyping++;
        if(this.indexTyping < 5) {
            this.wordsLayout[this.indexTyping].node.color = new cc.Color(0,0,255);
        }
    }
});

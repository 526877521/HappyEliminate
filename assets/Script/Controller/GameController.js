/**
 * 游戏的控制层
 */

import GameModel from "../Model/GameModel";

cc.Class({
    extends: cc.Component,

    properties: {
        grid: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.gameModel = new GameModel();
        this.gameModel.init(5);
        var gridScript = this.grid.getComponent("GridView");
        gridScript.setController(this);
        gridScript.initWithCellModels(this.gameModel.getCells());
    },

    selectCell: function (pos) {
        return this.gameModel.selectCell(pos);
    },
    cleanCmd: function () {
        this.gameModel.cleanCmd();
    }

});


















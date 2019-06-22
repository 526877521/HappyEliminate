/**
 * 代表每个格子
 */
import {CELL_TYPE, ANITIME, CELL_STATUS, GRID_HEIGHT} from "./ConstValue";

export default function CellModel() {
    this.type = null;
    this.status = CELL_STATUS.COMMON;
    this.x = 1;
    this.y = 1;
    this.startX = 1;
    this.startY = 1;
    this.cmd = [];
    this.isDeath = false;
    this.objecCount = Math.floor(Math.random() * 1000);
}

//定义类型
CellModel.prototype.init = function (type) {
    this.type = type;
}
//判定是不是空
CellModel.prototype.isEmpty = function () {
    return this.type === CELL_TYPE.EMPTY;
}

//设置是不是为空
CellModel.prototype.setEmpty = function () {
    this.type = CELL_TYPE.EMPTY;
}
//设置坐标
CellModel.prototype.setXY = function (x, y) {
    this.x = x;
    this.y = y;
}
//设置开始的坐标
CellModel.prototype.setStartXY = function (x, y) {
    this.startX = x;
    this.startY = y;
}

//设置状态
CellModel.prototype.setStatus = function (status) {
    this.status = status;
}

CellModel.prototype.moveToAndBack = function (pos) {
    var srcPos = cc.p(this.x, this.y);
    this.cmd.push({
        action: "moveTo",
        keepTime: ANITIME.TOUCH_MOVE,
        playTime: 0,
        pos: pos
    });
    this.cmd.push({
        action: "moveTo",
        keepTime: ANITIME.TOUCH_MOVE,
        playTime: ANITIME.TOUCH_MOVE,
        pos: srcPos
    });
}

CellModel.prototype.moveTo = function (pos, playTime) {
    var srcPos = cc.p(this.x, this.y);
    this.cmd.push({
        action: "moveTo",
        keepTime: ANITIME.TOUCH_MOVE,
        playTime: playTime,
        pos: pos
    });
    this.x = pos.x;
    this.y = pos.y;
}

CellModel.prototype.toDie = function (playTime) {
    this.cmd.push({
        action: "toDie",
        playTime: playTime,
        keepTime: ANITIME.DIE
    });
    this.isDeath = true;
}

CellModel.prototype.toShake = function (playTime) {
    this.cmd.push({
        action: "toShake",
        playTime: playTime,
        keepTime: ANITIME.DIE_SHAKE
    });
}

CellModel.prototype.setVisible = function (playTime, isVisible) {
    this.cmd.push({
        action: "setVisible",
        playTime: playTime,
        keepTime: 0,
        isVisible: isVisible
    });
}

CellModel.prototype.moveToAndDie = function (pos) {

}

CellModel.prototype.isBird = function () {
    return this.type == CELL_TYPE.G;
}

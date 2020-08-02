// TODO:整理到redux中
const windowHeight = window.innerHeight * 0.9;

/** 第一行第一條線的起始點 */
const origin = { x: 50, y: 50 };
/** 線 */
const line = {
    span: 10,
    length: 800
}
/** 線譜間距 */
const row = {
    span: 150,
    count: 4, // TODO:dynamic growth
    get height() {
        return this.span * this.count;
    }
}

const sheetHeight = row.height > windowHeight ? row.height : windowHeight;

export { origin, line, row, sheetHeight };
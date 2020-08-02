import { origin, line, row } from './../config';

/** 畫線 */
const drawLine = (canvas, { x, y }, length) => {
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(length, y);
    canvas.stroke();
}
/** 畫一行線譜 */
const drawRow = (canvas, startY) => {
    [...Array(6).keys()].forEach(count => {
        drawLine(canvas, { x: origin.x, y: startY + (count * line.span) }, line.length);
    })
};
/** 畫整份 */
const drawSheet = (canvas, windowWidth) => {
    [...Array(row.count).keys()].forEach(count => {
        drawRow(canvas, origin.y + row.span * count);
    })
}
export default drawSheet;
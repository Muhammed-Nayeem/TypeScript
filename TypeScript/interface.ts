/**
 * interface: A special type of structure
 */
//Ex-1: interface
interface RectangleDraw {
  width: number;
  length: number;
}

function drawRectangle(option: RectangleDraw) {
  let width = option.width;
  let length = option.length;
  console.log(`Width is: ${width} and length is: ${length}`);
}

let rectangleOption = {
  width: 50,
  length: 40,
  height: 35,
};

drawRectangle({ width: 50, length: 40 });

//It will work
drawRectangle(rectangleOption);

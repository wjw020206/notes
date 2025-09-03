type Colors = 'red' | 'green' | 'blue';
type RGB = [number, number, number];

const palette: Record<Colors, string | RGB> = {
  red: [255, 0, 0],
  green: '#00ff00',
  bleu: [0, 0, 255], // 报错（属性名拼写错误）
};

// 属性值可能是字符串，也可能是元组RGB，元组RGB上没有 substring 方法
const greenComponent = palette.green.substring(1, 6); // 报错

// 只进行类型检测，不改变 TypeScript 对 palette2 的类型推断
const palette2 = {
  red: [255, 0, 0],
  green: '#00ff00',
  bleu: [0, 0, 255], // 报错（属性名拼写错误）
} satisfies Record<Colors, string | RGB>;

const greenComponent2 = palette2.green.substring(1, 6);

const palette3 = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0], // 报错（属性值类型不对）
} satisfies Record<Colors, string | RGB>;

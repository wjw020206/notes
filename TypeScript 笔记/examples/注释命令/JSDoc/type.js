// 定义变量的类型
/**
 * @type {string}
 */
let a;

// 在 @type 命令中可以使用由 @typedef 命令创建的类型
/**
 * @typedef { (number | string) } NumberLike
 */

/**
 * @type {NumberLike}
 */
let b = 0;

// 在 @type 命令中允许使用 TypeScript 类型及其语法
/** @type {true | false} */
let c;

/** @type {number[]} */
let e;

/** @type {Array<number>} */
let f;

/** @type {{ readonly x: number; y?: string }} */
let g;

/** @type {(s: string, b: boolean) => number} */
let h;

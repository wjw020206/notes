// @extends 命令用于定义继承的基类
/**
 * @extends {Base}
 */
class Derived extends Base {}

// @public、@protected、@private 分别指定类的公开成员、保护成员和私有成员
// @readonly 指定只读成员
class Base {
  /**
   * @public
   * @readonly
   */
  x = 0;

  /**
   * @protected
   */
  y = 0;
}

import "./stylesheets/index.scss";
import { ScrollObserver } from "./js/libs/intersectionobserver";

export class Main {
  constructor() {
    this._observers = [];
    this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    this._scrollInit();
  }

  /* scrollで監視しactiveを追加 */
  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".appear", this._inviewAnimation),
    );
  }
}
new Main();

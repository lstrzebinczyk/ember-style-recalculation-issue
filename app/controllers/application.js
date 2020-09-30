import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class extends Controller {
  @tracked currentTime = 0;
  @tracked duration;

  get currentTimeTruncated() {
    return Math.round(this.currentTime)
  }

  get progress() {
    if (this.duration) {
      return 100 * this.currentTimeTruncated / this.duration;
    } else {
      return 0;
    }
  }

  @action updateCurrentTime(e) {
    this.currentTime = e.target.currentTime;
  }

  @action onLoad(e) {
    this.duration = e.target.duration;
  }
}

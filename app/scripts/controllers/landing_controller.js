import Marionette from 'backbone.marionette';
import App from 'scripts/application';
import ContentLandingView from 'scripts/views/content/landing';

export default class LandingController extends Marionette.Object {
  index() {
    App.mainRegion.show(new ContentLandingView());
  }
}

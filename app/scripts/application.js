import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import AppConfig from 'scripts/config';
import LinkOverride from 'scripts/overrides/link';
import RootLayout from 'scripts/views/layouts/root_layout';
import routes from 'scripts/helpers/routes';

class App extends Marionette.Application {
  initialize() {
    this.layout = new RootLayout();
    this.origin = Backbone.history.location.origin;
  }

  onBeforeStart() {
    routes.setRootPath(AppConfig.rootPath);
  }

  onStart() {
    this.history();
    LinkOverride.init();
    console.log('app started');
  }

  history() {
    Backbone.history.start({
      pushState: true,
      root: AppConfig.rootPath
    });
  }
}

export default new App();

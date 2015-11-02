import App from 'scripts/application';
import BaseRouter from 'scripts/routers/base';
import Session from 'scripts/facades/session';
import routes from 'scripts/helpers/routes';
import { props } from 'scripts/decorators';

@props({
  appRoutes: {
    'sign_out': 'signOut'
  }
})
export default class NavigationRouter extends BaseRouter {
  initialize() {
    this.listenTo(Session, 'create destroy', this.onSessionChange);
    this.listenTo(Backbone.history, 'route', this.onNavigationChange);
  }

  onSessionChange() {
    let path = (Session.isLoggedIn()) ? routes.dashboardIndexPath() : routes.rootPath();
    this.navigate(path, { trigger: true });
  }

  onNavigationChange(router) {
    App.vent.trigger('navigation:change', router.navigation);
  }
}

import Marionette from 'backbone.marionette';
import NavigationLinksView from 'views/navigation/links';
import NavigationLoginView from 'views/navigation/login';
import NavigationLogoutView from 'views/navigation/logout';
import Session from 'facades/session';
import routes from 'helpers/routes';
import template from 'templates/navigation/layout';
import { props } from 'decorators';

@props({
  template,
  className: 'container-fluid',

  regions: {
    navigationRegion: '#navigations_region',
    formRegion: '#login_form_region'
  },

  templateHelpers: { routes }
})
export default class NavigationLayout extends Marionette.LayoutView {
  initialize() {
    this.listenTo(Session, 'create destroy', this.render);
  }

  onRender() {
    if (Session.isLoggedIn()) {
      this.navigationRegion.show(new NavigationLinksView());
      this.formRegion.show(new NavigationLogoutView());
    }
    else {
      this.navigationRegion.empty();
      this.formRegion.show(new NavigationLoginView());
    }
  }
}
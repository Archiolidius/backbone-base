import Marionette from 'backbone.marionette';
import Session from 'scripts/facades/session';
import FormBehavior from 'scripts/behaviors/form';
import routes from 'scripts/helpers/routes';
import template from 'templates/navigation/login';
import { props } from 'scripts/decorators';

@props({
  template,
  className: 'nav navbar-nav navbar-right',
  model: Session.currentUser(),

  ui: {
    form: 'form'
  },

  events: {
    'submit @ui.form': 'onFormSubmit'
  },

  bindings: {
    '[name="email"]': {
      observe: 'email',
      updateView: false,
      setOptions: {
        validate: true
      }
    },
    '[name="password"]': {
      observe: 'password',
      updateView: false,
      setOptions: {
        validate: true
      }
    }
  },

  behaviors: {
    form: {
      behaviorClass: FormBehavior
    }
  },

  templateHelpers: { routes }
})
export default class NavigationLoginView extends Marionette.ItemView {
  onFormSubmit(event) {
    event.preventDefault();
    Session.create();
  }
}

import App from 'scripts/application';
import Router from 'scripts/routers/navigation';
import Routes from 'scripts/helpers/routes';

App.on('before:start', function() {
  this.moduleName = 'navigation';
  this.router = new Router();
  Routes.initModule(this);
  console.log('module navigation started');
});

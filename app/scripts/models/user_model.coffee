define [
  'Marionette'
], (Marionette) ->

  class UserModel extends Backbone.Model
    defaults: 
      'user_email': 'example@email.com',
      'user_name': 'user',
      'user_avatar': ''

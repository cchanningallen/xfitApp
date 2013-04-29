window.Xfit = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Xfit.ApplicationController = Ember.Controller.extend({
  name: "Channing",
  avatarPicture: "http://m.c.lnkd.licdn.com/media/p/1/000/1c8/012/1710465.jpg",
  status: "admin",
  isAdmin: true,
});

Xfit.Router.map(function(){
  this.resource("exercises", function(){
    this.route("edit", { path: "/:exercise_id" });
  });
});

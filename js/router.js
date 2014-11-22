OnWhen.Router.map(function() {
    this.resource('onwhen', {path: '/'}, function () {
        // Child routes
        this.route('learn');
        this.route('contact');
        this.route('events');
        this.route('login');
        this.route('register');
    });
});

OnWhen.OnWhenIndexRoute = Ember.Route.extend({});

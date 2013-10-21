define(['marionette', 'dispatcher', 'text!layouts/media/default.html', 'jqueryui'], function(Marionette, K2Dispatcher, template) {'use strict';
	var K2ViewMedia = Marionette.ItemView.extend({
		template : _.template(template),
		onRender : function() {
			require(['widgets/elfinder/js/elfinder.min', 'css!//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.css', 'css!widgets/elfinder/css/theme.css', 'css!widgets/elfinder/css/elfinder.min.css'], _.bind(function() {
				this.$el.elfinder({
					url : 'index.php?option=com_k2&task=media.connector&format=json',
					getFileCallback : function(path) {
						K2Dispatcher.trigger('app:media:file', path);
					}
				}).elfinder('instance');
			}, this));
		},
		onShow : function() {
			require(['widgets/magnific/jquery.magnific-popup.min', 'css!widgets/magnific/magnific-popup.css'], _.bind(function() {
				jQuery.magnificPopup.open({
					alignTop : false,
					closeBtnInside : true,
					items : {
						src : this.el,
						type : 'inline'
					}
				});
			}, this));
		}
	});
	return K2ViewMedia;
});
import { Meteor } from 'meteor/meteor';
import { ChatSubscription } from '/app/rocketchat-models';

Meteor.methods({
	openRoom(rid) {
		if (!Meteor.userId()) {
			return false;
		}

		ChatSubscription.update({
			rid,
			'u._id': Meteor.userId(),
		}, {
			$set: {
				open: true,
			},
		});
	},
});

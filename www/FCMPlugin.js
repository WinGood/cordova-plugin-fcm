var exec = require('cordova/exec');

function FCMPlugin() { 
	console.log("FCMPlugin.js: is created");
}

FCMPlugin.prototype.grantPermission = function(success, error){
	exec(success, error, "FCMPlugin", 'grantPermission', []);
}

FCMPlugin.prototype.hasPermission = function(success, error){
	exec(success, error, "FCMPlugin", 'hasPermission', []);
}

FCMPlugin.prototype.unregister = function(success, error){
	exec(success, error, "FCMPlugin", 'unregister', []);
}

FCMPlugin.prototype.clearAllNotifications = function(success, error) {
    exec(success, error, "FCMPlugin", "clearAllNotifications", []);
};

// TODO add unregister method

// SUBSCRIBE TO TOPIC //
FCMPlugin.prototype.subscribe = function( topic, success, error ){
	exec(success, error, "FCMPlugin", 'subscribe', [topic]);
}
// UNSUBSCRIBE FROM TOPIC //
FCMPlugin.prototype.unsubscribe = function( topic, success, error ){
	exec(success, error, "FCMPlugin", 'unsubscribe', [topic]);
}
// NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotificationOpen = function( callback, success, error ){
	FCMPlugin.prototype.onNotificationReceived = callback;
	exec(success, error, "FCMPlugin", 'onNotificationOpen',[]);
}
// TOKEN REFRESH CALLBACK //
FCMPlugin.prototype.onTokenRefresh = function( callback ){
	FCMPlugin.prototype.onTokenRefreshReceived = callback;
}
// GET TOKEN //
FCMPlugin.prototype.getToken = function( success, error ){
	exec(success, error, "FCMPlugin", 'getToken', []);
}

// DEFAULT NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotificationReceived = function(payload){
	console.log("Received push notification")
	console.log(payload)
}
// DEFAULT TOKEN REFRESH CALLBACK //
FCMPlugin.prototype.onTokenRefreshReceived = function(token){
	console.log("Received token refresh")
	console.log(token)
}
// FIRE READY //
exec(function(result){ console.log("FCMPlugin Ready OK") }, function(result){ console.log("FCMPlugin Ready ERROR") }, "FCMPlugin",'ready',[]);





var fcmPlugin = new FCMPlugin();
module.exports = fcmPlugin;

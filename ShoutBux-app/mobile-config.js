App.info({
  id: 'com.evilboss.shoutbux',
  name: 'ShoutBux',
  description: 'A twitter like application that lets you post a “shout”(with a max character limit) to your timeline.',
  author: 'Jr Reyes',
  email: 'jr.evilboss@gmail.com'
});
App.setPreference('SplashScreen', 'none');

App.icons({
  // iOS
  'iphone_2x': 'resources/icons/ios/icon-60@2x.png',
  'iphone_3x': 'resources/icons/ios/icon-60@3x.png',
  'ipad': 'resources/icons/ios/icon-72.png',
  'ipad_2x': 'resources/icons/ios/icon-72@2x.png',

  // Android
  'android_hdpi': 'resources/icons/android/drawable-hdmi/ic_launcher.png',
  'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
  'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png',
  'android_xxhdpi': 'resources/icons/android/drawable-xxhdpi/ic_launcher.png',
  'android_xxxhdpi': 'resources/icons/android/drawable-xxxhdpi/ic_launcher.png',
});

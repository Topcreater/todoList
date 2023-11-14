import notifee from '@notifee/react-native';

export async function onDisplayNotification(title, description) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  await notifee.requestPermission();

  const notificationId = await notifee.displayNotification({
    id: '123',
    title: title,
    body: description,
    android: {
      channelId,
    },
  });

  // Sometime later...
  await notifee.displayNotification({
    id: '123',
    title: title,
    body: description,
    android: {
      channelId,
    },
  });
}

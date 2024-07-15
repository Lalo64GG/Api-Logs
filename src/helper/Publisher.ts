import mqtt from 'mqtt';

const brokerUrl = 'mqtt://52.72.139.152';
const topic = 'pable';

const options = {
  username: 'raspberry', 
  password: 'dine123', 
};

const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('error', (error) => {
  console.error('MQTT connection error:', error);
});

export const publishToMqtt = (message: object) => {
  const payload = JSON.stringify(message);
  client.publish(topic, payload, { qos: 1 }, (error) => {
    if (error) {
      console.error('MQTT publish error:', error);
    } else {
      console.log('Message published to MQTT broker');
    }
  });
};

module.exports = inject;

function inject(bot) {
  bot.time = {
    day: null,
    age: null,
  };
  bot._client.on('update_time', function(packet) {
    // for day we ignore the big number since it is always 0
    bot.time.day = Math.abs(packet.time[1]);
    bot.time.age = longToNumber(packet.age);
    bot.emit('time');
  });
}

function longToNumber(arr) {
  return arr[1] + 4294967296 * arr[0];
}

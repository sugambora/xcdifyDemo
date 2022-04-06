import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

let interval;

const StopWatch = props => {
  const [totalDuration, setTotalDuration] = useState(0); // For total duration
  const [time, setTime] = useState(0); // For stop watch

  let startStopWatch = () => {
    clearInterval(interval); // Clearing the old interval instance before starting a new one.

    interval = setInterval(() => {
      setTime(prev => prev + 1);
      setTotalDuration(prev => prev + 1);
    }, 1000);
  };

  let stopStopWatch = () => {
    // console.log('STOP');
    clearInterval(interval);
    setTime(0);
  };

  let totalMins = Math.floor(totalDuration / 60); // Calculating minutes.
  let totalSecs = totalDuration % 60; // Calculating seconds.

  let mins = Math.floor(time / 60);
  let secs = time % 60;

  return (
    <View style={localStyles.mainContainer}>
      <View style={{alignSelf: 'center', marginVertical: 10}}>
        <Text>
          Total Duration: {totalMins} {totalMins == 1 ? 'Minute' : 'Minutes'}{' '}
          {totalSecs} {totalSecs == 1 ? 'Second' : 'Seconds'}
        </Text>
      </View>

      <View style={{...localStyles.row, justifyContent: 'center'}}>
        <Text>
          {mins} {mins == 1 ? 'Minute' : 'Minutes'}
        </Text>
        <Text style={{marginHorizontal: 10}}>:</Text>
        <Text>
          {secs} {secs == 1 ? 'Second' : 'Seconds'}
        </Text>
      </View>

      <View style={{...localStyles.row, justifyContent: 'space-evenly'}}>
        <Button onPress={startStopWatch} title="Play" color="#00cc00" />
        <Button onPress={stopStopWatch} title="Stop" color="#ff471a" />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default StopWatch;

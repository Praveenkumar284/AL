import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Task from './Task';
import {Appbar, TextInput} from 'react-native-paper';

const App = () => {
  const [list, setList] = React.useState('');
  const [listItems, setListItems] = React.useState([]);

  const onChangeSearch = query => setList(query);

  const handleAddList = () => {
    Keyboard.dismiss();
    setListItems([...listItems, list]);
    setList(null);
  };

  return (
    <ScrollView>
      <Appbar>
        <Text>
          <TextInput
            style={styles.search}
            placeholder="Search"
            value={list}
            onChangeText={onChangeSearch}
          />
          <Appbar.Action
            onPress={() => handleAddList()}
            icon="plus"
            size={35}
            style={styles.plus}
          />
        </Text>
      </Appbar>
      <View style={styles.items}>
        {listItems.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  search: {
    width: 300,
    height: 50,
  },
  task: {
    color: 'black',
  },
  items: {
    marginTop: 30,
  },
  plus: {
    borderWidth: 1.5,
    borderColor: '#55BCF6',
    borderRadius: 10,
  },
});

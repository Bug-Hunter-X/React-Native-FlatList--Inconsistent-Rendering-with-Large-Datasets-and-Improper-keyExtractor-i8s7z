```javascript
// bug.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.value}</Text>}
      // Incorrect keyExtractor
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default App;

```

```javascript
// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.value}</Text>}
      // Correct keyExtractor
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default App;
```
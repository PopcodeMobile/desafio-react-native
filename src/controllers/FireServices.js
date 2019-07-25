import firebase from 'firebase';

class FireServices {
  static getDataList = (nodePath, callback) => { // eslint-disable-line
    const query = firebase.database().ref(nodePath).orderByChild('prazo');
    query.on('value', (dataSnapshot) => {
      const itens = [];
      dataSnapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        itens.push(item);
      });
      callback(itens);
    });
    return query;
  };
}

export default FireServices;

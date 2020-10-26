import { StyleSheet } from 'react-native'
import { Colors } from '../../../Themes'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24
  },
  displayDateName: {
    color: Colors.a420,
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.37,
    fontWeight: 'bold'
  },
  date: {
    color: Colors.c400,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24
  },
  tasksContainer: {
    height: '70%',
    backgroundColor: Colors.a420,
    borderTopLeftRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  filterContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  searchContainer: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
    backgroundColor: Colors.a420,
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatingButton: {
    position: 'absolute',
    right: 24,
    bottom: 58,
    height: 64,
    width: 64,
    borderRadius: 20,
    backgroundColor: Colors.a220,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fetchingCircle: {
    flex:1,
    justifyContent: "center",
    flexDirection:"row",
    padding: 10,
  },
  emptyContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  displayEmptyName: {
    color: '#4A4A4D',
    fontSize: 21,
    fontWeight: 'bold'
  },
  displayEmptyText: {
    color: '#4A4A4D',
    fontSize: 16
  },
  floatingButtonAdd: {
    backgroundColor:Colors.a220,
    alignSelf: 'center',
    width: 200,
    height: 60,
    borderRadius:15,
    justifyContent: 'center',
    alignItems:'center',
    position: 'relative',
    bottom: 20
  },
  textAdd: {
    fontSize:18,
    alignItems: 'center',
    color:'#fff'
  },
  textInput:{
    justifyContent:'center',
    fontSize: 30,
    alignItems: 'center',
    paddingLeft: 30,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#E3E4E6',
    fontWeight: 'bold'
  },
  floatingButtonNull: {
    backgroundColor:'#fff',
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius:15,
    justifyContent: 'center',
    alignItems:'center',
    position:'absolute',
    bottom: 20,
  }, 
  container: {
    flex: 1
  },
  flexModalContainer: {
    flex:1,
    marginTop: 130,
    padding: 40,
    borderTopLeftRadius: 32,
    backgroundColor: '#fff'

  }, 
  addDateTouch: {
    padding: 22,
    alignItems: 'center',
    paddingLeft: 30,
    borderStyle: 'solid',
    borderBottomColor: '#E3E4E6',
    borderBottomWidth: 2,
    justifyContent: 'center'
  },
  addDateImage: {
    padding: 8,
    position:'absolute',
    top: 12,
    left: 0
  }, 
  addDateText: {
    position:'absolute',
    color: Colors.c400,
    fontSize:18,
    left: 30
  },
  picker: {
    color: Colors.c400,
    position: 'absolute',
    width: 200,
    left: 230
  },
  textPicker:{
    padding: 10,
    color: Colors.c400,
    fontSize: 18,
    borderStyle: 'solid',
    borderBottomColor: '#E3E4E6',
    paddingLeft:30,
    borderEndWidth:2
  }
})

export default styles

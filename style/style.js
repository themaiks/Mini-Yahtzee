import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 50,
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#3f3f3f',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginLeft: 140,
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#3f3f3f',
    flexDirection: 'row',
    marginTop: 100,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  textinput:{
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2
  },
  hometext:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  homebutton:{
    margin: 12,
    padding: 10,
    backgroundColor: "#aaa5d8",
    width: 150,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoicon:{
    marginLeft: 180,
  },
  playbutton:{
    margin: 12,
    padding: 10,
    backgroundColor: "#aaa5d8",
    width: 150,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rulestext:{
    marginLeft:5,
    marginRight:2,
    fontSize: 15,
  },
  playername:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  throwbutton:{
    marginLeft: 120,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#aaa5d8",
    width: 150,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  throwsleft:{
    margin: 2,
    padding: 6,
    fontWeight: 'bold',
    fontSize: 20
  },
  throwtext:{
    marginLeft: 10,
    fontSize: 15,
  },
  pointsrow:{
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 14,
  },
  pointstoselect:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  totalPointsRow:{
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPoints:{
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -50,
    marginTop: 50,
  },
  
});
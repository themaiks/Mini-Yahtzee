import { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../style/style";
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS } from '../constants/Game';
import { Container, Row, Col } from 'react-native-flex-grid';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Scoreboard from "./Scoreboard";


let board = [];



export default Gameboard = ({ navigation, route }) => {

    const [playerName, setPlayerName] = useState('');
    const [NbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState('Throw dices');
    const [gameEndStatus, setGameEndStatus] = useState(false);
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
    const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));

    useEffect(() => {
        if (playerName === '' && route.params?.player) {
            setPlayerName(route.params.player);
        }
    }, []);


    const dicesRow = [];
    for (let dice = 0; dice < NBR_OF_DICES; dice++) {
        dicesRow.push(
            <Col key={"dice" + dice}>
                <Pressable
                    key={"dice" + dice}
                    onPress={() => selectDice(dice)}>
                    <MaterialCommunityIcons
                        name={board[dice]}
                        key={"dice" + dice}
                        size={50}
                        color={getDiceColor(dice)}>
                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        );
    }

    const pointsRow = [];
    for (let spot = 0; spot < MAX_SPOT; spot++) {
        pointsRow.push(
            <Col key={"pointsRow" + spot}>
                <Text key={"pointsRow" + spot}>{getSpotTotal(spot)}
                </Text>
            </Col>
        );
    }


    const PointsToSelectRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
        PointsToSelectRow.push(
            <Col key={"buttonsRow" + diceButton}>
                <Pressable
                    key={"buttonsRow" + diceButton}
                    onPress={() => selectDicePoints(diceButton)}>
                    <MaterialCommunityIcons
                        name={"numeric-" + (diceButton + 1) + "-circle"}
                        key={"buttonsRow" + diceButton}
                        size={35}
                        color={getDicePointsColor(diceButton)}
                    >
                    </MaterialCommunityIcons>
                </Pressable>
            </Col>
        );
    }

    const selectDicePoints = (i) => {
        if (NbrOfThrowsLeft === 0) {
            let selectedPoints = [...selectedDicePoints];
            let points = [...dicePointsTotal];
            if (!selectedPoints[i]) {
                selectedPoints[i] = true;
                let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1 : total), 0);
                points[i] = nbrOfDices * (i + 1);
            }
            else {
                setStatus('You already selected points for ' + (i + 1));
                return points[i];
            }
            setDicePointsTotal(points);
            setSelectedDicePoints(selectedPoints);
            return points[i];
        }
        else {
            setStatus('Throw ' + NBR_OF_THROWS + ' times before setting points')
        }
    }

    const throwDices = () => {
        if (NbrOfThrowsLeft === 0 && !gameEndStatus) {
            setStatus('Select your points before the next throw')
            return 1;
        }
        else if (NbrOfThrowsLeft === 0 && gameEndStatus) {
            setGameEndStatus(false);
            diceSpots.fill(0);
            dicePointsTotal.fill(0);
        }

        let spots = [...diceSpots];
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if (!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-' + randomNumber;
                spots[i] = randomNumber;
            }
        }
        setNbrOfThrowsLeft(NbrOfThrowsLeft - 1);
        setDiceSpots(spots);
        setStatus('Select and throw dices again');
    }

    function getSpotTotal(i) {
        return dicePointsTotal[i];
    }


    const selectDice = (i) => {
        if (NbrOfThrowsLeft < NBR_OF_THROWS && !gameEndStatus) {
            let dices = [...selectedDices];
            dices[i] = selectedDices[i] ? false : true;
            setSelectedDices(dices);
        }
        else {
            setStatus('You have to throw dices first!');
        }
    }

    function calculateTotalPoints() {
        return dicePointsTotal.reduce((total, points) => total + points, 0);
    }


    function getDiceColor(i) {
        return selectedDices[i] ? "black" : "steelblue";
    }

    function getDicePointsColor(i) {
        return (selectedDicePoints[i] && !gameEndStatus) ? "black" : "steelblue";
    }





    return (
        <>
            <Header />
            <View>
                <Text style={styles.playername}>Player: {playerName}</Text>
                <Container fluid>
                    <Row>{dicesRow}</Row>
                </Container>
                <Text style={styles.throwsleft}>Throws left: {NbrOfThrowsLeft}</Text>
                <Text style={styles.throwtext}>{status}</Text>
                <Pressable
                    onPress={() => throwDices()}>
                    <Text style={styles.throwbutton}>THROW DICES</Text>
                </Pressable>
                <Container fluid>
                <Row style={styles.totalPointsRow}>
                        <Text style={styles.totalPoints}>Total Points: {calculateTotalPoints()}</Text>
                    </Row>
                    <Row style={styles.pointsrow}>{pointsRow}</Row>
                    <Container fluid>
                        <Row style={styles.pointstoselect}>{PointsToSelectRow}</Row>
                    </Container>
                </Container>


                <Footer />
            </View>
        </>
    )
}
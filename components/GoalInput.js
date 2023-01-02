
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enterdGoalText, setEnterdGoalText] = useState('');
    function goalInputHandler(enterdText) {
        setEnterdGoalText(enterdText);
    };


    function addGoalHandler() {
        props.onAddGoal(enterdGoalText);
        setEnterdGoalText('');
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}   >
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enterdGoalText} />


                <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.Button}>
                        <Button title='ADD GOAL' onPress={addGoalHandler} color="#b180f0" />
                    </View>

                </View>


            </View>
        </Modal>
    );
}


export default GoalInput;



const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b63'
    },

    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#120438",
        borderRadius: 6,
        width: '100%',
        padding: 16
    },

    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },

    Button: {
        width: 100,
        marginHorizontal: 8
    }


});
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {} from '../actions';
var Main = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>Boilerplate app</Text>
            </View>
        )
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
module.exports = Main;
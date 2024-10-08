import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/theme";
import { HEADER_HEIGHT } from "../consts";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({top, score, paused, pause, reload}) => {

    const styleHeader = {
        height: HEADER_HEIGHT + top,
        backgroundColor: colors.p4,
        paddingTop: top,
        paddingHorizontal: 20,
    }

    return (
        <View style={[styleHeader, styles.header]}>
            <TouchableOpacity onPress={reload}>
                <Ionicons name="reload" size={26} color={colors.p6} />
            </TouchableOpacity>
            <TouchableOpacity onPress={pause}>
                <Ionicons
                    name={paused ? "play" : "pause"}
                    size={26}
                    color={colors.p6}
                />
            </TouchableOpacity>
            <Text style={styles.score}>{score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    score: {
        color: colors.p6,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Header
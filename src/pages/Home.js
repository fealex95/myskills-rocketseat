import React from 'react';
import { View, Text } from 'react-native';

export function app() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>React Native</Text>
            <Text style={{ fontStyle: 'italic', color: 'gray' }}>Felipe Alexandre</Text>
        </View>
    )
}
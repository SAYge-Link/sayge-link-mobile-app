import { useEffect } from "react";
import { KeyboardAvoidingView } from "react-native"
import {
    View,
    Text
} from 'react-native';

import { init, track } from '@amplitude/analytics-react-native';

import { auth } from "../firebase";

init('')

const ExploreScreen = () => {
    useEffect(() => {
        track('Visited Explore', undefined, {
            user_id: auth.currentUser.email
        })
    })
    return (
        <KeyboardAvoidingView>
            <View>
                <Text>Explore Page</Text>
            </View>
        </KeyboardAvoidingView>
    )
};

export default ExploreScreen;
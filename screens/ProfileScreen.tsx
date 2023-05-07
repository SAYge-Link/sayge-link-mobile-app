import { useEffect } from "react";
import { KeyboardAvoidingView } from "react-native"
import {
    View,
    Text
} from 'react-native';

import { init, track } from '@amplitude/analytics-react-native';

import { auth } from "../firebase";

init('')

const ProfileScreen = () => {
    useEffect(() => {
        track('Visited Profile', undefined, {
            user_id: auth.currentUser?.email as string
        })
    })
    return (
        <KeyboardAvoidingView>
            <View>
                <Text>Profile Page</Text>
            </View>
        </KeyboardAvoidingView>
    )
};

export default ProfileScreen;
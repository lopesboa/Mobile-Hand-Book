import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { ViewMagazine } from '../screens/viewMagazine';
import { PdfViewer } from '../shared/pdfViewer';

interface Params { }

const screens = {
    ViewMagazine: {
        screen: ViewMagazine,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="EHandBook Magazine" />
            }
        }
    },
    PdfViewer: {
        screen: PdfViewer,
        navigationOptions: {
            title: "Employee Handbook",
        }
    }
}

const ViewMagazineStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'yellow', height: 60 }
    }
})

export default createAppContainer(ViewMagazineStack);
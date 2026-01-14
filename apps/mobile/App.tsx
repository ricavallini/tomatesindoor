import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from '@/screens/LoginScreen';
import { TuyaConnectScreen } from '@/screens/TuyaConnectScreen';
import { GardenSetupScreen } from '@/screens/GardenSetupScreen';
import { DeviceLinkScreen } from '@/screens/DeviceLinkScreen';
import { DashboardScreen } from '@/screens/DashboardScreen';
import { RoutinesScreen } from '@/screens/RoutinesScreen';
import { RoutineEditorScreen } from '@/screens/RoutineEditorScreen';
import { AlertsScreen } from '@/screens/AlertsScreen';
import { AlertDetailScreen } from '@/screens/AlertDetailScreen';
import { HistoryScreen } from '@/screens/HistoryScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { PaywallScreen } from '@/screens/PaywallScreen';

export type RootStackParamList = {
  Login: undefined;
  TuyaConnect: undefined;
  GardenSetup: undefined;
  DeviceLink: undefined;
  Dashboard: undefined;
  Routines: undefined;
  RoutineEditor: undefined;
  Alerts: undefined;
  AlertDetail: undefined;
  History: undefined;
  Settings: undefined;
  Paywall: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboarded ? (
          <>
            <Stack.Screen name="Login">
              {(props) => (
                <LoginScreen {...props} onContinue={() => props.navigation.navigate('TuyaConnect')} />
              )}
            </Stack.Screen>
            <Stack.Screen name="TuyaConnect">
              {(props) => (
                <TuyaConnectScreen {...props} onConnected={() => props.navigation.navigate('GardenSetup')} />
              )}
            </Stack.Screen>
            <Stack.Screen name="GardenSetup">
              {(props) => (
                <GardenSetupScreen {...props} onNext={() => props.navigation.navigate('DeviceLink')} />
              )}
            </Stack.Screen>
            <Stack.Screen name="DeviceLink">
              {(props) => (
                <DeviceLinkScreen
                  {...props}
                  onFinish={() => {
                    setIsOnboarded(true);
                    props.navigation.navigate('Dashboard');
                  }}
                />
              )}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Dashboard">
              {(props) => (
                <DashboardScreen
                  {...props}
                  onNavigate={(screen) => props.navigation.navigate(screen as keyof RootStackParamList)}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Routines">
              {(props) => <RoutinesScreen {...props} onEdit={() => props.navigation.navigate('RoutineEditor')} />}
            </Stack.Screen>
            <Stack.Screen name="RoutineEditor" component={RoutineEditorScreen} />
            <Stack.Screen name="Alerts">
              {(props) => <AlertsScreen {...props} onOpen={() => props.navigation.navigate('AlertDetail')} />}
            </Stack.Screen>
            <Stack.Screen name="AlertDetail" component={AlertDetailScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="Settings">
              {(props) => <SettingsScreen {...props} onPaywall={() => props.navigation.navigate('Paywall')} />}
            </Stack.Screen>
            <Stack.Screen name="Paywall" component={PaywallScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

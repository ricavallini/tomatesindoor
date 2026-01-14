import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface LoginScreenProps {
  onContinue: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tomates Indoor</Text>
      <Text style={styles.subtitle}>Acesse sua horta indoor e conecte dispositivos Tuya.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputPlaceholder} />
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputPlaceholder} />
        <PrimaryButton label="Entrar" onPress={onContinue} />
      </View>
      <Text style={styles.link}>Criar conta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: theme.spacing.sm
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg
  },
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    gap: theme.spacing.sm
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 12
  },
  inputPlaceholder: {
    height: 40,
    borderRadius: theme.radius.sm,
    backgroundColor: '#0F172A'
  },
  link: {
    color: theme.colors.secondary,
    marginTop: theme.spacing.md,
    textAlign: 'center'
  }
});

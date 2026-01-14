import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface GardenSetupScreenProps {
  onNext: () => void;
}

export const GardenSetupScreen: React.FC<GardenSetupScreenProps> = ({ onNext }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Horta</Text>
      <Text style={styles.subtitle}>Defina o nome e local da sua horta indoor.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <View style={styles.inputPlaceholder} />
        <Text style={styles.label}>Local</Text>
        <View style={styles.inputPlaceholder} />
        <Text style={styles.label}>Cultivar (opcional)</Text>
        <View style={styles.inputPlaceholder} />
        <PrimaryButton label="Salvar e continuar" onPress={onNext} />
      </View>
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
    fontSize: 24,
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
  }
});

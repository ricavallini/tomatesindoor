import React from 'react';
import { Pressable, StyleSheet, Text, PressableProps } from 'react-native';
import { theme } from './Theme';

interface PrimaryButtonProps extends PressableProps {
  label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, style, ...props }) => {
  return (
    <Pressable style={[styles.button, style]} {...props}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    alignItems: 'center'
  },
  label: {
    color: theme.colors.textPrimary,
    fontWeight: '600'
  }
});

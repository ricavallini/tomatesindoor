import { RoutineRule } from '@/types';

export interface AutomationContext {
  temperature?: number;
  humidity?: number;
  deviceStates: Record<string, unknown>;
}

export class AutomationEngine {
  private rules: RoutineRule[] = [];

  setRules(rules: RoutineRule[]) {
    this.rules = rules;
  }

  evaluate(context: AutomationContext) {
    return this.rules.map((rule) => ({
      ruleId: rule.id,
      shouldTrigger: this.checkRule(rule, context)
    }));
  }

  private checkRule(rule: RoutineRule, context: AutomationContext) {
    if (rule.condition.includes('humidity') && typeof context.humidity === 'number') {
      return context.humidity < 55;
    }

    if (rule.condition.includes('temperature') && typeof context.temperature === 'number') {
      return context.temperature > 28;
    }

    return false;
  }
}

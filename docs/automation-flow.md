# Fluxo de automações

1. App sincroniza dispositivos Tuya e lê estados atuais.
2. AutomationEngine avalia regras das rotinas ativas.
3. Comandos são enviados para dispositivos quando condições são atendidas.
4. Logs são persistidos no backend.
5. Alertas são disparados quando falhas acontecem.

## Frequência sugerida
- Sincronização: a cada 5-10 minutos.
- Avaliação de regras: a cada 1-5 minutos.
- Alertas críticos: imediatos.

## Fallback
- Em caso de timeout, repetir comando 2x.
- Se dispositivo ficar offline, gerar alerta e pausar regra relacionada.

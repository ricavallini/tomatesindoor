# Mapeamento de DPs (Tuya)

> Preencha os DPs reais conforme seu dispositivo Tuya. Estes exemplos são placeholders.

| Categoria | DP | Descrição | Exemplo |
| --- | --- | --- | --- |
| Light | switch | Liga/desliga a luz | true/false |
| Light | brightness | Intensidade de luz | 0-100 |
| Fan | switch | Liga/desliga ventilação | true/false |
| Fan | speed | Velocidade do fan | 1-3 |
| Humidifier | switch | Liga/desliga umidificador | true/false |
| Humidifier | humidity_set | Umidade alvo | 40-80 |
| Sensor | temp_current | Temperatura atual | 24.5 |
| Sensor | humidity_current | Umidade atual | 62 |
| Pump | switch | Liga/desliga irrigação | true/false |
| Outlet | switch | Liga/desliga tomada | true/false |

## Variáveis Tuya

```
TUYA_CLIENT_ID=
TUYA_SECRET=
TUYA_ENDPOINT=
TUYA_REGION=
```

## Fluxo de integração
1. Usuário autoriza a conta Tuya.
2. App chama backend para obter token e listar homes.
3. Dispositivos são sincronizados e mapeados para categorias abstratas.
4. Comandos são enviados usando o DP específico.

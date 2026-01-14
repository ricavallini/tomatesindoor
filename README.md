# Tomates Indoor

App mobile (iOS/Android) + backend para gerenciamento de hortas indoor com dispositivos Tuya.

## Plano (MVP → v1)
1. **MVP**: onboarding, dashboard, rotinas básicas, alertas, histórico simples, mock Tuya, plano Free/Paid com paywall.
2. **v1**: integração Tuya real (OAuth + OpenAPI), automações avançadas, relatório exportável, observabilidade e melhorias de UX.

## Estrutura do repositório
```
apps/
  mobile/     # React Native (Expo + TypeScript)
  backend/    # Node.js (Express + PostgreSQL)
docs/
```

## Mobile (Expo)
### Setup
```bash
cd apps/mobile
npm install
npm run start
```

### Mock mode
Se `TUYA_CLIENT_ID`, `TUYA_SECRET` ou `TUYA_ENDPOINT` não estiverem definidos, o app entra automaticamente em mock mode para permitir testes de UI e fluxos.

## Backend (Express)
### Setup
```bash
cd apps/backend
npm install
npm run dev
```

### Variáveis de ambiente
Crie um `.env` com:
```
PORT=4000
JWT_SECRET=change-me
DATABASE_URL=postgresql://user:pass@localhost:5432/tomates_indoor
TUYA_CLIENT_ID=
TUYA_SECRET=
TUYA_ENDPOINT=
TUYA_REGION=
REVENUECAT_WEBHOOK_SECRET=
```

### Migrações
As migrações SQL iniciais estão em `apps/backend/migrations/001_init.sql`.

## Documentação
- [Mapeamento de DPs Tuya](docs/tuya-dp-mapping.md)
- [Endpoints do backend](docs/api-endpoints.md)
- [Fluxo de automações](docs/automation-flow.md)

## Observações
- Integrações com Tuya e RevenueCat estão em placeholders aguardando credenciais reais.
- Não inventamos endpoints Tuya: use a plataforma IoT da Tuya conforme seu projeto.

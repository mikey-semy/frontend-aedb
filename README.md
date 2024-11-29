# AEDB - Frontend

## Описание

Автоматический Электропривод - База (AEDB) — это CRM система, предназначенная для управления данными и процессами, связанными с автоматическими электроприводами. 



## Установка

1. **Клонируйте репозиторий:**
```bash
   git clone https://github.com/mikey-semy/frontend-aedb.git
   cd frontend-aedb
```
2. **Убедитесь, что у васустановлена версия Node.js 18 и выше:**
```bash
    nvm install 18
    nvm use 18
```
3. **Установите зависимости с помощью Yarn:**
```bash
    yarn
```

## Запуск
Для запуска проекта используйте следующую команду:
```bash
    yarn dev
```

## Скрипты
В проекте доступны следующие скрипты:

- **yarn dev** — Запускает проект в режиме разработки с Vite.
- **yarn build** — Компилирует TypeScript и собирает проект для продакшена с помощью Vite.
- **yarn serve** — Запускает статический сервер для раздачи собранного проекта из папки dist на порту 3000.
- **yarn lint** — Проверяет код на наличие ошибок с помощью ESLint.
- **yarn preview** — Предварительный просмотр собранного проекта.

## Лицензия 
Этот проект лицензирован под MIT License. Подробности смотрите в файле [LICENSE](LICENSE.md)
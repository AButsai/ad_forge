# landing-ads — AdForge

Лендинг для Facebook App Review / Business Verification: описание продукта, Privacy Policy,
Terms of Service. Next.js 16 (App Router) + Tailwind v4 + TypeScript, тот же стек, что и в
`landing-bot`.

## Перед тем как отправлять на ревью в Meta — обязательно замени плейсхолдеры

Все живут в [src/data/data.ts](src/data/data.ts):

- `url` — реальный домен после покупки/деплоя (сейчас placeholder)
- `contactEmail` — реальная почта на твоём домене
- `legalEntityName` / `legalAddress` — **юр. название и адрес ФОП ТОЧНО как в EDR-выписке**,
  буква в букву — это то, что Meta сверяет при Business Verification и App Review

Название "AdForge" и вся копия — черновой вариант, что-то придумывать заново не обязательно, но
поменять можно как угодно.

## Запуск

```bash
npm install
npm run dev
```

## Деплой

Как и `landing-bot` — предполагается Vercel (домен + HTTPS из коробки).

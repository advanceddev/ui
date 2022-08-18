# Unreal UI

[![CI/CD pipeline](https://github.com/advanceddev/ui/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/advanceddev/ui/actions/workflows/publish.yml) [![NPM version](https://img.shields.io/npm/v/@advanceddev/unreal-ui-kit.svg?style=flat)](https://www.npmjs.com/package/@advanceddev/unreal-ui-kit) [![NPM monthly downloads](https://img.shields.io/npm/dm/@advanceddev/unreal-ui-kit.svg?style=flat)](https://npmjs.org/package/@advanceddev/unreal-ui-kit) [![NPM total downloads](https://img.shields.io/npm/dt/@advanceddev/unreal-ui-kit.svg?style=flat)](https://npmjs.org/package/@advanceddev/unreal-ui-kit)


Набор элементов интерфейса для проектов на ReactJS. Все компоненты написаны с нуля без использованя сторонних UI-библиотек.

- Обычные компоненты типа кнопок, инпутов, модальных окон
- Составные компоненты - формы, слайдеры, ...
- Сложные компоненты - аудиоплеер (стейт-менеджмент на базе XSTATE)

## Установка

Unreal UI написана на базе `react ^18.2.0` и `react-dom ^18.2.0`. В настоящее время библиотека находится на стадии разработки и оптимизации. Всем PR - r u welcome!

Установить библиотеку можно, выполнив одну из следующих команд:

```sh
yarn add @advanceddev/unreal-ui-kit
```

или

```sh
npm i @advanceddev/unreal-ui-kit
```

## Использование

Для использования достаточно импортировать компонент из библиотеки, например:

```tsx
import * as React from 'react'
import { Button } from '@advanceddev/unreal-ui-kit'

const SomeComponent = () => {
	const handleClick = () => {
		alert('Clicked!')
	}

	return (
		<>
			<Button text="Click me!" type="primary" onClick={handleClick} />
		</>
	)
}
```

## Лицензия

MIT

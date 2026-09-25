# `@codexporer.io/expo-radio-button`

A theme-integrated radio button component for Expo and React Native applications. Supports checked states, inline labels, customizable icons, and dynamic colors via `@codexporer.io/expo-app-theme`.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-radio-button
```

Ensure peer dependencies are installed:
```bash
yarn add @expo/vector-icons @codexporer.io/expo-app-theme
```

## Quick Start

### Basic Radio Button

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from '@codexporer.io/expo-radio-button';

export function RadioGroupExample() {
  const [selected, setSelected] = useState('dark');

  return (
    <View style={{ gap: 8 }}>
      <RadioButton
        checked={selected === 'light'}
        onPress={() => setSelected('light')}
        label="Light Theme"
      />
      <RadioButton
        checked={selected === 'dark'}
        onPress={() => setSelected('dark')}
        label="Dark Theme"
      />
    </View>
  );
}
```

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean` | `false` | Boolean selection state |
| `status` | `'checked' \| 'unchecked'` | — | Status override (`status === 'checked'` takes precedence over `checked`) |
| `label` | `string \| ReactNode` | — | Text label or custom component rendered next to the radio button |
| `labelStyle` | `StyleProp<TextStyle>` | — | Custom text style for the label |
| `onPress` | `() => void` | — | Callback invoked when tapped |
| `color` | `string` | `theme.primary` | Active / selected radio color |
| `uncheckedColor` | `string` | `theme.border` | Inactive circle border color |
| `size` | `number` | `24` | Icon diameter in points |
| `disabled` | `boolean` | `false` | Disables press interactions |
| `style` | `StyleProp<ViewStyle>` | — | Container style |

## License

MIT
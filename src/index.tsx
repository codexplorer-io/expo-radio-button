import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '@codexporer.io/expo-app-theme';

export interface RadioButtonProps {
    status?: 'checked' | 'unchecked';
    checked?: boolean;
    onPress?: () => void;
    disabled?: boolean;
    color?: string;
    uncheckedColor?: string;
    size?: number;
    label?: string | React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    status,
    checked,
    onPress,
    disabled = false,
    color,
    uncheckedColor,
    size = 24,
    label,
    labelStyle,
    style
}) => {
    const theme = useAppTheme();

    const isChecked = status ? status === 'checked' : !!checked;
    const activeColor = color || theme.primary;
    const inactiveColor = uncheckedColor || theme.border;

    const iconName = isChecked ? 'radiobox-marked' : 'radiobox-blank';
    const iconColor = isChecked ? activeColor : inactiveColor;

    return (
        <TouchableOpacity
            style={[
                styles.container,
                label ? styles.row : null,
                style
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
            <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={iconColor}
            />
            {label ? (
                typeof label === 'string' ? (
                    <Text
                        style={[
                            styles.label,
                            { color: theme.text },
                            labelStyle
                        ]}
                    >
                        {label}
                    </Text>
                ) : (
                    label
                )
            ) : null}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    label: {
        fontSize: 16,
    }
});

export default RadioButton;

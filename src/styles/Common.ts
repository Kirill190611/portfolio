import {Theme} from "./Theme.styled";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Jost'};
    font-weight: ${weight || 400};
    color: ${color || Theme.lightTheme.textColors.primary};
    lineHeight: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px) / (1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px ), ${Fmax}px);
`
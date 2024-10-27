import styled from 'styled-components';
import { ButtonContainer, ButtonIcon, ButtonTitle } from '../../../common/Button/Button.styles';

export const EdgeTrigger = styled.div`
    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 20px;
        height: 100%;
        z-index: 999;
        pointer-events: none;
    }
`;

export const CollapseButtonContainer = styled(ButtonContainer) <{ isCollapsed: boolean }>`
    position: relative;
    margin-top: auto;
    width: ${props => props.isCollapsed ? '40px' : '100%'};
    text-align: center;
    transition: all var(--transition-default);
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        width: 30px;
        height: 60px;
        background: white;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
        border-radius: 0 5px 5px 0;
        z-index: 1000; 
        pointer-events: all;
    }
`;

export const CollapseButtonTitle = styled(ButtonTitle) <{ isCollapsed: boolean }>`
    display: ${props => props.isCollapsed ? 'none' : 'block'};
`;

export const CollapseButtonIcon = styled(ButtonIcon) <{ isCollapsed: boolean }>`
    font-size: 26px;
    transform: ${props => props.isCollapsed ? 'rotate(180deg)' : 'none'};
    transition: transform var(--transition-default);
    min-width: 26px;
    min-height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;
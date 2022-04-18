import { cssReplaceVariable1 as v } from "../../../cssGenerators/variable";

import PrimeFlexConfig from "./primeflexConfig";

import values from "../../../cssGenerators/arrayValues";
import divider from "../../../cssGenerators/divider";
import steps from "../../../cssGenerators/stepByStep";
import { KeyValueStringObject } from "../../../types";

// @TODO Ver lo responsive
// @TODO Analizar los casos de los container responsive
// @TODO Hacer un multistep generator recibiendo un array de varios pares y un solo from, to, step
// @TODO Responsive col-12 md:col-2
// @TODO Algun test que chequee si cada variable tiene css válido
const PrimeFlexClasses: KeyValueStringObject = {
    // PrimeFlex Layout - Display - Docs: https://www.primefaces.org/primeflex/display
    flex: 'display: flex;',
    block: 'display: block;',
    hidden: 'display: none;',
    inline: 'display: inline;',
    'inline-flex': 'display: inline-flex;',
    'inline-block': 'display: inline-block;',

    // PrimeFlex Layout - Overflow - Docs: https://www.primefaces.org/primeflex/overflow
    'overflow-auto': 'overflow: auto;',
    'overflow-scroll': 'overflow: scroll;',
    'overflow-x-auto': 'overflow-x: auto;',
    'overflow-y-auto': 'overflow-y: auto;',
    'overflow-hidden': 'overflow: hidden;',
    'overflow-visible': 'overflow: visible;',
    'overflow-x-scroll': 'overflow-x: scroll;',
    'overflow-x-hidden': 'overflow-x: hidden;',
    'overflow-x-visible': 'overflow-x: visible;',
    
    // PrimeFlex Layout - Position - Docs: https://www.primefaces.org/primeflex/position
    'fixed': 'position: fixed;',
    'static': 'position: static;',
    'sticky': 'position: sticky;',
    'absolute': 'position: absolute;',
    'relative': 'position: relative;',
    
    // PrimeFlex Layout - Top / Right / Bottom / Left - Docs: https://www.primefaces.org/primeflex/toprightbottomleft
    'top-auto': 'top: auto;',
    'right-auto': 'right: auto;',
    'left-auto': 'left: auto;',
    'bottom-auto': 'bottom: auto;',
    ...steps(`right-${v}`,  `right: ${v}%;`,  { from: 0, to: 100, step: 10 }),
    ...steps(`top-${v}`,    `top: ${v}%;`,    { from: 0, to: 100, step: 10 }),
    ...steps(`bottom-${v}`, `bottom: ${v}%;`, { from: 0, to: 100, step: 10 }),
    ...steps(`left-${v}`,   `left: ${v}%;`,   { from: 0, to: 100, step: 10 }),
    
    // PrimeFlex Layout - Index - Docs: https://www.primefaces.org/primeflex/zindex
    'z-auto': 'z-index: auto;',
    ...steps(`z-${v}`, `z-index: ${v};`, { from: 0, to: 10, step: 1 }),
    
    // PrimeFlex Flexbox - Flex Direction - Docs: https://www.primefaces.org/primeflex/flexdirection
    'flex-row': 'flex-direction: row;',
    'flex-column': 'flex-direction: column;',
    'flex-row-reverse': 'flex-direction: row-reverse;',
    'flex-column-reverse': 'flex-direction: column-reverse;',
    
    // PrimeFlex Flexbox - Flex Wrap - Docs: https://www.primefaces.org/primeflex/flexwrap
    'flex-wrap': 'flex-wrap: wrap;',
    'flex-nowrap': 'flex-wrap: nowrap;',
    'flex-wrap-reverse': 'flex-wrap: wrap-reverse;',
    
    // PrimeFlex Flexbox - Flex - Docs: https://www.primefaces.org/primeflex/flex
    'flex-1': 'flex: 1 1 0%;',
    'flex-auto': 'flex: 1 1 auto;',
    'flex-none': 'flex: 0 1 auto;',
    'flex-initial': 'flex: none;',
    
    // PrimeFlex Flexbox - Flex Grow - Docs: https://www.primefaces.org/primeflex/flexgrow
    'flex-grow-0': 'flex-grow: 0;',
    'flex-grow-1': 'flex-grow: 1;',
    
    // PrimeFlex Flexbox - Flex Shrink - Docs: https://www.primefaces.org/primeflex/flexshrink
    'flex-shrink-0': 'flex-shrink: 0;',
    'flex-shrink-1': 'flex-shrink: 1;',
    
    // PrimeFlex Flexbox - Order - Docs: https://www.primefaces.org/primeflex/order
    ...steps(`flex-order-${v}`, `order: ${v};`, { from: 0, to: 25, step: 1 }),
    
    // PrimeFlex Flexbox - Justify Content - Docs: https://www.primefaces.org/primeflex/justifycontent
    'justify-content-start': 'justify-content: flex-start;',
    'justify-content-end': 'justify-content: flex-end;',
    'justify-content-center': 'justify-content: center;',
    'justify-content-between': 'justify-content: space-between;',
    'justify-content-around': 'justify-content: space-around;',
    'justify-content-evenly': 'justify-content: space-evenly;',
    
    // PrimeFlex Flexbox - Align Content - Docs: https://www.primefaces.org/primeflex/aligncontent
    'align-content-start': 'align-content: flex-start;',
    'align-content-end': 'align-content: flex-end;',
    'align-content-center': 'align-content: center;',
    'align-content-between': 'align-content: space-between;',
    'align-content-around': 'align-content: space-around;',
    'align-content-evenly': 'align-content: space-evenly;',
    
    // PrimeFlex Flexbox - Align Items - Docs: https://www.primefaces.org/primeflex/alignitems
    'align-items-stretch': 'align-items: stretch;',
    'align-items-start': 'align-items: flex-start;',
    'align-items-center': 'align-items: center;',
    'align-items-end': 'align-items: flex-end;',
    'align-items-baseline': 'align-items: baseline;',
    
    // PrimeFlex Flexbox - Align Self - Docs: https://www.primefaces.org/primeflex/alignself
    'align-self-auto': 'align-self: auto;',
    'align-self-start': 'align-self: flex-start;',
    'align-self-center': 'align-self: center;',
    'align-self-end': 'align-self: flex-end;',
    'align-self-stretch': 'align-self: stretch;',
    'align-self-baseline': 'align-self: baseline;',
    
    // PrimeFlex GRID - FormLayout - Docs: https://www.primefaces.org/primeflex/formlayout
    'formgrid': '',
    'inputfield': `font-size: 1rem; color: var(--text-color); background: var(--surface-overlay); padding: 0.5rem 0.5rem; border: 1px solid var(--surface-border); appearance: none; border-radius: 3px;`,
    'field': 'margin-bottom: 1rem;',
    'field-checkbox': `margin-bottom: 1rem; display: flex; align-items: center;`,
    'formgroup-inline': `display: flex; flex-wrap: wrap; align-items: flex-start;`,
    'field-radiobutton': `margin-bottom: 1rem; display: flex; align-items: center;`,
    
    // PrimeFlex GRID - Grid System - Docs: https://www.primefaces.org/primeflex/gridsystem
    'col': `flex-grow: 1; flex-basis: 0; padding: ${PrimeFlexConfig.gridSystem.gutter};`,
    'grid': `display: flex; flex-wrap: wrap; margin-right: -0.5rem; margin-left: -0.5rem; margin-top: -0.5rem;`,
    'col-fixed': `flex: 0 0 auto; padding: ${PrimeFlexConfig.gridSystem.gutter};`,
    'grid-nogutter': ` margin-right: 0; margin-left: 0; margin-top: 0;`,
    ...divider(`col-offset-${v}`, `margin-left: ${v}%;`, { dividend: 100, divisor: 12 }),
    ...divider(
        `col-${v}`,
        `flex: 0 0 auto; padding: ${PrimeFlexConfig.gridSystem.gutter}; width: ${v}%;`, 
        { dividend: 100, divisor: 12, hasToHaveZero: false }
    ),
    
    // PrimeFlex BACKGROUND - Background Color - Docs: https://www.primefaces.org/primeflex/backgroundcolor
    'bg-white': 'background-color: #ffffff;',
    'surface-card': 'background-color: var(--surface-card);',
    'surface-hover': 'background-color: var(--surface-hover);',
    'surface-ground': 'background-color: var(--surface-ground);',
    'surface-border': 'background-color: var(--surface-border);',
    'surface-section': 'background-color: var(--surface-section);',
    'surface-overlay': 'background-color: var(--surface-overlay);',
    'bg-primary': 'background-color: var(--primary-color); color: var(--primary-color-text);',
    'bg-primary-reverse': 'background-color: var(--primary-color-text); color: var(--primary-color);',
    
    'surface-50': 'background-color: var(--surface-50);',
    'bg-green-50': 'background-color: var(--green-50);',
    'bg-blue-50': 'background-color: var(--blue-50);',
    'bg-yellow-50': 'background-color: var(--yellow-50);',
    'bg-cyan-50': 'background-color: var(--cyan-50);',
    'bg-indigo-50': 'background-color: var(--indigo-50);',
    'bg-pink-50': 'background-color: var(--pink-50);',
    'bg-orange-50': 'background-color: var(--orange-50);',
    'bg-teal-50': 'background-color: var(--teal-50);',
    'bg-bluegray-50': 'background-color: var(--bluegray-50);',
    'bg-gray-50': 'background-color: var(--gray-50);',
    'bg-purple-50': 'background-color: var(--purple-50);',

    ...steps(`surface-${v}`, `background-color: var(--surface-${v});`, { from: 0, to: 900, step: 100 }),
    ...steps(`bg-blue-${v}`, `background-color: var(--blue-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-green-${v}`, `background-color: var(--green-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-yellow-${v}`, `background-color: var(--yellow-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-cyan-${v}`, `background-color: var(--cyan-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-pink-${v}`, `background-color: var(--pink-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-indigo-${v}`, `background-color: var(--indigo-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-teal-${v}`, `background-color: var(--teal-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-orange-${v}`, `background-color: var(--orange-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-bluegray-${v}`, `background-color: var(--bluegray-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-purple-${v}`, `background-color: var(--purple-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`bg-gray-${v}`, `background-color: var(--gray-${v});`, { from: 100, to: 900, step: 100 }),

    ...steps(`bg-white-alpha-${v}`, `background-color: rgba(255,255,255,0.${v});`, { from: 1, to: 9, step: 1 }),
    ...steps(`bg-black-alpha-${v}`, `background-color: rgba(0,0,0,0.${v});`, { from: 1, to: 9, step: 1 }),
    
    // PrimeFlex BACKGROUND - Background Repeat - Docs: https://www.primefaces.org/primeflex/backgroundrepeat
    'bg-repeat': 'background-repeat: repeat;',
    'bg-no-repeat': 'background-repeat: no-repeat;',
    'bg-repeat-x': 'background-repeat: repeat-x;',
    'bg-repeat-y': 'background-repeat: repeat-y;',
    'bg-repeat-round': 'background-repeat: round;',
    'bg-repeat-space': 'background-repeat: space;',
    
    // PrimeFlex BACKGROUND - Background Size - Docs: https://www.primefaces.org/primeflex/backgroundsize
    'bg-auto': 'background-size: auto;',
    'bg-cover': 'background-size: cover;',
    'bg-contain': 'background-size: contain;',
    
    // PrimeFlex BACKGROUND - Background Position - Docs: https://www.primefaces.org/primeflex/backgroundsize
    'bg-bottom': 'background-position: bottom;',
    'bg-center': 'background-position: center;',
    'bg-left': 'background-position: left;',
    'bg-left-bottom': 'background-position: left bottom;',
    'bg-left-top': 'background-position: left top;',
    'bg-right': 'background-position: right;',
    'bg-right-top': 'background-position: right top;',
    'bg-right-bottom': 'background-position: right bottom;',
    'bg-top': 'background-position: top;',
    
    // PrimeFlex BORDER - Border Radius - Docs: https://www.primefaces.org/primeflex/borderradius
    'border-noround': 'border-radius: 0;',
    'border-round': 'border-radius: var(--border-radius);',
    'border-circle': 'border-radius: 50%;',
    'border-round-left': 'border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);',
    'border-round-top': 'border-top-left-radius: var(--border-radius); border-top-right-radius: var(--border-radius);',
    'border-round-bottom': 'border-bottom-left-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);',
    'border-round-right': 'border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);',
    
    // PrimeFlex BORDER - Border Width - Docs: https://www.primefaces.org/primeflex/borderwidth
    'border-none': 'border-width: 0px;',
    'border-top-none': 'border-top-width: 0px;',
    'border-left-none': 'border-left-width: 0px;',
    'border-right-none': 'border-right-width: 0px;',
    'border-bottom-none': 'border-bottom-width: 0px;',
    'border-x-none': 'border-right-width: 0px; border-left-width: 0px;',
    'border-y-none': 'border-top-width: 0px; border-bottom-width: 0px;',
    
    ...steps(`border-${v}`, `border-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    ...steps(`border-x-${v}`, `border-right-width: ${v}px; border-left-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    ...steps(`border-y-${v}`, `border-top-width: ${v}px; border-bottom-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    ...steps(`border-top-${v}`, `border-top-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    ...steps(`border-left-${v}`, `border-left-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    ...steps(`border-bottom-${v}`, `border-bottom-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    ...steps(`border-right-${v}`, `border-right-width: ${v}px;`, { from: PrimeFlexConfig.generators.borderSize.from, to: PrimeFlexConfig.generators.borderSize.to, step: PrimeFlexConfig.generators.borderSize.step }),
    
    // PrimeFlex BORDER - Border Style - Docs: https://www.primefaces.org/primeflex/borderstyle
    'border-solid': 'border-style: solid;',
    'border-dashed': 'border-style: dashed;',
    'border-dotted': 'border-style: dotted;',
    'border-double': 'border-style: double;',
    
    // PrimeFlex BORDER - Border Color - Docs: https://www.primefaces.org/primeflex/bordercolor
    'border-primary': 'border-color: var(--primary-color);',
    'border-white': 'border-color: #ffffff;',
    
    'border-50': 'border-color: var(--surface-50);',
    'border-green-50': 'border-color: var(--green-50);',
    'border-blue-50': 'border-color: var(--blue-50);',
    'border-yellow-50': 'border-color: var(--yellow-50);',
    'border-cyan-50': 'border-color: var(--cyan-50);',
    'border-indigo-50': 'border-color: var(--indigo-50);',
    'border-pink-50': 'border-color: var(--pink-50);',
    'border-orange-50': 'border-color: var(--orange-50);',
    'border-teal-50': 'border-color: var(--teal-50);',
    'border-bluegray-50': 'border-color: var(--bluegray-50);',
    'border-gray-50': 'border-color: var(--gray-50);',
    'border-purple-50': 'border-color: var(--purple-50);',
    
    ...steps(`border-${v}`, `border-color: var(--surface-${v});`, { from: 0, to: 900, step: 100 }),
    ...steps(`border-blue-${v}`, `border-color: var(--blue-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-green-${v}`, `border-color: var(--green-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-yellow-${v}`, `border-color: var(--yellow-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-cyan-${v}`, `border-color: var(--cyan-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-pink-${v}`, `border-color: var(--pink-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-indigo-${v}`, `border-color: var(--indigo-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-teal-${v}`, `border-color: var(--teal-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-orange-${v}`, `border-color: var(--orange-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-bluegray-${v}`, `border-color: var(--bluegray-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-purple-${v}`, `border-color: var(--purple-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`border-gray-${v}`, `border-color: var(--gray-${v});`, { from: 100, to: 900, step: 100 }),
    
    ...steps(`border-white-alpha-${v}`, `border-color: rgba(255,255,255,0.${v});`, { from: 1, to: 9, step: 1 }),
    ...steps(`border-black-alpha-${v}`, `border-color: rgba(0,0,0,0.${v});`, { from: 1, to: 9, step: 1 }),
    
    // PrimeFlex SPACING - Padding - Docs: https://www.primefaces.org/primeflex/padding
    ...values(`p-${v}`, `padding: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`pt-${v}`, `padding-top: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`pr-${v}`, `padding-right: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`pb-${v}`, `padding-bottom: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`pl-${v}`, `padding-left: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`px-${v}`, `padding-left: ${v}${PrimeFlexConfig.generators.spacing.unit}; padding-right: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`py-${v}`, `padding-top: ${v}${PrimeFlexConfig.generators.spacing.unit}; padding-bottom: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    
    // PrimeFlex SPACING - Margin - Docs: https://www.primefaces.org/primeflex/margin
    'm-auto': 'margin: auto;',
    'mx-auto': 'margin-left: auto; margin-right: auto;',
    'my-auto': 'margin-top: auto; margin-bottom: auto;',
    'mt-auto': 'margin-top: auto;',
    'mb-auto': 'margin-bottom: auto;',
    'ml-auto': 'margin-left: auto;',
    'mr-auto': 'margin-right: auto;',

    ...values(`m-${v}`, `margin: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`mt-${v}`, `margin-top: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`mr-${v}`, `margin-right: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`mb-${v}`, `margin-bottom: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`ml-${v}`, `margin-left: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`mx-${v}`, `margin-left: ${v}${PrimeFlexConfig.generators.spacing.unit}; margin-right: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`my-${v}`, `margin-top: ${v}${PrimeFlexConfig.generators.spacing.unit}; margin-bottom: ${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),

    ...values(`-m-${v}`, `margin: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`-mt-${v}`, `margin-top: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`-mr-${v}`, `margin-right: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`-mb-${v}`, `margin-bottom: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`-ml-${v}`, `margin-left: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`-mx-${v}`, `margin-left: -${v}${PrimeFlexConfig.generators.spacing.unit}; margin-right: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    ...values(`-my-${v}`, `margin-top: -${v}${PrimeFlexConfig.generators.spacing.unit}; margin-bottom: -${v}${PrimeFlexConfig.generators.spacing.unit};`, PrimeFlexConfig.generators.spacing.values),
    
    // PrimeFlex SIZING - Min Width - Docs: https://www.primefaces.org/primeflex/minwidth
    'min-w-0': 'min-width: 0px;',
    'min-w-full': 'min-width: 100%;',
    'min-w-screen': 'min-width: 100vw;',
    'min-w-min': 'min-width: min-content;',
    'min-w-max': 'min-width: max-content;',
    
    // PrimeFlex SIZING - Width - Docs: https://www.primefaces.org/primeflex/width
    'w-full': 'width: 100%;',
    'w-screen': 'width: 100vw;',
    'w-auto': 'width: auto;',
    'w-min': 'width: min-content;',
    'w-max': 'width: max-content;',
    
    ...divider(`w-${v}`, `width: ${v}%;`, { dividend: 100, divisor: 12, hasToHaveZero: false }),
    ...steps(`w-${v}rem`, `width: ${v}rem;`, { from: 1, to: 30, step: 1 }),
    
   
    // PrimeFlex SIZING - Max Width - Docs: https://www.primefaces.org/primeflex/maxwidth
    'max-w-0': 'max-width: 0px;',
    'max-w-full': 'max-width: 100%;',
    'max-w-screen': 'max-width: 100vw;',
    'max-w-min': 'max-width: min-content;',
    'max-w-max': 'max-width: max-content;',
    
    // PrimeFlex SIZING - Min Height - Docs: https://www.primefaces.org/primeflex/minheight
    'min-h-0': 'min-height: 0px;',
    'min-h-full': 'min-height: 100%;',
    'min-h-screen': 'min-height: 100vh;',
    
    // PrimeFlex SIZING - Height - Docs: https://www.primefaces.org/primeflex/height
    'h-full': 'height: 100%;',
    'h-screen': 'height: 100vh;',
    'h-auto': 'height: auto;',
    
    ...steps(`h-${v}rem`, `height: ${v}rem;`, { from: 1, to: 30, step: 1 }),    
    

    // PrimeFlex SIZING - Max Height - Docs: https://www.primefaces.org/primeflex/maxheight
    'max-h-0': 'max-height: 0px;',
    'max-h-full': 'max-height: 100%;',
    'max-h-screen': 'max-height: 100vh;',
    
    // PrimeFlex TYPOGRAPHY - Font Size - Docs: https://www.primefaces.org/primeflex/fontsize
    'text-xs': 'font-size: .75rem;',
    'text-sm': 'font-size: .875rem;',
    'text-base': 'font-size: 1rem;',
    'text-lg': 'font-size: 1.125rem;',
    'text-xl': 'font-size: 1.25rem;',
    'text-2xl': 'font-size: 1.5rem;',
    'text-3xl': 'font-size: 1.75rem;',
    'text-4xl': 'font-size: 2rem;',
    'text-5xl': 'font-size: 2.5rem;',
    'text-6xl': 'font-size: 3rem;',
    'text-7xl': 'font-size: 4rem;',
    'text-8xl': 'font-size: 6rem;',
    
    // PrimeFlex TYPOGRAPHY - Font Weight - Docs: https://www.primefaces.org/primeflex/fontweight
    'font-light': 'font-weight: 300;',
    'font-normal': 'font-weight: 400;',
    'font-medium': 'font-weight: 500;',
    'font-semibold': 'font-weight: 600;',
    'font-bold': 'font-weight: 700;',
    
    // PrimeFlex TYPOGRAPHY - Font Style - Docs: https://www.primefaces.org/primeflex/fontstyle
    'font-italic': 'font-style: italic;',
    
    // PrimeFlex TYPOGRAPHY - Text Color - Docs: https://www.primefaces.org/primeflex/textcolor
    'text-primary': 'color: var(--primary-color);',
    'text-white': 'color: #ffffff;',
    
    'text-50': 'color: var(--surface-50);',
    'text-green-50': 'color: var(--green-50);',
    'text-blue-50': 'color: var(--blue-50);',
    'text-yellow-50': 'color: var(--yellow-50);',
    'text-cyan-50': 'color: var(--cyan-50);',
    'text-indigo-50': 'color: var(--indigo-50);',
    'text-pink-50': 'color: var(--pink-50);',
    'text-orange-50': 'color: var(--orange-50);',
    'text-teal-50': 'color: var(--teal-50);',
    'text-bluegray-50': 'color: var(--bluegray-50);',
    'text-gray-50': 'color: var(--gray-50);',
    'text-purple-50': 'color: var(--purple-50);',
    
    ...steps(`text-${v}`, `color: var(--surface-${v});`, { from: 0, to: 900, step: 100 }),
    ...steps(`text-blue-${v}`, `color: var(--blue-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-green-${v}`, `color: var(--green-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-yellow-${v}`, `color: var(--yellow-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-cyan-${v}`, `color: var(--cyan-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-pink-${v}`, `color: var(--pink-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-indigo-${v}`, `color: var(--indigo-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-teal-${v}`, `color: var(--teal-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-orange-${v}`, `color: var(--orange-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-bluegray-${v}`, `color: var(--bluegray-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-purple-${v}`, `color: var(--purple-${v});`, { from: 100, to: 900, step: 100 }),
    ...steps(`text-gray-${v}`, `color: var(--gray-${v});`, { from: 100, to: 900, step: 100 }),
    
    ...steps(`text-white-alpha-${v}`, `color: rgba(255,255,255,0.${v});`, { from: 1, to: 9, step: 1 }),
    ...steps(`text-black-alpha-${v}`, `color: rgba(0,0,0,0.${v});`, { from: 1, to: 9, step: 1 }),
    

    // PrimeFlex TYPOGRAPHY - Text Align - Docs: https://www.primefaces.org/primeflex/textalign
    'text-left': 'text-align: left',
    'text-right': 'text-align: right',
    'text-center': 'text-align: center',
    'text-justify': 'text-align: justify',
    
    // PrimeFlex TYPOGRAPHY - Text Decoration - Docs: https://www.primefaces.org/primeflex/textdecoration
    'underline': 'text-decoration: underline;',
    'line-through': 'text-decoration: line-through;',
    'no-underline': 'text-decoration: no-underline;',
    
    // PrimeFlex TYPOGRAPHY - Text Overflow - Docs: https://www.primefaces.org/primeflex/textoverflow
    'text-overflow-clip': 'text-overflow: clip;',
    'text-overflow-ellipsis': 'text-overflow: ellipsis;',
    
    // PrimeFlex TYPOGRAPHY - Text Transform - Docs: https://www.primefaces.org/primeflex/texttransform
    'lowercase': 'text-transform: lowercase;',
    'uppercase': 'text-transform: uppercase;',
    'capitalize': 'text-transform: capitalize;',
    
    // PrimeFlex TYPOGRAPHY - Line Height - Docs: https://www.primefaces.org/primeflex/lineheight
    'line-height-1': 'line-height: 1;',
    'line-height-2': 'line-height: 1.25;',
    'line-height-3': 'line-height: 1.5;',
    'line-height-4': 'line-height: 2;',
    
    // PrimeFlex TYPOGRAPHY - Whitespace - Docs: https://www.primefaces.org/primeflex/whitespace
    'white-space-normal': 'white-space: normal;',
    'white-space-nowrap': 'white-space: nowrap;',
    
    // PrimeFlex TYPOGRAPHY - List Style Type - Docs: https://www.primefaces.org/primeflex/liststyletype
    'list-disc': 'list-style: disc;',
    'list-none': 'list-style: none;',
    'list-decimal': 'list-style: decimal;',

    // PrimeFlex EFFECTS - Elevation - Docs: https://www.primefaces.org/primeflex/elevation
    'shadow-none': 'box-shadow: none;',
    'shadow-1': 'box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);',
    'shadow-2': 'box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);',
    'shadow-3': 'box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1);',
    'shadow-4': 'box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);',
    'shadow-5': 'box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2);',
    'shadow-6': 'box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18);',
    'shadow-7': 'box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15);',
    'shadow-8': 'box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);',
    
    // PrimeFlex EFFECTS - Elevation - Docs: https://www.primefaces.org/primeflex/opacity
    'opacity-0': 'opacity: 0;',
    'opacity-100': 'opacity: 1;',
    ...steps(`opacity-${v}0`, `color: var(--surface-${v});`, { from: 1, to: 9, step: 1 }),

    // PrimeFlex TRANSITION - Transition Property - Docs: https://www.primefaces.org/primeflex/transitionproperty
    'transition-none': 'transition-property: none;',
    'transition-all': 'transition-property: all;',
    'transition-colors': 'transition-property: background-color,border-color,color;',
    'transition-transform': 'transition-property: transform;',

    // PrimeFlex TRANSITION - Transition Duration - Docs: https://www.primefaces.org/primeflex/transitionduration
    ...steps(`transition-duration-${v}`, `transition-duration: ${v}${PrimeFlexConfig.generators.transitions.unit};`, { from: PrimeFlexConfig.generators.transitions.durations[0].from, to: PrimeFlexConfig.generators.transitions.durations[0].to, step: PrimeFlexConfig.generators.transitions.durations[0].step }),
    ...steps(`transition-duration-${v}`, `transition-duration: ${v}${PrimeFlexConfig.generators.transitions.unit};`, { from: PrimeFlexConfig.generators.transitions.durations[1].from, to: PrimeFlexConfig.generators.transitions.durations[1].to, step: PrimeFlexConfig.generators.transitions.durations[1].step }),

    // PrimeFlex TRANSITION - Transition Timing Function - Docs: https://www.primefaces.org/primeflex/transitiontimingfunction
    'transition-linear': 'transition-timing-function: linear;',
    'transition-ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    'transition-ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    'transition-ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',

    // PrimeFlex TRANSITION - Transition Delay - Docs: https://www.primefaces.org/primeflex/transitiondelay
    ...steps(`transition-delay-${v}`, `transition-delay: ${v}${PrimeFlexConfig.generators.transitions.unit};`, { from: PrimeFlexConfig.generators.transitions.durations[0].from, to: PrimeFlexConfig.generators.transitions.delays[0].to, step: PrimeFlexConfig.generators.transitions.delays[0].step }),
    ...steps(`transition-delay-${v}`, `transition-delay: ${v}${PrimeFlexConfig.generators.transitions.unit};`, { from: PrimeFlexConfig.generators.transitions.delays[1].from, to: PrimeFlexConfig.generators.transitions.delays[1].to, step: PrimeFlexConfig.generators.transitions.delays[1].step }),

    // PrimeFlex ANIMATION - Animations - Docs: https://www.primefaces.org/primeflex/animations
    'fadein': 'animation: fadein .15s linear; @keyframes fadein { 0%  { opacity: 0; } 100% { opacity: 1; } }',
    'fadeout': 'animation: fadeout .15s linear; @keyframes fadeout { 0% { opacity: 1; } 100% { opacity: 0; } }',
    'slidedown': 'animation: slidedown .45s ease-in-out; @keyframes slidedown { 0 % { max- height: 0; } 100 % { max- height: auto; } }',
    'slideup': 'animation: slideup .45s cubic-bezier(0, 1, 0, 1); @keyframes slideup { 0% { max-height: 1000px; } 100% { max-height: 0; } }',
    'scalein': 'animation: scalein .15s linear; @keyframes scalein { 0% { opacity: 0; transform: scaleY(0.8); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: scaleY(1); } }',
    'fadeinleft': 'animation: fadeinleft .15s linear; @keyframes fadeinleft { 0% { opacity: 0; transform: translateX(-100%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateX(0%); } }',
    'fadeoutleft': 'animation: fadeoutleft .15s linear; @keyframes fadeoutleft { 0% { opacity: 0; transform: translateX(0%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateX(-100%); } }',
    'fadeinright': 'animation: fadeinright .15s linear; @keyframes fadeinright { 0% { opacity: 0; transform: translateX(100%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateX(0%); } }',
    'fadeoutright': 'animation: fadeoutright .15s linear; @keyframes fadeoutright { 0% { opacity: 0; transform: translateX(0%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateX(100%); } }',
    'fadeinup': 'animation: fadeinup .15s linear; @keyframes fadeinup { 0% { opacity: 0; transform: translateY(-100%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateY(0%); } }',
    'fadeoutup': 'animation: fadeoutup .15s linear; @keyframes fadeoutup { 0% { opacity: 0; transform: translateY(0%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateY(-100%); } }',
    'fadeindown': 'animation: fadeindown .15s linear; @keyframes fadeindown { 0% { opacity: 0; transform: translateY(100%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateY(0%); } }',
    'fadeoutdown': 'animation: fadeoutdown .15s linear; @keyframes fadeoutdown { 0% { opacity: 0; transform: translateY(0%); transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1); } 100% { opacity: 1; transform: translateY(100%); } }',
    'animate-width': 'animation: animate-width 1000ms linear; @keyframes animate-width { 0% { width: 0; } 100% { width: 100%; } }',
    
    // PrimeFlex ANIMATION - Animation Duration - Docs: https://www.primefaces.org/primeflex/animationduration
    ...steps(`animation-duration-${v}`, `animation-duration: ${v}${PrimeFlexConfig.generators.animations.unit};`, { from: PrimeFlexConfig.generators.animations.durations[0].from, to: PrimeFlexConfig.generators.animations.durations[0].to, step: PrimeFlexConfig.generators.animations.durations[0].step }),
    ...steps(`animation-duration-${v}`, `animation-duration: ${v}${PrimeFlexConfig.generators.animations.unit};`, { from: PrimeFlexConfig.generators.animations.durations[1].from, to: PrimeFlexConfig.generators.animations.durations[1].to, step: PrimeFlexConfig.generators.animations.durations[1].step }),
    
    // PrimeFlex ANIMATION - Animation Delay - Docs: https://www.primefaces.org/primeflex/animationdelay
    ...steps(`animation-delay-${v}`, `animation-delay: ${v}${PrimeFlexConfig.generators.animations.unit};`, { from: PrimeFlexConfig.generators.animations.delays[0].from, to: PrimeFlexConfig.generators.animations.delays[0].to, step: PrimeFlexConfig.generators.animations.delays[0].step }),
    ...steps(`animation-delay-${v}`, `animation-delay: ${v}${PrimeFlexConfig.generators.animations.unit};`, { from: PrimeFlexConfig.generators.animations.delays[1].from, to: PrimeFlexConfig.generators.animations.delays[1].to, step: PrimeFlexConfig.generators.animations.delays[1].step }),

    // PrimeFlex ANIMATION - Animation Iteration - Docs: https://www.primefaces.org/primeflex/animationiteration
    'animation-iteration-1': 'animation-iteration-count: 1;',
    'animation-iteration-2': 'animation-iteration-count: 2;',
    'animation-iteration-infinite': 'animation-iteration-count: infinite;',

    // PrimeFlex ANIMATION - Animation Timing Function - Docs: https://www.primefaces.org/primeflex/animationtimingfunction
    'animation-linear': 'animation-timing-function: linear;',
    'animation-ease-in': 'animation-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    'animation-ease-out': 'animation-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    'animation-ease-in-out': 'animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',

    // PrimeFlex ANIMATION - Animation Fill - Docs: https://www.primefaces.org/primeflex/animationfill
    'animation-fill-none': 'animation-fill-mode: none;',
    'animation-fill-forwards': 'animation-fill-mode: forwards;',
    'animation-fill-backwards': 'animation-fill-mode: backwards;',
    'animation-fill-both': 'animation-fill-mode: both;',

    // PrimeFlex TRANSFORM - Translate - Docs: https://www.primefaces.org/primeflex/translate
    'translate-x-0': 'transform: translateX(0%);',
    'translate-x-100': 'transform: translateX(100%);',
    '-translate-x-100': 'transform: translateX(-100%);',
    'translate-y-0': 'transform: translateY(0%);',
    'translate-y-100': 'transform: translateY(100%);',
    '-translate-y-100': 'transform: translateY(-100%);',

    // PrimeFlex TRANSFORM - Transform Origin - Docs: https://www.primefaces.org/primeflex/transformorigin
    'origin-center': 'transform-origin: center;',
    'origin-top': 'transform-origin: top;',
    'origin-top-right': 'transform-origin: top right;',
    'origin-right': 'transform-origin: right;',
    'origin-bottom-right': 'transform-origin: bottom right;',
    'origin-bottom': 'transform-origin: bottom;',
    'origin-bottom-left': 'transform-origin: bottom left;',
    'origin-left': 'transform-origin: left;',
    'origin-top-left': 'transform-origin: top left;',

    // PrimeFlex TRANSFORM - Rotate - Docs: https://www.primefaces.org/primeflex/rotate
    'rotate-90': 'transform: rotate(90deg);',
    '-rotate-90': 'transform: rotate(-90deg);',
    'rotate-180': 'transform: rotate(180deg);',
    '-rotate-180': 'transform: rotate(-180deg);',
    
    // PrimeFlex INTERACTIVITY - Appearance - Docs: https://www.primefaces.org/primeflex/appearance
    'appearance-none': 'appearance: none;',

    // PrimeFlex INTERACTIVITY - Cursor - Docs: https://www.primefaces.org/primeflex/cursor
    'cursor-auto': 'cursor: auto;',
    'cursor-pointer': 'cursor: pointer;',
    'cursor-wait': 'cursor: wait;',
    'cursor-move': 'cursor: move;',

    // PrimeFlex INTERACTIVITY - Outline - Docs: https://www.primefaces.org/primeflex/outline
    'outline-none': 'outline: none;',

    // PrimeFlex INTERACTIVITY - Pointer Events - Docs: https://www.primefaces.org/primeflex/pointerevents
    'pointer-events-none': 'pointer-events: none;',
    'pointer-events-auto': 'pointer-events: auto;',

    // PrimeFlex INTERACTIVITY - User Select - Docs: https://www.primefaces.org/primeflex/userselect
    'select-none': 'user-select: none;',
    'select-text': 'user-select: text;',
    'select-all': 'user-select: all;',
    'select-auto': 'user-select: auto;',
};

/**
 * Stats
 */
//console.log(PrimeFlexClasses);
//console.log(Object.keys(PrimeFlexClasses).length);

export default PrimeFlexClasses;
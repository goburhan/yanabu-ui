'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 23 26" }, props),
        React__default['default'].createElement("path", { d: "M1 12.6198C1 10.5993 1 9.58907 1.41618 8.70105C1.83236 7.81303 2.61395 7.15556 4.17714 5.84063L5.6935 4.56509C8.51894 2.18836 9.93167 1 11.6145 1C13.2973 1 14.71 2.18836 17.5355 4.56509L19.0518 5.84063C20.615 7.15556 21.3966 7.81303 21.8128 8.70105C22.2289 9.58907 22.2289 10.5993 22.2289 12.6198V18.9301C22.2289 21.7361 22.2289 23.1391 21.3407 24.0108C20.4524 24.8826 19.0228 24.8826 16.1635 24.8826H7.06541C4.20615 24.8826 2.77652 24.8826 1.88826 24.0108C1 23.1391 1 21.7361 1 18.9301V12.6198Z" })));
        React__default['default'].createElement("path", { d: "M15.1526 24.8825V17.0371C15.1526 16.4848 14.7049 16.0371 14.1526 16.0371H9.07629C8.52401 16.0371 8.07629 16.4848 8.07629 17.0371V24.8825"});
    };

var Icon$1 = function (props) {
    <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1514 8.48364C18.773 8.48364 16.0244 11.2323 16.0244 14.6106C16.0244 17.9889 18.773 20.7376 22.1514 20.7376C25.5297 20.7376 28.2783 17.9889 28.2783 14.6106C28.2783 11.2323 25.5297 8.48364 22.1514 8.48364ZM22.1514 19.795C19.2929 19.795 16.967 17.4691 16.967 14.6106C16.967 11.7521 19.2929 9.42622 22.1514 9.42622C25.0099 9.42622 27.3358 11.7521 27.3358 14.6106C27.3357 17.4691 25.0098 19.795 22.1514 19.795Z" fill="#A1B1DB"/>
    <path d="M22.1513 11.7827C20.5918 11.7827 19.3235 13.051 19.3235 14.6106C19.3235 16.1701 20.5918 17.4384 22.1513 17.4384C23.7109 17.4384 24.9792 16.1701 24.9792 14.6106C24.9792 13.051 23.7108 11.7827 22.1513 11.7827ZM22.1513 16.4958C21.1116 16.4958 20.2661 15.6502 20.2661 14.6106C20.2661 13.5708 21.1117 12.7253 22.1513 12.7253C23.191 12.7253 24.0365 13.5709 24.0365 14.6106C24.0365 15.6503 23.191 16.4958 22.1513 16.4958Z" fill="#A1B1DB"/>
    <path d="M5.1844 13.668C4.14467 13.668 3.29919 14.5135 3.29919 15.5532C3.29919 16.5928 4.14467 17.4384 5.1844 17.4384C6.22407 17.4384 7.06961 16.5929 7.06961 15.5532C7.06961 14.5135 6.22407 13.668 5.1844 13.668ZM5.1844 16.4958C4.66456 16.4958 4.24177 16.0731 4.24177 15.5532C4.24177 15.0333 4.66451 14.6105 5.1844 14.6105C5.70424 14.6105 6.12703 15.0333 6.12703 15.5532C6.12698 16.0731 5.70424 16.4958 5.1844 16.4958Z" fill="#A1B1DB"/>
    <path d="M25.4505 5.18433H23.669L23.1977 2.82778H23.5653C23.8255 2.82778 24.0366 2.61713 24.0366 2.35649V0.471288C24.0366 0.210652 23.8255 0 23.5653 0H13.6679C12.3685 0 11.3113 1.05712 11.3113 2.35655C11.3113 2.61719 11.5225 2.82784 11.7826 2.82784H12.6781L12.2737 7.07335C12.2666 7.07335 12.261 7.06959 12.2539 7.06959H7.06959C5.27767 7.06959 3.91799 8.86195 3.78367 10.5662C1.6043 11.1793 0 13.18 0 15.5531C0 18.4116 2.3259 20.7375 5.18439 20.7375C7.72093 20.7375 9.8338 18.905 10.2787 16.4957H14.743C14.8834 16.4957 15.0163 16.433 15.1059 16.3251C15.1954 16.2172 15.2322 16.0749 15.2058 15.9368C15.1233 15.5022 15.0819 15.0559 15.0819 14.6105C15.0819 10.7124 18.2533 7.54094 22.1515 7.54094C24.1786 7.54094 26.1109 8.41331 27.4537 9.93421C27.5828 10.0808 27.7906 10.1312 27.9735 10.0629C28.1569 9.99408 28.278 9.81828 28.2784 9.62221V8.01222C28.2784 6.45266 27.0101 5.18433 25.4505 5.18433ZM5.18439 19.7949C2.84579 19.7949 0.942631 17.8922 0.942631 15.5531C0.942631 13.214 2.84579 11.3113 5.18439 11.3113C7.52298 11.3113 9.42614 13.214 9.42614 15.5531C9.42614 17.8922 7.52298 19.7949 5.18439 19.7949ZM14.1943 15.5531H10.3687C10.3687 12.6946 8.04282 10.3687 5.18433 10.3687C5.03962 10.3687 4.89685 10.3786 4.75496 10.3904C4.8134 10.0572 4.93264 9.72069 5.10088 9.40919C5.12915 9.41438 5.15462 9.42614 5.18428 9.42614H6.12691C6.38704 9.42614 6.59819 9.21549 6.59819 8.95485C6.59819 8.69422 6.38704 8.48357 6.12691 8.48357H5.85495C6.20937 8.19515 6.6241 8.01228 7.06948 8.01228H12.1846L11.7849 12.2092C11.7726 12.3412 11.816 12.4727 11.9056 12.5712C11.9947 12.6693 12.121 12.7253 12.2539 12.7253H14.3724C14.2255 13.3309 14.1392 13.9601 14.1392 14.6105C14.1392 14.9253 14.1576 15.2406 14.1943 15.5531ZM22.1514 6.59825C18.726 6.59825 15.8043 8.76298 14.6605 11.7925C14.6435 11.7906 14.6284 11.7826 14.6105 11.7826H12.7724L13.6254 2.82784H22.2362L23.0002 6.64823C22.7193 6.61852 22.4365 6.59825 22.1514 6.59825ZM23.094 1.88521H12.3346C12.5292 1.3366 13.0533 0.942576 13.6679 0.942576H23.094V1.88521H23.094ZM27.3357 8.50185C26.3696 7.68227 25.2224 7.11195 23.9961 6.82116L23.8575 6.12691H25.4505C26.4903 6.12691 27.3357 6.97244 27.3357 8.01211V8.50185Z" fill="#A1B1DB"/>
    </svg>};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color:#F5E750 ; ", ";\n  border: #F5E750 ;", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color:#F5E750; ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color:#F5E750 ; ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color:#F5E750 ; ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "34px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.PRIMARY;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "19", height: "16", viewBox: "0 0 19 16" }, props),
        React__default['default'].createElement("path", { d: "M9.04762 6.22223V16C8.1459 16 4.1803 16 1.80876 16C0.809386 16 0 15.2041 0 14.2222V1.77778C0 0.795937 0.810151 -1.88571e-07 1.80952 0L14.4762 2.39007e-06C15.4756 2.57864e-06 16.2857 0.795939 16.2857 1.77778V6.22223H9.04762ZM7.2381 6.22223H1.80952V9.77778H7.2381V6.22223ZM7.2381 14.2222V11.5556H1.80952V14.2222H7.2381ZM9.04762 1.77779V4.44445H14.4762V1.77779H9.04762ZM7.2381 1.77779H1.80952V4.44445H7.2381V1.77779Z", fill: "#AEAEAE" }),
        React__default['default'].createElement("path", { d: "M14.4762 16V13.3333H11.7619V11.5556H14.4762V8.88889H16.2857V11.5556H19V13.3333H16.2857V16H14.4762Z", fill: "#AEAEAE" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (<svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1514 8.48364C18.773 8.48364 16.0244 11.2323 16.0244 14.6106C16.0244 17.9889 18.773 20.7376 22.1514 20.7376C25.5297 20.7376 28.2783 17.9889 28.2783 14.6106C28.2783 11.2323 25.5297 8.48364 22.1514 8.48364ZM22.1514 19.795C19.2929 19.795 16.967 17.4691 16.967 14.6106C16.967 11.7521 19.2929 9.42622 22.1514 9.42622C25.0099 9.42622 27.3358 11.7521 27.3358 14.6106C27.3357 17.4691 25.0098 19.795 22.1514 19.795Z" fill="#A1B1DB"/>
    <path d="M22.1513 11.7827C20.5918 11.7827 19.3235 13.051 19.3235 14.6106C19.3235 16.1701 20.5918 17.4384 22.1513 17.4384C23.7109 17.4384 24.9792 16.1701 24.9792 14.6106C24.9792 13.051 23.7108 11.7827 22.1513 11.7827ZM22.1513 16.4958C21.1116 16.4958 20.2661 15.6502 20.2661 14.6106C20.2661 13.5708 21.1117 12.7253 22.1513 12.7253C23.191 12.7253 24.0365 13.5709 24.0365 14.6106C24.0365 15.6503 23.191 16.4958 22.1513 16.4958Z" fill="#A1B1DB"/>
    <path d="M5.1844 13.668C4.14467 13.668 3.29919 14.5135 3.29919 15.5532C3.29919 16.5928 4.14467 17.4384 5.1844 17.4384C6.22407 17.4384 7.06961 16.5929 7.06961 15.5532C7.06961 14.5135 6.22407 13.668 5.1844 13.668ZM5.1844 16.4958C4.66456 16.4958 4.24177 16.0731 4.24177 15.5532C4.24177 15.0333 4.66451 14.6105 5.1844 14.6105C5.70424 14.6105 6.12703 15.0333 6.12703 15.5532C6.12698 16.0731 5.70424 16.4958 5.1844 16.4958Z" fill="#A1B1DB"/>
    <path d="M25.4505 5.18433H23.669L23.1977 2.82778H23.5653C23.8255 2.82778 24.0366 2.61713 24.0366 2.35649V0.471288C24.0366 0.210652 23.8255 0 23.5653 0H13.6679C12.3685 0 11.3113 1.05712 11.3113 2.35655C11.3113 2.61719 11.5225 2.82784 11.7826 2.82784H12.6781L12.2737 7.07335C12.2666 7.07335 12.261 7.06959 12.2539 7.06959H7.06959C5.27767 7.06959 3.91799 8.86195 3.78367 10.5662C1.6043 11.1793 0 13.18 0 15.5531C0 18.4116 2.3259 20.7375 5.18439 20.7375C7.72093 20.7375 9.8338 18.905 10.2787 16.4957H14.743C14.8834 16.4957 15.0163 16.433 15.1059 16.3251C15.1954 16.2172 15.2322 16.0749 15.2058 15.9368C15.1233 15.5022 15.0819 15.0559 15.0819 14.6105C15.0819 10.7124 18.2533 7.54094 22.1515 7.54094C24.1786 7.54094 26.1109 8.41331 27.4537 9.93421C27.5828 10.0808 27.7906 10.1312 27.9735 10.0629C28.1569 9.99408 28.278 9.81828 28.2784 9.62221V8.01222C28.2784 6.45266 27.0101 5.18433 25.4505 5.18433ZM5.18439 19.7949C2.84579 19.7949 0.942631 17.8922 0.942631 15.5531C0.942631 13.214 2.84579 11.3113 5.18439 11.3113C7.52298 11.3113 9.42614 13.214 9.42614 15.5531C9.42614 17.8922 7.52298 19.7949 5.18439 19.7949ZM14.1943 15.5531H10.3687C10.3687 12.6946 8.04282 10.3687 5.18433 10.3687C5.03962 10.3687 4.89685 10.3786 4.75496 10.3904C4.8134 10.0572 4.93264 9.72069 5.10088 9.40919C5.12915 9.41438 5.15462 9.42614 5.18428 9.42614H6.12691C6.38704 9.42614 6.59819 9.21549 6.59819 8.95485C6.59819 8.69422 6.38704 8.48357 6.12691 8.48357H5.85495C6.20937 8.19515 6.6241 8.01228 7.06948 8.01228H12.1846L11.7849 12.2092C11.7726 12.3412 11.816 12.4727 11.9056 12.5712C11.9947 12.6693 12.121 12.7253 12.2539 12.7253H14.3724C14.2255 13.3309 14.1392 13.9601 14.1392 14.6105C14.1392 14.9253 14.1576 15.2406 14.1943 15.5531ZM22.1514 6.59825C18.726 6.59825 15.8043 8.76298 14.6605 11.7925C14.6435 11.7906 14.6284 11.7826 14.6105 11.7826H12.7724L13.6254 2.82784H22.2362L23.0002 6.64823C22.7193 6.61852 22.4365 6.59825 22.1514 6.59825ZM23.094 1.88521H12.3346C12.5292 1.3366 13.0533 0.942576 13.6679 0.942576H23.094V1.88521H23.094ZM27.3357 8.50185C26.3696 7.68227 25.2224 7.11195 23.9961 6.82116L23.8575 6.12691H25.4505C26.4903 6.12691 27.3357 6.97244 27.3357 8.01211V8.50185Z" fill="#A1B1DB"/>
    </svg>)};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M21.4228 23.2885C21.4559 21.9055 21.3604 15.7063 17.0086 14.4984C17.0086 14.4984 17.1221 16.9088 18.5889 19.0372C19.846 20.8618 20.531 21.197 21.1224 22.698C20.8213 21.2969 20.0202 18.4661 18.34 16.4145C20.78 18.9706 21.267 22.0506 21.4228 23.2885ZM22.7972 23.6083C22.7982 23.5725 23.1754 11.3765 13.8671 12.5905C10.4575 13.0359 7.92645 11.655 6.458 9.66925C5.84176 8.83613 5.41242 7.89619 5.18255 6.94121C4.95441 5.98823 4.92543 5.01858 5.10922 4.12505C5.45913 2.4325 6.57804 1.00652 8.5611 0.467934C10.6635 -0.103759 12.1521 0.665893 13.0313 1.9185C13.6284 2.76972 13.9469 3.84381 13.9888 4.87389C14.0311 5.8985 13.7992 6.87704 13.2948 7.54496C12.9716 7.97298 12.5323 8.27331 11.9782 8.37539C12.5074 7.98592 12.7161 7.26747 12.4385 6.63984C12.119 5.91591 11.2729 5.58861 10.5496 5.90939C9.82629 6.23023 9.49958 7.07601 9.81877 7.79994C10.4453 9.21566 12.7029 8.78153 13.5124 7.71116C14.0564 6.99002 14.3073 5.94731 14.2613 4.86226C14.2183 3.78375 13.8821 2.65743 13.255 1.7632C12.3137 0.420833 10.7252 -0.405134 8.48741 0.203419C6.3942 0.773404 5.21053 2.27994 4.84153 4.07147C4.64921 5.00359 4.67851 6.01248 4.91654 7.0057C5.15457 7.99549 5.59963 8.96857 6.2377 9.83276C7.76038 11.8902 10.3791 13.3223 13.9022 12.8632C22.8909 11.6895 22.5247 23.5684 22.5237 23.6022L22.7972 23.6083ZM2.7415 5.31485C2.71967 6.12787 2.72513 12.5799 8.42023 14.0305C8.38715 14.1056 8.38172 14.1909 8.40934 14.2735C8.46968 14.4486 8.66031 14.5428 8.83526 14.4834C9.01122 14.4237 9.10537 14.2322 9.04499 14.0581C9.00306 13.9336 8.89496 13.8503 8.77388 13.8329C3.53574 12.6967 3.04399 7.28251 3.01364 5.68618C3.11799 5.73398 3.23803 5.74219 3.355 5.70258C3.5985 5.62001 3.72944 5.35445 3.64692 5.11041C3.56371 4.86568 3.29805 4.73461 3.05456 4.81724C2.8421 4.88956 2.71592 5.10016 2.7415 5.31485ZM19.6089 21.0216C18.3335 20.4918 12.7124 17.8829 13.3791 13.4127C13.3791 13.4127 15.5327 14.4967 16.8804 16.7033C18.0341 18.5938 18.0624 19.357 19.1932 20.5072C18.0351 19.6631 15.7778 17.7791 14.5867 15.4094C15.9282 18.6791 18.5422 20.3772 19.6089 21.0216ZM14.7104 18.9313C13.7399 18.5273 9.45934 16.5415 9.96679 13.138C9.96679 13.138 11.6068 13.9626 12.6329 15.6425C13.511 17.0821 13.5329 17.6641 14.3936 18.5392C13.5128 17.8968 11.7933 16.4627 10.8869 14.6582C11.9086 17.147 13.8981 18.4402 14.7104 18.9313ZM12.4123 18.8423C12.4123 18.8423 2.9028 18.0559 1.37364 4.99948C1.96226 13.4175 5.76023 19.2253 12.4123 18.8423ZM15.1616 20.5816C15.1616 20.5816 5.97338 23.1568 0 11.4489C3.47948 19.1348 9.0593 23.2574 15.1616 20.5816ZM18.2216 20.8041C18.2216 20.8041 9.01432 26.4132 2.16278 17.8487C6.30692 23.5919 13.8132 24.795 18.2216 20.8041Z", fill: "url(#paint0_radial)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0412 0.920805L11.718 0.43956H22.9462C24.1786 0.43956 25.2955 0.583593 26.2974 0.869266C27.299 1.15529 28.1581 1.55837 28.8732 2.07511C29.5893 2.5939 30.1449 3.22157 30.5415 3.94821C30.9377 4.6759 31.1355 5.49125 31.1355 6.39405C31.1355 7.85379 30.6236 9.08184 29.6003 10.0843C28.5765 11.0867 27.1728 11.7922 25.3893 12.1891C25.8735 12.7782 26.6667 13.7919 27.7672 15.224C28.8688 16.6507 30.2001 18.402 31.763 20.473C32.2033 21.0181 32.545 21.4481 32.7868 21.757C33.0296 22.0659 33.2547 22.2966 33.4644 22.4509C33.6731 22.6048 33.8883 22.6936 34.1082 22.7158C34.3279 22.7376 34.6256 22.7488 35 22.7488V23.4755H33.6789C32.666 23.4755 31.8633 23.4478 31.2682 23.3929C30.6738 23.338 30.151 23.195 29.6998 22.9632C29.2483 22.7321 28.8026 22.3628 28.362 21.8563C27.9228 21.3495 27.3713 20.6559 26.7111 19.7743C25.4558 18.1221 24.3607 16.6732 23.4256 15.4278C22.4899 14.1834 21.7683 13.2414 21.2622 12.6028H18.1255V13.2864C17.5542 12.9775 16.3081 12.4799 14.4601 12.6697V3.61305C14.4601 2.7096 14.2835 2.0478 13.9308 1.63004C13.5792 1.21126 13.0053 1.00135 12.2141 0.935484L12.0412 0.920805ZM21.9558 11.644H21.9886C23.5733 11.644 24.8443 11.1693 25.8023 10.2174C26.7598 9.26988 27.239 7.99716 27.239 6.4053C27.239 4.87966 26.8488 3.66254 26.0669 2.75909C25.2849 1.85019 24.2448 1.39829 22.9465 1.39829H18.059V11.6444H21.9558V11.644Z", fill: "url(#paint1_radial)" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("radialGradient", { id: "paint0_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(11.3996 11.8043) scale(11.3992 11.8036)" },
                React__default['default'].createElement("stop", { offset: "0.3856", stopColor: "#046A38" }),
                React__default['default'].createElement("stop", { offset: "0.5712", stopColor: "#046435" }),
                React__default['default'].createElement("stop", { offset: "0.8249", stopColor: "#03522C" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#034223" })),
            React__default['default'].createElement("radialGradient", { id: "paint1_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(23.3589 11.9577) scale(11.6405 11.5175)" },
                React__default['default'].createElement("stop", { offset: "0.3856", stopColor: "#046A38" }),
                React__default['default'].createElement("stop", { offset: "0.5712", stopColor: "#046435" }),
                React__default['default'].createElement("stop", { offset: "0.8249", stopColor: "#03522C" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#034223" })))));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/egg/9.png" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 22 29" }, props),
        React__default['default'].createElement("path", { d: "M18.5714 3.13818H14.2614C13.7895 1.86499 12.5185 0.950684 11.0286 0.950684C9.53862 0.950684 8.26763 1.86499 7.79576 3.13818H3.42857C1.53795 3.13818 0 4.61005 0 6.41943V25.6694C0 27.4788 1.53795 28.9507 3.42857 28.9507H18.575C20.4636 28.9488 22 27.4769 22 25.6694V6.41943C22 4.61005 20.4621 3.13818 18.5714 3.13818ZM9.88571 5.32568V4.23193C9.88571 3.62888 10.3984 3.13818 11.0286 3.13818C11.6587 3.13818 12.1714 3.62888 12.1714 4.23193V5.32568H14.4571V7.4585H7.6V5.32568H9.88571ZM19.7143 25.6694C19.7143 26.2719 19.202 26.7625 18.5739 26.7632H3.42857C2.79844 26.7632 2.28571 26.2725 2.28571 25.6694V6.41943C2.28571 5.81638 2.79844 5.32568 3.42857 5.32568H5.31429V9.646H16.7429V5.32568H18.5714C19.2016 5.32568 19.7143 5.81638 19.7143 6.41943V25.6694ZM15.3833 13.5309L17.0737 15.0032L9.75424 22.7005L4.91964 18.2251L6.50893 16.6528L9.64978 19.5602L15.3833 13.5309Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  box-shadow: ", ";\n  border-radius: 30px;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(57.3333px);\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  box-shadow: ", ";\n  border-radius: 30px;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(57.3333px);\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props, { className: "rbs-card" }),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$t, { color: "secondary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$A, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "76", height: "75", viewBox: "0 0 76 75" }, props),
        React__default['default'].createElement("path", { d: "M12.5799 65.3686C14.8466 65.8892 17.1549 66.0619 19.4668 65.7907C25.6473 65.0697 31.1946 61.422 34.304 56.034C37.5896 50.345 37.3723 46.0879 36.2998 41.7679C32.6343 45.309 27.986 48.5024 19.8058 48.5024C12.4352 48.5024 4.82475 45.0528 0.0045166 38.2019C0.202143 48.9975 5.06076 58.6655 12.5799 65.3686Z", fill: "#03582F" }),
        React__default['default'].createElement("path", { d: "M75.0046 36.8804C74.8257 26.0442 69.7144 16.339 62.163 9.62141C59.2802 8.9634 56.3394 8.91653 53.4721 9.5278C48.0042 10.6929 43.2637 14.139 40.4675 18.982C37.1819 24.6711 37.3992 28.9282 38.4717 33.2481C42.1372 29.7072 46.7855 26.5137 54.9657 26.5137C63.0887 26.5137 70.5729 30.5345 75.0046 36.8804V36.8804Z", fill: "#03582F" }),
        React__default['default'].createElement("path", { d: "M40.5249 40.5664C41.7594 45.51 42.2011 51.1319 38.1111 58.2153C34.4064 64.6313 27.6323 69.5706 19.328 70.3236C24.6849 73.2952 30.8376 75 37.3858 75C41.4495 75 45.3536 74.3262 49.0191 73.1211C50.0924 71.9691 51.0795 70.5968 51.8754 69.2187C55.4034 63.1097 55.4056 55.5265 51.884 49.4262C48.5982 43.7368 44.8022 41.7975 40.5249 40.5664V40.5664Z", fill: "#03582F" }),
        React__default['default'].createElement("path", { d: "M20.9199 10.5299C19.5593 15.5682 20.276 21.0527 22.8878 25.5738C26.1736 31.2632 29.9694 33.2026 34.247 34.4336C33.0124 29.4898 32.5707 23.8681 36.6607 16.7847C40.4636 10.199 47.32 5.39531 55.4164 4.65981C50.0659 1.69761 43.9228 0 37.3858 0C33.3683 0 29.505 0.654784 25.8756 1.83354C23.5448 4.29345 21.7886 7.31279 20.9199 10.5299V10.5299Z", fill: "#03582F" }),
        React__default['default'].createElement("path", { d: "M19.8059 44.0917C26.3774 44.0917 29.9553 41.7751 33.16 38.6854C28.2599 37.2827 23.1705 34.8541 19.0805 27.771C15.8894 22.2456 15.0138 15.5424 16.677 9.38403C17.0381 8.04721 17.5759 6.78071 18.1553 5.53589C9.40278 10.8206 2.96329 19.5591 0.815186 29.8795C3.49288 38.7261 11.4423 44.0917 19.8059 44.0917V44.0917Z", fill: "#03582F" }),
        React__default['default'].createElement("path", { d: "M54.9655 30.9082C48.394 30.9082 44.8161 33.2249 41.6115 36.3145C46.5115 37.7172 51.6009 40.1458 55.691 47.2289C59.6264 54.0436 59.9169 62.3595 56.6532 69.4413C65.3517 64.1751 71.7544 55.4941 73.925 45.2421C71.3747 36.7434 63.8372 30.9082 54.9655 30.9082V30.9082Z", fill: "#03582F" })));
};
var Container$1 = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 2px 4px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 2px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #be3531, 0px 0px 0px 2px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #be3531, 0px 0px 0px 2px rgba(0, 164, 200, 0.5)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "secondary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(4, 106, 56, 0.8);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(4, 106, 56, 0.8);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.8 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (<svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1514 8.48364C18.773 8.48364 16.0244 11.2323 16.0244 14.6106C16.0244 17.9889 18.773 20.7376 22.1514 20.7376C25.5297 20.7376 28.2783 17.9889 28.2783 14.6106C28.2783 11.2323 25.5297 8.48364 22.1514 8.48364ZM22.1514 19.795C19.2929 19.795 16.967 17.4691 16.967 14.6106C16.967 11.7521 19.2929 9.42622 22.1514 9.42622C25.0099 9.42622 27.3358 11.7521 27.3358 14.6106C27.3357 17.4691 25.0098 19.795 22.1514 19.795Z"/>
    <path d="M22.1513 11.7827C20.5918 11.7827 19.3235 13.051 19.3235 14.6106C19.3235 16.1701 20.5918 17.4384 22.1513 17.4384C23.7109 17.4384 24.9792 16.1701 24.9792 14.6106C24.9792 13.051 23.7108 11.7827 22.1513 11.7827ZM22.1513 16.4958C21.1116 16.4958 20.2661 15.6502 20.2661 14.6106C20.2661 13.5708 21.1117 12.7253 22.1513 12.7253C23.191 12.7253 24.0365 13.5709 24.0365 14.6106C24.0365 15.6503 23.191 16.4958 22.1513 16.4958Z"/>
    <path d="M5.1844 13.668C4.14467 13.668 3.29919 14.5135 3.29919 15.5532C3.29919 16.5928 4.14467 17.4384 5.1844 17.4384C6.22407 17.4384 7.06961 16.5929 7.06961 15.5532C7.06961 14.5135 6.22407 13.668 5.1844 13.668ZM5.1844 16.4958C4.66456 16.4958 4.24177 16.0731 4.24177 15.5532C4.24177 15.0333 4.66451 14.6105 5.1844 14.6105C5.70424 14.6105 6.12703 15.0333 6.12703 15.5532C6.12698 16.0731 5.70424 16.4958 5.1844 16.4958Z"/>
    <path d="M25.4505 5.18433H23.669L23.1977 2.82778H23.5653C23.8255 2.82778 24.0366 2.61713 24.0366 2.35649V0.471288C24.0366 0.210652 23.8255 0 23.5653 0H13.6679C12.3685 0 11.3113 1.05712 11.3113 2.35655C11.3113 2.61719 11.5225 2.82784 11.7826 2.82784H12.6781L12.2737 7.07335C12.2666 7.07335 12.261 7.06959 12.2539 7.06959H7.06959C5.27767 7.06959 3.91799 8.86195 3.78367 10.5662C1.6043 11.1793 0 13.18 0 15.5531C0 18.4116 2.3259 20.7375 5.18439 20.7375C7.72093 20.7375 9.8338 18.905 10.2787 16.4957H14.743C14.8834 16.4957 15.0163 16.433 15.1059 16.3251C15.1954 16.2172 15.2322 16.0749 15.2058 15.9368C15.1233 15.5022 15.0819 15.0559 15.0819 14.6105C15.0819 10.7124 18.2533 7.54094 22.1515 7.54094C24.1786 7.54094 26.1109 8.41331 27.4537 9.93421C27.5828 10.0808 27.7906 10.1312 27.9735 10.0629C28.1569 9.99408 28.278 9.81828 28.2784 9.62221V8.01222C28.2784 6.45266 27.0101 5.18433 25.4505 5.18433ZM5.18439 19.7949C2.84579 19.7949 0.942631 17.8922 0.942631 15.5531C0.942631 13.214 2.84579 11.3113 5.18439 11.3113C7.52298 11.3113 9.42614 13.214 9.42614 15.5531C9.42614 17.8922 7.52298 19.7949 5.18439 19.7949ZM14.1943 15.5531H10.3687C10.3687 12.6946 8.04282 10.3687 5.18433 10.3687C5.03962 10.3687 4.89685 10.3786 4.75496 10.3904C4.8134 10.0572 4.93264 9.72069 5.10088 9.40919C5.12915 9.41438 5.15462 9.42614 5.18428 9.42614H6.12691C6.38704 9.42614 6.59819 9.21549 6.59819 8.95485C6.59819 8.69422 6.38704 8.48357 6.12691 8.48357H5.85495C6.20937 8.19515 6.6241 8.01228 7.06948 8.01228H12.1846L11.7849 12.2092C11.7726 12.3412 11.816 12.4727 11.9056 12.5712C11.9947 12.6693 12.121 12.7253 12.2539 12.7253H14.3724C14.2255 13.3309 14.1392 13.9601 14.1392 14.6105C14.1392 14.9253 14.1576 15.2406 14.1943 15.5531ZM22.1514 6.59825C18.726 6.59825 15.8043 8.76298 14.6605 11.7925C14.6435 11.7906 14.6284 11.7826 14.6105 11.7826H12.7724L13.6254 2.82784H22.2362L23.0002 6.64823C22.7193 6.61852 22.4365 6.59825 22.1514 6.59825ZM23.094 1.88521H12.3346C12.5292 1.3366 13.0533 0.942576 13.6679 0.942576H23.094V1.88521H23.094ZM27.3357 8.50185C26.3696 7.68227 25.2224 7.11195 23.9961 6.82116L23.8575 6.12691H25.4505C26.4903 6.12691 27.3357 6.97244 27.3357 8.01211V8.50185Z"/>
    </svg>)};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M22.1514 8.48364C18.773 8.48364 16.0244 11.2323 16.0244 14.6106C16.0244 17.9889 18.773 20.7376 22.1514 20.7376C25.5297 20.7376 28.2783 17.9889 28.2783 14.6106C28.2783 11.2323 25.5297 8.48364 22.1514 8.48364ZM22.1514 19.795C19.2929 19.795 16.967 17.4691 16.967 14.6106C16.967 11.7521 19.2929 9.42622 22.1514 9.42622C25.0099 9.42622 27.3358 11.7521 27.3358 14.6106C27.3357 17.4691 25.0098 19.795 22.1514 19.795Z" ,fill="#A1B1DB" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 23 23" }, props),
        React__default['default'].createElement("path", { d: "M2.37573 5.69873C1.96152 5.69873 1.62573 6.03452 1.62573 6.44873C1.62573 6.86294 1.96152 7.19873 2.37573 7.19873V5.69873ZM22.1808 7.19873C22.595 7.19873 22.9308 6.86294 22.9308 6.44873C22.9308 6.03452 22.595 5.69873 22.1808 5.69873V7.19873ZM2.37573 7.19873H22.1808V5.69873H2.37573V7.19873Z" ,fill="#A1B1DB" }))),
        React__default['default'].createElement("path", { d: "M5.95869 1.70072L1.70711 5.95232C1.31658 6.34284 1.31658 6.97601 1.70711 7.36653L5.95869 11.6181" }),
        React__default['default'].createElement("path", { d: "M20.8052 16.2715C21.2194 16.2715 21.5552 16.6073 21.5552 17.0215C21.5552 17.4357 21.2194 17.7715 20.8052 17.7715V16.2715ZM1.00012 17.7715C0.585905 17.7715 0.250118 17.4357 0.250118 17.0215C0.250118 16.6073 0.585905 16.2715 1.00012 16.2715V17.7715ZM20.8052 17.7715H1.00012V16.2715H20.8052V17.7715Z" ,fill="#A1B1DB" }),
        React__default['default'].createElement("path", { d: "M17.2222 12.2737L21.4738 16.5253C21.8643 16.9158 21.8643 17.549 21.4738 17.9395L17.2222 22.1911" });

};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "23", height: "26", viewBox: "0 0 23 26",fill:"none" }, props),
        React__default['default'].createElement("path", { d: "M2.37573 5.69873C1.96152 5.69873 1.62573 6.03452 1.62573 6.44873C1.62573 6.86294 1.96152 7.19873 2.37573 7.19873V5.69873ZM22.1808 7.19873C22.595 7.19873 22.9308 6.86294 22.9308 6.44873C22.9308 6.03452 22.595 5.69873 22.1808 5.69873V7.19873ZM2.37573 7.19873H22.1808V5.69873H2.37573V7.19873Z" ,fill="#A1B1DB"}),
        React__default['default'].createElement("path", { d: "M15.1526 24.8825V17.0371C15.1526 16.4848 14.7049 16.0371 14.1526 16.0371H9.07629C8.52401 16.0371 8.07629 16.4848 8.07629 17.0371V24.8825" })));
    };

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "23", height: "23", viewBox: "0 0 23 23", fill: "none" }, props),
        React__default['default'].createElement("path", { d: "M2.37573 5.69873C1.96152 5.69873 1.62573 6.03452 1.62573 6.44873C1.62573 6.86294 1.96152 7.19873 2.37573 7.19873V5.69873ZM22.1808 7.19873C22.595 7.19873 22.9308 6.86294 22.9308 6.44873C22.9308 6.03452 22.595 5.69873 22.1808 5.69873V7.19873ZM2.37573 7.19873H22.1808V5.69873H2.37573V7.19873Z" }),
        React__default['default'].createElement("path", { d: "M5.95869 1.70072L1.70711 5.95232C1.31658 6.34284 1.31658 6.97601 1.70711 7.36653L5.95869 11.6181" }),
        React__default['default'].createElement("path", { d: "M20.8052 16.2715C21.2194 16.2715 21.5552 16.6073 21.5552 17.0215C21.5552 17.4357 21.2194 17.7715 20.8052 17.7715V16.2715ZM1.00012 17.7715C0.585905 17.7715 0.250118 17.4357 0.250118 17.0215C0.250118 16.6073 0.585905 16.2715 1.00012 16.2715V17.7715ZM20.8052 17.7715H1.00012V16.2715H20.8052V17.7715Z"}),
        React__default['default'].createElement("path", { d: "M17.2222 12.2737L21.4738 16.5253C21.8643 16.9158 21.8643 17.549 21.4738 17.9395L17.2222 22.1911" })))
        };

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 35" ,width:"34", height:"35" }, props),
        React__default['default'].createElement("path", { d: "M29.6238 27.686L27.6752 26.5609V20.0144L29.5198 18.9495C29.9869 18.6798 30.147 18.0825 29.8772 17.6154C29.6075 17.1483 29.0103 16.9883 28.5432 17.258L26.6413 18.356L21.0776 15.1438V8.65326L23.1717 7.44427C23.6388 7.1746 23.7989 6.5773 23.5291 6.11022C23.2594 5.64307 22.6621 5.48316 22.1951 5.75278L20.101 6.96176L14.4801 3.71647V1.92112C14.432 0.626716 12.5744 0.627693 12.5268 1.92112V3.71634L6.82983 7.00558L4.65966 5.75265C3.51475 5.14682 2.5867 6.75635 3.68305 7.44414L5.92926 8.74102V14.942L3.68305 16.2389C3.21597 16.5086 3.05593 17.1059 3.32561 17.5729C3.59685 18.0444 4.20085 18.1977 4.65966 17.9304L6.73126 16.7344L12.5268 20.0804V26.433L10.1613 27.7988C9.69418 28.0684 9.53415 28.6657 9.80382 29.1328C10.0751 29.6043 10.6791 29.7575 11.1379 29.4903L13.384 28.1935L19.1244 31.5078V33.2857C19.1724 34.5801 21.03 34.5791 21.0776 33.2857V31.5078L26.7073 28.2574L28.6472 29.3775C29.106 29.6448 29.71 29.4914 29.9813 29.0201C30.251 28.553 30.091 27.9557 29.6238 27.686ZM7.88256 8.65313L13.5035 5.40783L19.1244 8.65313V15.1437L13.5035 18.3889L7.88256 15.1437V8.65313ZM14.4801 20.0805L19.7865 17.0169L20.1011 16.8352L25.722 20.0805V26.53C25.7173 26.5377 25.712 26.5447 25.7074 26.5525C25.7002 26.565 25.6945 26.578 25.6879 26.5907L20.1011 29.8163L14.4801 26.571V20.0805Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width:"112", height:"83", viewBox:"0 0 112 83" }, props),
        React__default['default'].createElement("path",{ d: "M30.4607 68.0658H27.4857L24.5957 72.8428L21.7567 68.0658H18.6967L23.2697 75.2738V79.9658H25.8877V75.2228L30.4607 68.0658ZM43.6836 79.9658L38.5836 67.9808H36.1696L31.0696 79.9658H33.7386L34.8266 77.2968H39.8586L40.9466 79.9658H43.6836ZM38.9236 74.9848H35.7616L37.3426 71.1258L38.9236 74.9848ZM56.0943 79.9658V68.0658H53.5103V75.3928L47.9343 68.0658H45.5203V79.9658H48.1043V72.4008L53.8673 79.9658H56.0943ZM70.5449 79.9658L65.4449 67.9808H63.0309L57.9309 79.9658H60.5999L61.6879 77.2968H66.7199L67.8079 79.9658H70.5449ZM65.7849 74.9848H62.6229L64.2039 71.1258L65.7849 74.9848ZM82.4966 76.7018V76.6678C82.4966 75.8745 82.2983 75.2568 81.9016 74.8148C81.5049 74.3615 80.9609 74.0045 80.2696 73.7438C80.4849 73.6305 80.6833 73.4945 80.8646 73.3358C81.0573 73.1772 81.2216 72.9958 81.3576 72.7918C81.5049 72.5765 81.6183 72.3385 81.6976 72.0778C81.7883 71.8172 81.8336 71.5168 81.8336 71.1768V71.1428C81.8336 70.2022 81.4823 69.4542 80.7796 68.8988C80.0883 68.3435 79.1306 68.0658 77.9066 68.0658H72.3816V79.9658H78.0426C78.7113 79.9658 79.3176 79.8978 79.8616 79.7618C80.4169 79.6258 80.8873 79.4218 81.2726 79.1498C81.6693 78.8778 81.9696 78.5378 82.1736 78.1298C82.3889 77.7218 82.4966 77.2458 82.4966 76.7018ZM79.2326 71.6188C79.2326 72.0608 79.0626 72.3838 78.7226 72.5878C78.3826 72.7805 77.9236 72.8768 77.3456 72.8768H74.9316V70.3608H77.5156C78.0709 70.3608 78.4959 70.4685 78.7906 70.6838C79.0853 70.8878 79.2326 71.1882 79.2326 71.5848V71.6188ZM79.8956 76.3788C79.8956 76.8208 79.7313 77.1495 79.4026 77.3648C79.0739 77.5688 78.6206 77.6708 78.0426 77.6708H74.9316V75.0528H77.9576C78.6376 75.0528 79.1306 75.1718 79.4366 75.4098C79.7426 75.6365 79.8956 75.9482 79.8956 76.3448V76.3788ZM94.8332 74.7808V68.0658H92.2152V74.8828C92.2152 75.8348 91.9885 76.5488 91.5352 77.0248C91.0818 77.5008 90.4528 77.7388 89.6482 77.7388C88.8435 77.7388 88.2145 77.4952 87.7612 77.0078C87.3078 76.5092 87.0812 75.7725 87.0812 74.7978V68.0658H84.4632V74.8658C84.4632 76.6225 84.9222 77.9428 85.8402 78.8268C86.7582 79.7108 88.0162 80.1528 89.6142 80.1528C90.4075 80.1528 91.1272 80.0452 91.7732 79.8298C92.4192 79.6032 92.9688 79.2688 93.4222 78.8268C93.8755 78.3735 94.2212 77.8125 94.4592 77.1438C94.7085 76.4752 94.8332 75.6875 94.8332 74.7808Z"}),
        React__default['default'].createElement("path",{ d: "M35.2 21.9658H26.45L17.95 36.0158L9.6 21.9658H0.6L14.05 43.1658V56.9658H21.75V43.0158L35.2 21.9658ZM71.091 56.9658V21.9658H63.491V43.5158L47.091 21.9658H39.991V56.9658H47.591V34.7158L64.541 56.9658H71.091ZM109.243 47.3658V47.2658C109.243 44.9325 108.66 43.1158 107.493 41.8158C106.326 40.4825 104.726 39.4325 102.693 38.6658C103.326 38.3325 103.91 37.9325 104.443 37.4658C105.01 36.9992 105.493 36.4658 105.893 35.8658C106.326 35.2325 106.66 34.5325 106.893 33.7658C107.16 32.9992 107.293 32.1158 107.293 31.1158V31.0158C107.293 28.2492 106.26 26.0492 104.193 24.4158C102.16 22.7825 99.343 21.9658 95.743 21.9658H79.493V56.9658H96.143C98.1096 56.9658 99.893 56.7658 101.493 56.3658C103.126 55.9658 104.51 55.3658 105.643 54.5658C106.81 53.7658 107.693 52.7658 108.293 51.5658C108.926 50.3658 109.243 48.9658 109.243 47.3658ZM99.643 32.4158C99.643 33.7158 99.143 34.6658 98.143 35.2658C97.143 35.8325 95.793 36.1158 94.093 36.1158H86.993V28.7158H94.593C96.2263 28.7158 97.4763 29.0325 98.343 29.6658C99.2096 30.2658 99.643 31.1492 99.643 32.3158V32.4158ZM101.593 46.4158C101.593 47.7158 101.11 48.6825 100.143 49.3158C99.1763 49.9158 97.843 50.2158 96.143 50.2158H86.993V42.5158H95.893C97.893 42.5158 99.343 42.8658 100.243 43.5658C101.143 44.2325 101.593 45.1492 101.593 46.3158V46.4158Z"}),
        React__default['default'].createElement("path",{ d: "M35.2 21.9658L36.8853 23.0427L38.8513 19.9658H35.2V21.9658ZM26.45 21.9658V19.9658H25.3224L24.7388 20.9306L26.45 21.9658ZM17.95 36.0158L16.2307 37.0376L17.9347 39.9048L19.6612 37.0511L17.95 36.0158ZM9.6 21.9658L11.3193 20.944L10.7379 19.9658H9.6V21.9658ZM0.6 21.9658V19.9658H-3.03742L-1.0888 23.0372L0.6 21.9658ZM14.05 43.1658H16.05V42.5849L15.7388 42.0944L14.05 43.1658ZM14.05 56.9658H12.05V58.9658H14.05V56.9658ZM21.75 56.9658V58.9658H23.75V56.9658H21.75ZM21.75 43.0158L20.0647 41.939L19.75 42.4314V43.0158H21.75ZM35.2 19.9658H26.45V23.9658H35.2V19.9658ZM24.7388 20.9306L16.2388 34.9806L19.6612 37.0511L28.1612 23.0011L24.7388 20.9306ZM19.6693 34.994L11.3193 20.944L7.88071 22.9876L16.2307 37.0376L19.6693 34.994ZM9.6 19.9658H0.6V23.9658H9.6V19.9658ZM-1.0888 23.0372L12.3612 44.2372L15.7388 42.0944L2.2888 20.8944L-1.0888 23.0372ZM12.05 43.1658V56.9658H16.05V43.1658H12.05ZM14.05 58.9658H21.75V54.9658H14.05V58.9658ZM23.75 56.9658V43.0158H19.75V56.9658H23.75ZM23.4353 44.0927L36.8853 23.0427L33.5147 20.889L20.0647 41.939L23.4353 44.0927ZM71.091 56.9658V58.9658H73.091V56.9658H71.091ZM71.091 21.9658H73.091V19.9658H71.091V21.9658ZM63.491 21.9658V19.9658H61.491V21.9658H63.491ZM63.491 43.5158L61.8995 44.727L65.491 49.4464V43.5158H63.491ZM47.091 21.9658L48.6826 20.7546L48.0823 19.9658H47.091V21.9658ZM39.991 21.9658V19.9658H37.991V21.9658H39.991ZM39.991 56.9658H37.991V58.9658H39.991V56.9658ZM47.591 56.9658V58.9658H49.591V56.9658H47.591ZM47.591 34.7158L49.182 33.5038L45.591 28.7901V34.7158H47.591ZM64.541 56.9658L62.9501 58.1778L63.5504 58.9658H64.541V56.9658ZM73.091 56.9658V21.9658H69.091V56.9658H73.091ZM71.091 19.9658H63.491V23.9658H71.091V19.9658ZM61.491 21.9658V43.5158H65.491V21.9658H61.491ZM65.0826 42.3046L48.6826 20.7546L45.4995 23.177L61.8995 44.727L65.0826 42.3046ZM47.091 19.9658H39.991V23.9658H47.091V19.9658ZM37.991 21.9658V56.9658H41.991V21.9658H37.991ZM39.991 58.9658H47.591V54.9658H39.991V58.9658ZM49.591 56.9658V34.7158H45.591V56.9658H49.591ZM46.0001 35.9278L62.9501 58.1778L66.132 55.7538L49.182 33.5038L46.0001 35.9278ZM64.541 58.9658H71.091V54.9658H64.541V58.9658ZM107.493 41.8158L105.988 43.1328L105.996 43.1423L106.004 43.1516L107.493 41.8158ZM102.693 38.6658L101.761 36.896L97.825 38.9678L101.987 40.5372L102.693 38.6658ZM104.443 37.4658L103.172 35.922L103.148 35.941L103.126 35.9607L104.443 37.4658ZM105.893 35.8658L104.242 34.7365L104.236 34.7464L104.229 34.7564L105.893 35.8658ZM106.893 33.7658L105.004 33.1088L104.991 33.1459L104.98 33.1835L106.893 33.7658ZM104.193 24.4158L102.94 25.9751L102.947 25.98L102.953 25.9849L104.193 24.4158ZM79.493 21.9658V19.9658H77.493V21.9658H79.493ZM79.493 56.9658H77.493V58.9658H79.493V56.9658ZM101.493 56.3658L101.017 54.4232L101.008 54.4255L101.493 56.3658ZM105.643 54.5658L104.512 52.9164L104.501 52.924L104.49 52.9319L105.643 54.5658ZM108.293 51.5658L106.524 50.6323L106.514 50.6517L106.504 50.6714L108.293 51.5658ZM98.143 35.2658L99.129 37.0059L99.1506 36.9936L99.172 36.9808L98.143 35.2658ZM86.993 36.1158H84.993V38.1158H86.993V36.1158ZM86.993 28.7158V26.7158H84.993V28.7158H86.993ZM98.343 29.6658L97.1629 31.2806L97.1836 31.2957L97.2046 31.3102L98.343 29.6658ZM100.143 49.3158L101.198 51.0151L101.219 51.0022L101.239 50.9887L100.143 49.3158ZM86.993 50.2158H84.993V52.2158H86.993V50.2158ZM86.993 42.5158V40.5158H84.993V42.5158H86.993ZM100.243 43.5658L99.0151 45.1445L99.0336 45.1589L99.0525 45.1729L100.243 43.5658ZM111.243 47.3658V47.2658H107.243V47.3658H111.243ZM111.243 47.2658C111.243 44.6076 110.575 42.2554 108.981 40.48L106.004 43.1516C106.744 43.9762 107.243 45.2574 107.243 47.2658H111.243ZM108.998 40.4988C107.571 38.8676 105.671 37.6513 103.399 36.7944L101.987 40.5372C103.782 41.2137 105.082 42.0974 105.988 43.1328L108.998 40.4988ZM103.624 40.4357C104.395 40.0302 105.108 39.5417 105.76 38.971L103.126 35.9607C102.712 36.3233 102.258 36.6348 101.761 36.896L103.624 40.4357ZM105.714 39.0097C106.43 38.4205 107.046 37.7415 107.557 36.9752L104.229 34.7564C103.94 35.1902 103.589 35.5778 103.172 35.922L105.714 39.0097ZM107.544 36.9952C108.097 36.1866 108.516 35.3008 108.806 34.3481L104.98 33.1835C104.803 33.7642 104.556 34.2784 104.242 34.7365L107.544 36.9952ZM108.782 34.4229C109.137 33.4024 109.293 32.2896 109.293 31.1158H105.293C105.293 31.9421 105.182 32.5959 105.004 33.1088L108.782 34.4229ZM109.293 31.1158V31.0158H105.293V31.1158H109.293ZM109.293 31.0158C109.293 27.6731 108.007 24.8809 105.433 22.8467L102.953 25.9849C104.512 27.2174 105.293 28.8252 105.293 31.0158H109.293ZM105.445 22.8566C102.943 20.8465 99.6271 19.9658 95.743 19.9658V23.9658C99.0588 23.9658 101.376 24.7184 102.94 25.9751L105.445 22.8566ZM95.743 19.9658H79.493V23.9658H95.743V19.9658ZM77.493 21.9658V56.9658H81.493V21.9658H77.493ZM79.493 58.9658H96.143V54.9658H79.493V58.9658ZM96.143 58.9658C98.2429 58.9658 100.192 58.7525 101.978 58.3061L101.008 54.4255C99.5935 54.7791 97.9764 54.9658 96.143 54.9658V58.9658ZM101.969 58.3084C103.795 57.8611 105.42 57.1712 106.796 56.1998L104.49 52.9319C103.599 53.5604 102.458 54.0705 101.017 54.4232L101.969 58.3084ZM106.774 56.2153C108.205 55.2343 109.322 53.9803 110.082 52.4602L106.504 50.6714C106.064 51.5514 105.415 52.2974 104.512 52.9164L106.774 56.2153ZM110.062 52.4993C110.872 50.9642 111.243 49.2329 111.243 47.3658H107.243C107.243 48.6987 106.981 49.7675 106.524 50.6323L110.062 52.4993ZM97.643 32.4158C97.643 33.1099 97.4331 33.3594 97.114 33.5508L99.172 36.9808C100.853 35.9723 101.643 34.3217 101.643 32.4158H97.643ZM97.1569 33.5258C96.5679 33.8596 95.6012 34.1158 94.093 34.1158V38.1158C95.9847 38.1158 97.718 37.8054 99.129 37.0059L97.1569 33.5258ZM94.093 34.1158H86.993V38.1158H94.093V34.1158ZM88.993 36.1158V28.7158H84.993V36.1158H88.993ZM86.993 30.7158H94.593V26.7158H86.993V30.7158ZM94.593 30.7158C96.0106 30.7158 96.7756 30.9976 97.1629 31.2806L99.523 28.051C98.177 27.0674 96.442 26.7158 94.593 26.7158V30.7158ZM97.2046 31.3102C97.4676 31.4923 97.643 31.7235 97.643 32.3158H101.643C101.643 30.5748 100.952 29.0393 99.4814 28.0214L97.2046 31.3102ZM97.643 32.3158V32.4158H101.643V32.3158H97.643ZM99.593 46.4158C99.593 47.1405 99.3714 47.4303 99.0469 47.6429L101.239 50.9887C102.848 49.9347 103.593 48.2912 103.593 46.4158H99.593ZM99.0882 47.6165C98.558 47.9457 97.6421 48.2158 96.143 48.2158V52.2158C98.0438 52.2158 99.7946 51.886 101.198 51.0151L99.0882 47.6165ZM96.143 48.2158H86.993V52.2158H96.143V48.2158ZM88.993 50.2158V42.5158H84.993V50.2158H88.993ZM86.993 44.5158H95.893V40.5158H86.993V44.5158ZM95.893 44.5158C97.7479 44.5158 98.6459 44.8574 99.0151 45.1445L101.471 41.9871C100.04 40.8743 98.038 40.5158 95.893 40.5158V44.5158ZM99.0525 45.1729C99.4189 45.4443 99.593 45.7519 99.593 46.3158H103.593C103.593 44.5464 102.867 43.0206 101.433 41.9587L99.0525 45.1729ZM99.593 46.3158V46.4158H103.593V46.3158H99.593Z" }),
        React__default['default'].createElement("path",{ d: "M19.9307 0L21.8352 5.86155L27.9984 5.86155L23.0123 9.48418L24.9168 15.3457L19.9307 11.7231L14.9445 15.3457L16.8491 9.48418L11.8629 5.86155L18.0261 5.86155L19.9307 0Z"}),
        React__default['default'].createElement("path",{ d: "M59.4199 0L61.3245 5.86155L67.4877 5.86155L62.5015 9.48418L64.4061 15.3457L59.4199 11.7231L54.4338 15.3457L56.3383 9.48418L51.3522 5.86155L57.5154 5.86155L59.4199 0Z"}),
        React__default['default'].createElement("path",{ d: "M98.9094 0L100.814 5.86155L106.977 5.86155L101.991 9.48418L103.896 15.3457L98.9094 11.7231L93.9233 15.3457L95.8278 9.48418L90.8417 5.86155L97.0049 5.86155L98.9094 0Z"})));
};
var LogoFooter = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width:"55", height:"41", viewBox:"0 0 112 83" }, props),
        React__default['default'].createElement("path",{ d: "M30.4607 68.0658H27.4857L24.5957 72.8428L21.7567 68.0658H18.6967L23.2697 75.2738V79.9658H25.8877V75.2228L30.4607 68.0658ZM43.6836 79.9658L38.5836 67.9808H36.1696L31.0696 79.9658H33.7386L34.8266 77.2968H39.8586L40.9466 79.9658H43.6836ZM38.9236 74.9848H35.7616L37.3426 71.1258L38.9236 74.9848ZM56.0943 79.9658V68.0658H53.5103V75.3928L47.9343 68.0658H45.5203V79.9658H48.1043V72.4008L53.8673 79.9658H56.0943ZM70.5449 79.9658L65.4449 67.9808H63.0309L57.9309 79.9658H60.5999L61.6879 77.2968H66.7199L67.8079 79.9658H70.5449ZM65.7849 74.9848H62.6229L64.2039 71.1258L65.7849 74.9848ZM82.4966 76.7018V76.6678C82.4966 75.8745 82.2983 75.2568 81.9016 74.8148C81.5049 74.3615 80.9609 74.0045 80.2696 73.7438C80.4849 73.6305 80.6833 73.4945 80.8646 73.3358C81.0573 73.1772 81.2216 72.9958 81.3576 72.7918C81.5049 72.5765 81.6183 72.3385 81.6976 72.0778C81.7883 71.8172 81.8336 71.5168 81.8336 71.1768V71.1428C81.8336 70.2022 81.4823 69.4542 80.7796 68.8988C80.0883 68.3435 79.1306 68.0658 77.9066 68.0658H72.3816V79.9658H78.0426C78.7113 79.9658 79.3176 79.8978 79.8616 79.7618C80.4169 79.6258 80.8873 79.4218 81.2726 79.1498C81.6693 78.8778 81.9696 78.5378 82.1736 78.1298C82.3889 77.7218 82.4966 77.2458 82.4966 76.7018ZM79.2326 71.6188C79.2326 72.0608 79.0626 72.3838 78.7226 72.5878C78.3826 72.7805 77.9236 72.8768 77.3456 72.8768H74.9316V70.3608H77.5156C78.0709 70.3608 78.4959 70.4685 78.7906 70.6838C79.0853 70.8878 79.2326 71.1882 79.2326 71.5848V71.6188ZM79.8956 76.3788C79.8956 76.8208 79.7313 77.1495 79.4026 77.3648C79.0739 77.5688 78.6206 77.6708 78.0426 77.6708H74.9316V75.0528H77.9576C78.6376 75.0528 79.1306 75.1718 79.4366 75.4098C79.7426 75.6365 79.8956 75.9482 79.8956 76.3448V76.3788ZM94.8332 74.7808V68.0658H92.2152V74.8828C92.2152 75.8348 91.9885 76.5488 91.5352 77.0248C91.0818 77.5008 90.4528 77.7388 89.6482 77.7388C88.8435 77.7388 88.2145 77.4952 87.7612 77.0078C87.3078 76.5092 87.0812 75.7725 87.0812 74.7978V68.0658H84.4632V74.8658C84.4632 76.6225 84.9222 77.9428 85.8402 78.8268C86.7582 79.7108 88.0162 80.1528 89.6142 80.1528C90.4075 80.1528 91.1272 80.0452 91.7732 79.8298C92.4192 79.6032 92.9688 79.2688 93.4222 78.8268C93.8755 78.3735 94.2212 77.8125 94.4592 77.1438C94.7085 76.4752 94.8332 75.6875 94.8332 74.7808Z"}),
        React__default['default'].createElement("path",{ d: "M35.2 21.9658H26.45L17.95 36.0158L9.6 21.9658H0.6L14.05 43.1658V56.9658H21.75V43.0158L35.2 21.9658ZM71.091 56.9658V21.9658H63.491V43.5158L47.091 21.9658H39.991V56.9658H47.591V34.7158L64.541 56.9658H71.091ZM109.243 47.3658V47.2658C109.243 44.9325 108.66 43.1158 107.493 41.8158C106.326 40.4825 104.726 39.4325 102.693 38.6658C103.326 38.3325 103.91 37.9325 104.443 37.4658C105.01 36.9992 105.493 36.4658 105.893 35.8658C106.326 35.2325 106.66 34.5325 106.893 33.7658C107.16 32.9992 107.293 32.1158 107.293 31.1158V31.0158C107.293 28.2492 106.26 26.0492 104.193 24.4158C102.16 22.7825 99.343 21.9658 95.743 21.9658H79.493V56.9658H96.143C98.1096 56.9658 99.893 56.7658 101.493 56.3658C103.126 55.9658 104.51 55.3658 105.643 54.5658C106.81 53.7658 107.693 52.7658 108.293 51.5658C108.926 50.3658 109.243 48.9658 109.243 47.3658ZM99.643 32.4158C99.643 33.7158 99.143 34.6658 98.143 35.2658C97.143 35.8325 95.793 36.1158 94.093 36.1158H86.993V28.7158H94.593C96.2263 28.7158 97.4763 29.0325 98.343 29.6658C99.2096 30.2658 99.643 31.1492 99.643 32.3158V32.4158ZM101.593 46.4158C101.593 47.7158 101.11 48.6825 100.143 49.3158C99.1763 49.9158 97.843 50.2158 96.143 50.2158H86.993V42.5158H95.893C97.893 42.5158 99.343 42.8658 100.243 43.5658C101.143 44.2325 101.593 45.1492 101.593 46.3158V46.4158Z"}),
        React__default['default'].createElement("path",{ d: "M35.2 21.9658L36.8853 23.0427L38.8513 19.9658H35.2V21.9658ZM26.45 21.9658V19.9658H25.3224L24.7388 20.9306L26.45 21.9658ZM17.95 36.0158L16.2307 37.0376L17.9347 39.9048L19.6612 37.0511L17.95 36.0158ZM9.6 21.9658L11.3193 20.944L10.7379 19.9658H9.6V21.9658ZM0.6 21.9658V19.9658H-3.03742L-1.0888 23.0372L0.6 21.9658ZM14.05 43.1658H16.05V42.5849L15.7388 42.0944L14.05 43.1658ZM14.05 56.9658H12.05V58.9658H14.05V56.9658ZM21.75 56.9658V58.9658H23.75V56.9658H21.75ZM21.75 43.0158L20.0647 41.939L19.75 42.4314V43.0158H21.75ZM35.2 19.9658H26.45V23.9658H35.2V19.9658ZM24.7388 20.9306L16.2388 34.9806L19.6612 37.0511L28.1612 23.0011L24.7388 20.9306ZM19.6693 34.994L11.3193 20.944L7.88071 22.9876L16.2307 37.0376L19.6693 34.994ZM9.6 19.9658H0.6V23.9658H9.6V19.9658ZM-1.0888 23.0372L12.3612 44.2372L15.7388 42.0944L2.2888 20.8944L-1.0888 23.0372ZM12.05 43.1658V56.9658H16.05V43.1658H12.05ZM14.05 58.9658H21.75V54.9658H14.05V58.9658ZM23.75 56.9658V43.0158H19.75V56.9658H23.75ZM23.4353 44.0927L36.8853 23.0427L33.5147 20.889L20.0647 41.939L23.4353 44.0927ZM71.091 56.9658V58.9658H73.091V56.9658H71.091ZM71.091 21.9658H73.091V19.9658H71.091V21.9658ZM63.491 21.9658V19.9658H61.491V21.9658H63.491ZM63.491 43.5158L61.8995 44.727L65.491 49.4464V43.5158H63.491ZM47.091 21.9658L48.6826 20.7546L48.0823 19.9658H47.091V21.9658ZM39.991 21.9658V19.9658H37.991V21.9658H39.991ZM39.991 56.9658H37.991V58.9658H39.991V56.9658ZM47.591 56.9658V58.9658H49.591V56.9658H47.591ZM47.591 34.7158L49.182 33.5038L45.591 28.7901V34.7158H47.591ZM64.541 56.9658L62.9501 58.1778L63.5504 58.9658H64.541V56.9658ZM73.091 56.9658V21.9658H69.091V56.9658H73.091ZM71.091 19.9658H63.491V23.9658H71.091V19.9658ZM61.491 21.9658V43.5158H65.491V21.9658H61.491ZM65.0826 42.3046L48.6826 20.7546L45.4995 23.177L61.8995 44.727L65.0826 42.3046ZM47.091 19.9658H39.991V23.9658H47.091V19.9658ZM37.991 21.9658V56.9658H41.991V21.9658H37.991ZM39.991 58.9658H47.591V54.9658H39.991V58.9658ZM49.591 56.9658V34.7158H45.591V56.9658H49.591ZM46.0001 35.9278L62.9501 58.1778L66.132 55.7538L49.182 33.5038L46.0001 35.9278ZM64.541 58.9658H71.091V54.9658H64.541V58.9658ZM107.493 41.8158L105.988 43.1328L105.996 43.1423L106.004 43.1516L107.493 41.8158ZM102.693 38.6658L101.761 36.896L97.825 38.9678L101.987 40.5372L102.693 38.6658ZM104.443 37.4658L103.172 35.922L103.148 35.941L103.126 35.9607L104.443 37.4658ZM105.893 35.8658L104.242 34.7365L104.236 34.7464L104.229 34.7564L105.893 35.8658ZM106.893 33.7658L105.004 33.1088L104.991 33.1459L104.98 33.1835L106.893 33.7658ZM104.193 24.4158L102.94 25.9751L102.947 25.98L102.953 25.9849L104.193 24.4158ZM79.493 21.9658V19.9658H77.493V21.9658H79.493ZM79.493 56.9658H77.493V58.9658H79.493V56.9658ZM101.493 56.3658L101.017 54.4232L101.008 54.4255L101.493 56.3658ZM105.643 54.5658L104.512 52.9164L104.501 52.924L104.49 52.9319L105.643 54.5658ZM108.293 51.5658L106.524 50.6323L106.514 50.6517L106.504 50.6714L108.293 51.5658ZM98.143 35.2658L99.129 37.0059L99.1506 36.9936L99.172 36.9808L98.143 35.2658ZM86.993 36.1158H84.993V38.1158H86.993V36.1158ZM86.993 28.7158V26.7158H84.993V28.7158H86.993ZM98.343 29.6658L97.1629 31.2806L97.1836 31.2957L97.2046 31.3102L98.343 29.6658ZM100.143 49.3158L101.198 51.0151L101.219 51.0022L101.239 50.9887L100.143 49.3158ZM86.993 50.2158H84.993V52.2158H86.993V50.2158ZM86.993 42.5158V40.5158H84.993V42.5158H86.993ZM100.243 43.5658L99.0151 45.1445L99.0336 45.1589L99.0525 45.1729L100.243 43.5658ZM111.243 47.3658V47.2658H107.243V47.3658H111.243ZM111.243 47.2658C111.243 44.6076 110.575 42.2554 108.981 40.48L106.004 43.1516C106.744 43.9762 107.243 45.2574 107.243 47.2658H111.243ZM108.998 40.4988C107.571 38.8676 105.671 37.6513 103.399 36.7944L101.987 40.5372C103.782 41.2137 105.082 42.0974 105.988 43.1328L108.998 40.4988ZM103.624 40.4357C104.395 40.0302 105.108 39.5417 105.76 38.971L103.126 35.9607C102.712 36.3233 102.258 36.6348 101.761 36.896L103.624 40.4357ZM105.714 39.0097C106.43 38.4205 107.046 37.7415 107.557 36.9752L104.229 34.7564C103.94 35.1902 103.589 35.5778 103.172 35.922L105.714 39.0097ZM107.544 36.9952C108.097 36.1866 108.516 35.3008 108.806 34.3481L104.98 33.1835C104.803 33.7642 104.556 34.2784 104.242 34.7365L107.544 36.9952ZM108.782 34.4229C109.137 33.4024 109.293 32.2896 109.293 31.1158H105.293C105.293 31.9421 105.182 32.5959 105.004 33.1088L108.782 34.4229ZM109.293 31.1158V31.0158H105.293V31.1158H109.293ZM109.293 31.0158C109.293 27.6731 108.007 24.8809 105.433 22.8467L102.953 25.9849C104.512 27.2174 105.293 28.8252 105.293 31.0158H109.293ZM105.445 22.8566C102.943 20.8465 99.6271 19.9658 95.743 19.9658V23.9658C99.0588 23.9658 101.376 24.7184 102.94 25.9751L105.445 22.8566ZM95.743 19.9658H79.493V23.9658H95.743V19.9658ZM77.493 21.9658V56.9658H81.493V21.9658H77.493ZM79.493 58.9658H96.143V54.9658H79.493V58.9658ZM96.143 58.9658C98.2429 58.9658 100.192 58.7525 101.978 58.3061L101.008 54.4255C99.5935 54.7791 97.9764 54.9658 96.143 54.9658V58.9658ZM101.969 58.3084C103.795 57.8611 105.42 57.1712 106.796 56.1998L104.49 52.9319C103.599 53.5604 102.458 54.0705 101.017 54.4232L101.969 58.3084ZM106.774 56.2153C108.205 55.2343 109.322 53.9803 110.082 52.4602L106.504 50.6714C106.064 51.5514 105.415 52.2974 104.512 52.9164L106.774 56.2153ZM110.062 52.4993C110.872 50.9642 111.243 49.2329 111.243 47.3658H107.243C107.243 48.6987 106.981 49.7675 106.524 50.6323L110.062 52.4993ZM97.643 32.4158C97.643 33.1099 97.4331 33.3594 97.114 33.5508L99.172 36.9808C100.853 35.9723 101.643 34.3217 101.643 32.4158H97.643ZM97.1569 33.5258C96.5679 33.8596 95.6012 34.1158 94.093 34.1158V38.1158C95.9847 38.1158 97.718 37.8054 99.129 37.0059L97.1569 33.5258ZM94.093 34.1158H86.993V38.1158H94.093V34.1158ZM88.993 36.1158V28.7158H84.993V36.1158H88.993ZM86.993 30.7158H94.593V26.7158H86.993V30.7158ZM94.593 30.7158C96.0106 30.7158 96.7756 30.9976 97.1629 31.2806L99.523 28.051C98.177 27.0674 96.442 26.7158 94.593 26.7158V30.7158ZM97.2046 31.3102C97.4676 31.4923 97.643 31.7235 97.643 32.3158H101.643C101.643 30.5748 100.952 29.0393 99.4814 28.0214L97.2046 31.3102ZM97.643 32.3158V32.4158H101.643V32.3158H97.643ZM99.593 46.4158C99.593 47.1405 99.3714 47.4303 99.0469 47.6429L101.239 50.9887C102.848 49.9347 103.593 48.2912 103.593 46.4158H99.593ZM99.0882 47.6165C98.558 47.9457 97.6421 48.2158 96.143 48.2158V52.2158C98.0438 52.2158 99.7946 51.886 101.198 51.0151L99.0882 47.6165ZM96.143 48.2158H86.993V52.2158H96.143V48.2158ZM88.993 50.2158V42.5158H84.993V50.2158H88.993ZM86.993 44.5158H95.893V40.5158H86.993V44.5158ZM95.893 44.5158C97.7479 44.5158 98.6459 44.8574 99.0151 45.1445L101.471 41.9871C100.04 40.8743 98.038 40.5158 95.893 40.5158V44.5158ZM99.0525 45.1729C99.4189 45.4443 99.593 45.7519 99.593 46.3158H103.593C103.593 44.5464 102.867 43.0206 101.433 41.9587L99.0525 45.1729ZM99.593 46.3158V46.4158H103.593V46.3158H99.593Z" }),
        React__default['default'].createElement("path",{ d: "M19.9307 0L21.8352 5.86155L27.9984 5.86155L23.0123 9.48418L24.9168 15.3457L19.9307 11.7231L14.9445 15.3457L16.8491 9.48418L11.8629 5.86155L18.0261 5.86155L19.9307 0Z"}),
        React__default['default'].createElement("path",{ d: "M59.4199 0L61.3245 5.86155L67.4877 5.86155L62.5015 9.48418L64.4061 15.3457L59.4199 11.7231L54.4338 15.3457L56.3383 9.48418L51.3522 5.86155L57.5154 5.86155L59.4199 0Z"}),
        React__default['default'].createElement("path",{ d: "M98.9094 0L100.814 5.86155L106.977 5.86155L101.991 9.48418L103.896 15.3457L98.9094 11.7231L93.9233 15.3457L95.8278 9.48418L90.8417 5.86155L97.0049 5.86155L98.9094 0Z"})));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width:"24", height:"25" ,viewBox:"0 0 24 25" }, props),
    React__default['default'].createElement("path", { d: "M23.1736 23.1726H0.493071C0.220904 23.1726 0 23.3966 0 23.6726C0 23.9486 0.220904 24.1726 0.493071 24.1726H23.1736C23.4458 24.1726 23.6667 23.9486 23.6667 23.6726C23.6667 23.3966 23.4458 23.1726 23.1736 23.1726Z" }),
    React__default['default'].createElement("path", { d: "M4.43749 17.1726H1.47916C1.20699 17.1726 0.986084 17.3966 0.986084 17.6726V23.6726C0.986084 23.9486 1.20699 24.1726 1.47916 24.1726H4.43749C4.70966 24.1726 4.93056 23.9486 4.93056 23.6726V17.6726C4.93056 17.3966 4.70966 17.1726 4.43749 17.1726ZM3.94442 23.1726H1.97223V18.1726H3.94446V23.1726H3.94442Z" }),
    React__default['default'].createElement("path", { d: "M10.3541 12.1726H7.39578C7.12361 12.1726 6.90271 12.3966 6.90271 12.6726V23.6726C6.90271 23.9486 7.12361 24.1727 7.39578 24.1727H10.3541C10.6263 24.1727 10.8472 23.9486 10.8472 23.6726V12.6726C10.8472 12.3966 10.6263 12.1726 10.3541 12.1726ZM9.86105 23.1726H7.88881V13.1726H9.86105V23.1726Z" }),

    React__default['default'].createElement("path", { d: "M16.2709 14.1726H13.3125C13.0404 14.1726 12.8195 14.3966 12.8195 14.6726V23.6726C12.8195 23.9486 13.0404 24.1726 13.3125 24.1726H16.2709C16.543 24.1726 16.7639 23.9486 16.7639 23.6726V14.6726C16.7639 14.3966 16.543 14.1726 16.2709 14.1726ZM15.7778 23.1726H13.8056V15.1726H15.7778V23.1726V23.1726Z" }),
    React__default['default'].createElement("path", { d: "M22.1875 8.17261H19.2292C18.957 8.17261 18.7361 8.39662 18.7361 8.67262V23.6726C18.7361 23.9486 18.957 24.1726 19.2292 24.1726H22.1875C22.4597 24.1726 22.6806 23.9486 22.6806 23.6726V8.67262C22.6806 8.39658 22.4597 8.17261 22.1875 8.17261ZM21.6944 23.1726H19.7222V9.17259H21.6944V23.1726V23.1726Z" }),
    React__default['default'].createElement("path", { d: "M2.95832 9.17261C1.87063 9.17261 0.986084 10.0696 0.986084 11.1726C0.986084 12.2756 1.87063 13.1726 2.95832 13.1726C4.04602 13.1726 4.93056 12.2756 4.93056 11.1726C4.93056 10.0696 4.04602 9.17261 2.95832 9.17261ZM2.95832 12.1726C2.41399 12.1726 1.97223 11.7236 1.97223 11.1726C1.97223 10.6216 2.41399 10.1726 2.95832 10.1726C3.50266 10.1726 3.94442 10.6217 3.94442 11.1726C3.94442 11.7236 3.50266 12.1726 2.95832 12.1726Z" }),
    React__default['default'].createElement("path", { d: "M8.87495 4.17261C7.78725 4.17261 6.90271 5.06961 6.90271 6.17262C6.90271 7.27564 7.78725 8.17264 8.87495 8.17264C9.96265 8.17264 10.8472 7.27564 10.8472 6.17262C10.8472 5.06961 9.96265 4.17261 8.87495 4.17261ZM8.87495 7.17261C8.33062 7.17261 7.88885 6.72359 7.88885 6.17262C7.88885 5.62161 8.33062 5.17264 8.87495 5.17264C9.41928 5.17264 9.86105 5.62165 9.86105 6.17262C9.86105 6.72364 9.41928 7.17261 8.87495 7.17261Z" }),

    React__default['default'].createElement("path", { d: "M14.7917 6.17261C13.704 6.17261 12.8195 7.06961 12.8195 8.17262C12.8195 9.27564 13.704 10.1726 14.7917 10.1726C15.8794 10.1726 16.7639 9.27564 16.7639 8.17262C16.7639 7.06961 15.8794 6.17261 14.7917 6.17261ZM14.7917 9.17261C14.2474 9.17261 13.8056 8.72359 13.8056 8.17262C13.8056 7.62161 14.2474 7.17264 14.7917 7.17264C15.336 7.17264 15.7778 7.62165 15.7778 8.17262C15.7778 8.72359 15.336 9.17261 14.7917 9.17261Z" }),
    React__default['default'].createElement("path", { d: "M20.7083 0.172607C19.6206 0.172607 18.7361 1.06961 18.7361 2.17262C18.7361 3.27564 19.6206 4.17264 20.7083 4.17264C21.796 4.17264 22.6806 3.27564 22.6806 2.17262C22.6806 1.06961 21.796 0.172607 20.7083 0.172607ZM20.7083 3.17261C20.164 3.17261 19.7222 2.72359 19.7222 2.17262C19.7222 1.62161 20.164 1.17264 20.7083 1.17264C21.2527 1.17264 21.6944 1.62165 21.6944 2.17262C21.6944 2.72359 21.2527 3.17261 20.7083 3.17261Z" }),
    React__default['default'].createElement("path", { d: "M20.0121 2.87867C19.8198 2.68367 19.5072 2.68367 19.3149 2.87867L15.4888 6.75866C15.2965 6.95366 15.2965 7.27067 15.4888 7.46567C15.5855 7.56266 15.7117 7.61169 15.8379 7.61169C15.9631 7.61169 16.0894 7.56369 16.186 7.46567L20.0121 3.58569C20.2044 3.39069 20.2044 3.07367 20.0121 2.87867Z" }),
    React__default['default'].createElement("path", { d: "M13.5994 7.01862L10.432 6.10264C10.1667 6.02464 9.89754 6.18063 9.82358 6.44665C9.74865 6.71267 9.90049 6.98867 10.1618 7.06465L13.3292 7.98063C13.3745 7.99362 13.4199 7.99962 13.4643 7.99962C13.6793 7.99962 13.8765 7.8566 13.9386 7.63662C14.0136 7.37163 13.8617 7.0946 13.5994 7.01862Z" }),
    React__default['default'].createElement("path", { d: "M8.10584 6.79551C7.93625 6.57951 7.62659 6.54449 7.41359 6.71549L3.69594 9.72149C3.48294 9.8945 3.44744 10.2085 3.61805 10.4245C3.71568 10.5485 3.85966 10.6125 4.00361 10.6125C4.11108 10.6125 4.21956 10.5765 4.3103 10.5045L8.02796 7.49849C8.24096 7.32547 8.27645 7.01151 8.10584 6.79551Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 27 27 " ,width:27 ,height:27 }, props),
        React__default['default'].createElement("path", { d: "M24.4125 14.1884L23.4189 14.771C23 15.0168 22.481 15.0139 22.0646 14.7636L21.1361 14.2053C20.2257 13.6578 19.0909 13.6516 18.1745 14.189L17.182 14.771C16.7629 15.0168 16.2441 15.0139 15.8277 14.7636L14.8991 14.2053C14.8056 14.149 14.7095 14.0988 14.6116 14.0539V3.25652C14.6116 2.32761 15.3673 1.57203 16.2962 1.57203C17.2251 1.57203 17.9808 2.32771 17.9808 3.25658V5.03366H19.5528V3.25652C19.5528 1.46089 18.092 0 16.2963 0C14.5005 0 13.0397 1.46089 13.0397 3.25652V9.50809H6.43206V3.25652C6.43206 2.32766 7.18774 1.57203 8.1166 1.57203C9.04546 1.57203 9.80114 2.32771 9.80114 3.25658V5.03366H11.3732V3.25652C11.3732 1.46089 9.91228 0 8.1166 0C6.32092 0 4.86008 1.46089 4.86008 3.25652V14.6819L4.70838 14.7709C4.28933 15.0167 3.77034 15.0138 3.35407 14.7635L2.43165 14.2089L1.62158 15.5562L2.544 16.1108C3.45379 16.6579 4.58785 16.6641 5.50357 16.127L6.49604 15.545C6.91572 15.2989 7.43544 15.3018 7.8524 15.5525L8.78094 16.1107C9.69073 16.6579 10.8247 16.6641 11.7405 16.127L12.7329 15.545C13.1526 15.2989 13.6723 15.3018 14.0892 15.5525L15.0178 16.1107C15.4774 16.3871 15.9942 16.5254 16.5113 16.5254C17.0176 16.5254 17.5242 16.3928 17.9774 16.127L18.9699 15.545C19.3896 15.2989 19.9093 15.3018 20.3262 15.5525L21.2548 16.1108C22.1646 16.6578 23.2986 16.6641 24.2143 16.127L25.2078 15.5444L24.4125 14.1884ZM13.0397 13.8134C12.6572 13.862 12.282 13.9871 11.9377 14.189L10.9452 14.771C10.5262 15.0168 10.0073 15.0139 9.59091 14.7636L8.66236 14.2054C7.98256 13.7966 7.17768 13.6897 6.43201 13.8855V11.0801H6.43206H13.0397V13.8134Z" }),
        React__default['default'].createElement("path", { d: "M24.4125 19.4353L23.419 20.018C23 20.2637 22.4811 20.2608 22.0647 20.0105L21.1361 19.4522C20.2257 18.9048 19.0909 18.8986 18.1745 19.4359L17.182 20.0179C16.763 20.2637 16.2441 20.2608 15.8278 20.0105L14.8991 19.4522C13.9888 18.9046 12.8539 18.8985 11.9376 19.4359L10.9451 20.0179C10.5261 20.2637 10.0072 20.2608 9.59089 20.0104L8.66229 19.4521C7.75177 18.9046 6.61697 18.8985 5.70073 19.4358L4.70826 20.0178C4.2892 20.2635 3.77027 20.2607 3.354 20.0104L2.43158 19.4557L1.62146 20.8029L2.54403 21.3576C3.45382 21.9046 4.58784 21.9108 5.50355 21.3738L6.49603 20.7918C6.91565 20.5457 7.43537 20.5485 7.85232 20.7993L8.78093 21.3576C9.69077 21.9047 10.8248 21.9108 11.7404 21.3739L12.7329 20.7919C13.1525 20.5456 13.6723 20.5485 14.0892 20.7993L15.0178 21.3576C15.4774 21.634 15.9943 21.7723 16.5112 21.7723C17.0177 21.7723 17.5242 21.6396 17.9774 21.3738L18.9699 20.7918C19.3895 20.5457 19.9091 20.5485 20.3262 20.7993L21.2548 21.3576C22.1647 21.9047 23.2987 21.9108 24.2143 21.3739L25.2078 20.7913L24.4125 19.4353Z" }),
        React__default['default'].createElement("path", { d: "M24.4124 24.4923L23.419 25.075C22.9999 25.3207 22.481 25.3179 22.0647 25.0675L21.1361 24.5092C20.2257 23.9619 19.0909 23.9556 18.1745 24.493L17.1821 25.075C16.763 25.3207 16.2442 25.3178 15.8277 25.0675L14.8991 24.5093C13.9888 23.9617 12.8539 23.9556 11.9376 24.493L10.9452 25.075C10.5261 25.3207 10.0072 25.3179 9.59086 25.0675L8.66231 24.5092C7.75178 23.9618 6.61698 23.9556 5.70075 24.493L4.70827 25.075C4.28922 25.3207 3.77029 25.3179 3.35396 25.0675L2.43165 24.5128L1.62158 25.8601L2.544 26.4147C3.45379 26.9618 4.58785 26.968 5.50351 26.431L6.49599 25.849C6.91562 25.6029 7.43533 25.6057 7.85229 25.8564L8.78084 26.4147C9.69063 26.9618 10.8247 26.9681 11.7404 26.431L12.7328 25.8489C13.1525 25.6027 13.6721 25.6056 14.0891 25.8564L15.0177 26.4146C15.4773 26.691 15.9941 26.8294 16.5112 26.8294C17.0176 26.8293 17.5242 26.6966 17.9773 26.4309L18.9698 25.8489C19.3895 25.6028 19.9093 25.6057 20.3261 25.8563L21.2547 26.4146C22.1645 26.9617 23.2985 26.968 24.2142 26.4309L25.2077 25.8483L24.4124 24.4923Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 22" ,width:"25" ,height:"22",fill:"none" }, props),
        React__default['default'].createElement("path", {d: "M1 6.57568C1 4.11007 1 2.87727 1.68097 2.0475C1.80563 1.8956 1.94492 1.75632 2.09682 1.63165C2.92658 0.950684 4.15939 0.950684 6.625 0.950684H18.375C20.8406 0.950684 22.0734 0.950684 22.9032 1.63165C23.0551 1.75632 23.1944 1.8956 23.319 2.0475C24 2.87727 24 4.11007 24 6.57568V7.49235C24 8.02162 23.5709 8.45068 23.0417 8.45068H22.6667C21.286 8.45068 20.1667 9.56997 20.1667 10.9507V10.9507C20.1667 12.3314 21.286 13.4507 22.6667 13.4507H23.0417C23.5709 13.4507 24 13.8797 24 14.409V15.3257C24 17.7913 24 19.0241 23.319 19.8539C23.1944 20.0058 23.0551 20.1451 22.9032 20.2697C22.0734 20.9507 20.8406 20.9507 18.375 20.9507H6.625C4.15939 20.9507 2.92658 20.9507 2.09682 20.2697C1.94492 20.1451 1.80563 20.0058 1.68097 19.8539C1 19.0241 1 17.7913 1 15.3257V14.409C1 13.8797 1.42906 13.4507 1.95833 13.4507H2.33333C3.71405 13.4507 4.83333 12.3314 4.83333 10.9507V10.9507C4.83333 9.56997 3.71405 8.45068 2.33333 8.45068H1.95833C1.42906 8.45068 1 8.02162 1 7.49235V6.57568Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 22 16" }, props),
        React__default['default'].createElement("path", { d: "M2 21.7228L1.46967 21.1925L0.939339 21.7228L1.46967 22.2531L2 21.7228ZM22.178 15.2468C22.178 14.8326 21.8422 14.4968 21.428 14.4968C21.0138 14.4968 20.678 14.8326 20.678 15.2468L22.178 15.2468ZM6.65046 16.0117L1.46967 21.1925L2.53033 22.2531L7.71112 17.0724L6.65046 16.0117ZM1.46967 22.2531L6.65046 27.4339L7.71112 26.3733L2.53033 21.1925L1.46967 22.2531ZM2 22.4728L17.428 22.4728L17.428 20.9728L2 20.9728L2 22.4728ZM22.178 17.7228L22.178 15.2468L20.678 15.2468L20.678 17.7228L22.178 17.7228ZM17.428 22.4728C20.0513 22.4728 22.178 20.3462 22.178 17.7228L20.678 17.7228C20.678 19.5177 19.2229 20.9728 17.428 20.9728L17.428 22.4728Z" }),
        React__default['default'].createElement("path", { d: "M22.7234 6.18075L23.2537 6.71108L23.784 6.18075L23.2537 5.65042L22.7234 6.18075ZM2.54541 12.6567C2.54541 13.071 2.8812 13.4067 3.29541 13.4067C3.70963 13.4067 4.04541 13.071 4.04541 12.6567L2.54541 12.6567ZM18.0729 11.8919L23.2537 6.71108L22.1931 5.65042L17.0123 10.8312L18.0729 11.8919ZM23.2537 5.65042L18.0729 0.469623L17.0123 1.53028L22.1931 6.71108L23.2537 5.65042ZM22.7234 5.43075L7.29541 5.43075L7.29541 6.93075L22.7234 6.93075L22.7234 5.43075ZM2.54541 10.1807L2.54541 12.6567L4.04541 12.6567L4.04541 10.1807L2.54541 10.1807ZM7.29541 5.43075C4.67206 5.43074 2.54541 7.55739 2.54541 10.1807L4.04541 10.1807C4.04541 8.38582 5.50049 6.93075 7.29541 6.93075L7.29541 5.43075Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width:"24", height:"20",viewBox: "0 0 24 20" }, props),
        React__default['default'].createElement("path", { d: "M21.173 3.15358C22.2015 2.52278 22.971 1.52951 23.338 0.359238C22.3715 0.947536 21.3141 1.36195 20.2115 1.58456C18.6828 -0.0744761 16.2607 -0.478209 14.2986 0.598954C12.3365 1.67612 11.3202 3.9675 11.8176 6.19275C7.85881 5.98885 4.17053 4.07041 1.67052 0.914811C0.365817 3.22352 1.03255 6.17484 3.19419 7.65936C2.41252 7.63358 1.64818 7.41646 0.964911 7.02611C0.964911 7.04729 0.964911 7.06848 0.964911 7.08967C0.965363 9.49458 2.6175 11.5661 4.91519 12.0427C4.19015 12.2451 3.42963 12.2749 2.69165 12.1298C3.33783 14.1865 5.18545 15.5954 7.29133 15.6375C5.54718 17.0419 3.39322 17.8035 1.17602 17.7997C0.783024 17.8003 0.390336 17.7771 0 17.7303C2.25152 19.2146 4.87202 20.0024 7.54833 19.9997C11.2717 20.0259 14.85 18.52 17.4828 15.8188C20.1156 13.1175 21.5832 9.44643 21.5573 5.62658C21.5573 5.40765 21.5523 5.18989 21.5424 4.97331C22.5067 4.25837 23.3389 3.37269 24 2.35789C23.1017 2.7664 22.1487 3.03461 21.173 3.15358Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({width:"22",width:"29", viewBox: "0 0 22 29",fill:"none" }, props),
            React__default['default'].createElement("path", { d: "M18.5714 3.13818H14.2614C13.7895 1.86499 12.5185 0.950684 11.0286 0.950684C9.53862 0.950684 8.26763 1.86499 7.79576 3.13818H3.42857C1.53795 3.13818 0 4.61005 0 6.41943V25.6694C0 27.4788 1.53795 28.9507 3.42857 28.9507H18.575C20.4636 28.9488 22 27.4769 22 25.6694V6.41943C22 4.61005 20.4621 3.13818 18.5714 3.13818ZM9.88571 5.32568V4.23193C9.88571 3.62888 10.3984 3.13818 11.0286 3.13818C11.6587 3.13818 12.1714 3.62888 12.1714 4.23193V5.32568H14.4571V7.4585H7.6V5.32568H9.88571ZM19.7143 25.6694C19.7143 26.2719 19.202 26.7625 18.5739 26.7632H3.42857C2.79844 26.7632 2.28571 26.2725 2.28571 25.6694V6.41943C2.28571 5.81638 2.79844 5.32568 3.42857 5.32568H5.31429V9.646H16.7429V5.32568H18.5714C19.2016 5.32568 19.7143 5.81638 19.7143 6.41943V25.6694ZM15.3833 13.5309L17.0737 15.0032L9.75424 22.7005L4.91964 18.2251L6.50893 16.6528L9.64978 19.5602L15.3833 13.5309Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 26",width:"25", height:"26" }, props),
        React__default['default'].createElement("path", { d: "M24.2647 2.76448C24.212 1.79948 23.4446 1.03211 22.4796 0.979438C20.5324 0.87306 16.7221 0.976544 13.0787 2.86103C11.2214 3.82176 9.25701 5.4506 7.68937 7.32992C7.67006 7.35307 7.65127 7.37637 7.6321 7.39957L4.07446 7.67439C3.48885 7.71966 2.96726 8.0266 2.64338 8.51645L0.216225 12.1876C-0.0294128 12.5591 -0.0684625 13.0241 0.111697 13.4313C0.291905 13.8386 0.662189 14.1224 1.10227 14.1906L4.0996 14.6548C4.08902 14.7131 4.07839 14.7713 4.06867 14.8296C3.96888 15.4265 4.16665 16.0402 4.59776 16.4712L8.7728 20.6463C9.13023 21.0038 9.6132 21.2008 10.1081 21.2008C10.21 21.2008 10.3125 21.1924 10.4145 21.1754C10.4728 21.1656 10.531 21.155 10.5892 21.1444L11.0535 24.1418C11.1217 24.5819 11.4055 24.9522 11.8127 25.1324C11.9821 25.2074 12.1614 25.2444 12.3399 25.2444C12.5906 25.2443 12.8395 25.1713 13.0564 25.0279L16.7276 22.6007C17.2175 22.2768 17.5244 21.7552 17.5696 21.1696L17.8444 17.612C17.8676 17.5929 17.8909 17.5741 17.9141 17.5548C19.7934 15.9871 21.4223 14.0228 22.383 12.1654C24.2676 8.52181 24.3709 4.7115 24.2647 2.76448ZM15.9426 21.4133L12.4309 23.735L11.9784 20.8139C13.4626 20.3775 14.9308 19.6786 16.3295 18.7423L16.1505 21.0599C16.1393 21.2045 16.0635 21.3333 15.9426 21.4133ZM9.77931 19.6398L5.60423 15.4647C5.4977 15.3582 5.44845 15.2085 5.47261 15.0643C5.59673 14.322 5.7896 13.6155 6.02836 12.9499L12.2928 19.2143C11.4934 19.5007 10.7774 19.6715 10.1798 19.7714C10.0353 19.7954 9.88583 19.7463 9.77931 19.6398ZM4.18411 9.09361L6.50166 8.91459C5.56532 10.3133 4.86641 11.7815 4.43003 13.2657L1.50894 12.8132L3.83076 9.30152C3.91076 9.18053 4.03958 9.10476 4.18411 9.09361ZM17.0024 16.4616C15.8526 17.4207 14.7365 18.1144 13.7077 18.6163L6.62749 11.5361C7.28502 10.1931 8.08751 9.07482 8.78243 8.24173C10.2332 6.50252 12.0375 5.00217 13.7327 4.12533C17.0766 2.39571 20.5996 2.30257 22.4021 2.40069C22.6407 2.41369 22.8304 2.60344 22.8434 2.84205C22.9417 4.64451 22.8483 8.16752 21.1187 11.5114C20.2419 13.2066 18.7416 15.0109 17.0024 16.4616Z" }),
        React__default['default'].createElement("path", { d: "M16.641 12.16C17.5521 12.1599 18.4636 11.8131 19.1572 11.1194C19.8294 10.4473 20.1995 9.55368 20.1995 8.6032C20.1995 7.65273 19.8293 6.75909 19.1572 6.08699C17.7698 4.69947 15.5122 4.69957 14.1248 6.08699C13.4527 6.75909 13.0825 7.65273 13.0825 8.6032C13.0825 9.55368 13.4527 10.4473 14.1248 11.1194C14.8186 11.8132 15.7296 12.1601 16.641 12.16ZM15.1312 7.09346C15.5474 6.6772 16.0942 6.46909 16.6409 6.46909C17.1877 6.46909 17.7345 6.6772 18.1507 7.09346C18.5539 7.49672 18.776 8.03288 18.776 8.60316C18.776 9.17343 18.5539 9.70964 18.1507 10.1129C17.3182 10.9454 15.9637 10.9453 15.1312 10.1129C14.7279 9.70964 14.5058 9.17348 14.5058 8.6032C14.5058 8.03293 14.728 7.49672 15.1312 7.09346Z" }),
        React__default['default'].createElement("path", { d: "M0.725978 20.9708C0.90813 20.9708 1.09028 20.9013 1.22921 20.7623L3.55288 18.4386C3.83083 18.1607 3.83083 17.71 3.55288 17.4321C3.27498 17.1541 2.82432 17.1541 2.54637 17.4321L0.222745 19.7558C-0.0552053 20.0337 -0.0552053 20.4843 0.222745 20.7623C0.361672 20.9013 0.543825 20.9708 0.725978 20.9708Z" }),
        React__default['default'].createElement("path", { d: "M5.68239 19.5617C5.40449 19.2838 4.95383 19.2838 4.67588 19.5617L0.208463 24.0292C-0.0694875 24.3072 -0.0694875 24.7578 0.208463 25.0357C0.347438 25.1747 0.529543 25.2442 0.711696 25.2442C0.893848 25.2442 1.076 25.1747 1.21493 25.0357L5.68234 20.5682C5.96034 20.2903 5.96034 19.8397 5.68239 19.5617Z" }),
        React__default['default'].createElement("path", { d: "M6.80545 21.6911L4.48178 24.0148C4.20383 24.2927 4.20383 24.7434 4.48178 25.0213C4.62075 25.1603 4.80291 25.2298 4.98501 25.2298C5.16712 25.2298 5.34932 25.1603 5.48824 25.0213L7.81191 22.6976C8.08986 22.4197 8.08986 21.9691 7.81191 21.6911C7.53401 21.4132 7.08335 21.4132 6.80545 21.6911Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React__default['default'].createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React__default['default'].createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React__default['default'].createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React__default['default'].createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React__default['default'].createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React__default['default'].createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React__default['default'].createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React__default['default'].createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React__default['default'].createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React__default['default'].createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React__default['default'].createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React__default['default'].createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React__default['default'].createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React__default['default'].createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React__default['default'].createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React__default['default'].createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width:"28" ,height:"29" ,viewBox:"0 0 28 29" }, props),
        React__default['default'].createElement("path", { d: "M24.1903 5.37391C24.1914 5.25114 24.1439 5.1329 24.0582 5.04496L19.4054 0.392186C19.3179 0.305877 19.1993 0.258302 19.0765 0.260047V0.255859H5.11812C4.34722 0.255859 3.72229 0.880786 3.72229 1.65169V26.7767C3.72229 27.5476 4.34722 28.1725 5.11812 28.1725H22.7987C23.5696 28.1725 24.1945 27.5476 24.1945 26.7767V5.37391H24.1903ZM19.5417 1.84432L22.606 4.90864H20.007C19.7501 4.90864 19.5417 4.70031 19.5417 4.44336V1.84432ZM23.264 26.7767C23.264 27.0336 23.0556 27.242 22.7987 27.242H5.11812C4.86117 27.242 4.65285 27.0336 4.65285 26.7767V1.65169C4.65285 1.39474 4.86117 1.18641 5.11812 1.18641H18.6112V4.44336C18.6112 5.21427 19.2361 5.83919 20.007 5.83919H23.264V26.7767Z" }),
        React__default['default'].createElement("path", { d: "M8.37496 12.8184C7.60405 12.8184 6.97913 13.4433 6.97913 14.2142C6.97913 14.9851 7.60405 15.61 8.37496 15.61C9.14587 15.61 9.77079 14.9851 9.77079 14.2142C9.77079 13.4433 9.14587 12.8184 8.37496 12.8184ZM8.37496 14.6795C8.11801 14.6795 7.90968 14.4711 7.90968 14.2142C7.90968 13.9572 8.11801 13.7489 8.37496 13.7489C8.63191 13.7489 8.84024 13.9572 8.84024 14.2142C8.84024 14.4711 8.63191 14.6795 8.37496 14.6795Z" }),
        React__default['default'].createElement("path", { d: "M20.9375 13.7488H11.632V14.6793H20.9375V13.7488Z"  }),
        React__default['default'].createElement("path", { d: "M8.37496 8.16553C7.60405 8.16553 6.97913 8.79045 6.97913 9.56136C6.97913 10.3323 7.60405 10.9572 8.37496 10.9572C9.14587 10.9572 9.77079 10.3323 9.77079 9.56136C9.77079 8.79045 9.14587 8.16553 8.37496 8.16553ZM8.37496 10.0266C8.11801 10.0266 7.90968 9.81831 7.90968 9.56136C7.90968 9.30441 8.11801 9.09608 8.37496 9.09608C8.63191 9.09608 8.84024 9.30441 8.84024 9.56136C8.84024 9.81831 8.63191 10.0266 8.37496 10.0266Z" }),
        React__default['default'].createElement("path", { d: "M20.9375 9.09619H11.632V10.0267H20.9375V9.09619Z" }),
        React__default['default'].createElement("path", { d: "M8.37496 17.4712C7.60405 17.4712 6.97913 18.0961 6.97913 18.867C6.97913 19.6379 7.60405 20.2629 8.37496 20.2629C9.14587 20.2629 9.77079 19.6379 9.77079 18.867C9.77079 18.0961 9.14587 17.4712 8.37496 17.4712ZM8.37496 19.3323C8.11801 19.3323 7.90968 19.124 7.90968 18.867C7.90968 18.6101 8.11801 18.4017 8.37496 18.4017C8.63191 18.4017 8.84024 18.6101 8.84024 18.867C8.84024 19.124 8.63191 19.3323 8.37496 19.3323Z" }),
        React__default['default'].createElement("path", { d: "M20.9375 18.4016H11.632V19.3322H20.9375V18.4016Z" }),
        React__default['default'].createElement("path", { d: "M8.37496 22.124C7.60405 22.124 6.97913 22.7489 6.97913 23.5199C6.97913 24.2908 7.60405 24.9157 8.37496 24.9157C9.14587 24.9157 9.77079 24.2908 9.77079 23.5199C9.77079 22.7489 9.14587 22.124 8.37496 22.124ZM8.37496 23.9851C8.11801 23.9851 7.90968 23.7768 7.90968 23.5199C7.90968 23.2629 8.11801 23.0546 8.37496 23.0546C8.63191 23.0546 8.84024 23.2629 8.84024 23.5199C8.84024 23.7768 8.63191 23.9851 8.37496 23.9851Z" }),
        React__default['default'].createElement("path", { d: "M20.9375 23.0544H11.632V23.985H20.9375V23.0544Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React__default['default'].createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React__default['default'].createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React__default['default'].createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React__default['default'].createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React__default['default'].createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React__default['default'].createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React__default['default'].createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React__default['default'].createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React__default['default'].createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React__default['default'].createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React__default['default'].createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React__default['default'].createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React__default['default'].createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React__default['default'].createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React__default['default'].createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React__default['default'].createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React__default['default'].createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React__default['default'].createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 27",width:"24" ,height:"27" }, props),
            React__default['default'].createElement("path", {  d: "M18.3491 21.161C20.2474 21.4753 20.9219 21.0927 22.2664 20.1901C22.2905 20.1737 22.3131 20.155 22.3338 20.1344C22.6942 19.8165 22.975 19.4186 23.1538 18.9725C23.3325 18.5263 23.4042 18.0445 23.363 17.5657C23.363 16.3649 22.8848 14.9948 22.4361 13.8048C22.4039 13.7193 22.3464 13.6458 22.2713 13.5939C22.1962 13.542 22.1071 13.5142 22.0158 13.5142C21.9248 13.5141 21.8359 13.5417 21.761 13.5933C21.686 13.6448 21.6284 13.718 21.5959 13.803C21.124 15.0393 20.4364 16.4076 18.9235 17.1647C17.1645 18.0458 15.9596 17.8774 15.4154 17.4238C15.2953 17.339 15.2037 17.2198 15.1527 17.0819C15.1018 16.944 15.0937 16.794 15.1298 16.6514C15.2645 16.1983 15.8433 15.8646 16.6826 15.7596C18.8831 15.4843 20.3152 13.6575 21.4877 11.9672C21.5351 11.8988 21.5626 11.8187 21.5671 11.7357C21.5716 11.6527 21.553 11.57 21.5133 11.497C21.366 11.2275 21.2237 10.9532 21.0817 10.6801C20.675 9.85303 20.2089 9.05653 19.6869 8.29689C19.6405 8.23222 19.5777 8.18106 19.5049 8.14866C19.4322 8.11626 19.3521 8.10378 19.273 8.11251C19.1938 8.12124 19.1184 8.15086 19.0545 8.19833C18.9905 8.2458 18.9404 8.30942 18.9091 8.38267C18.429 9.33904 17.7869 10.2051 17.0114 10.9424C15.9578 11.999 15.0718 12.2326 14.7341 12.1311C14.6443 12.1032 14.6349 12.0673 14.6304 12.0413C14.5967 11.8773 14.7489 11.3861 15.5689 10.7017C16.7336 9.64796 17.6848 8.38012 18.3707 6.96719C18.4126 6.88955 18.4306 6.80129 18.4226 6.71344C18.4146 6.62559 18.381 6.54204 18.3258 6.47321C16.4254 4.13958 14.2949 2.0032 11.9665 0.0963973C11.8823 0.0300664 11.7773 -0.00399169 11.6702 0.000372994C11.5631 0.00473768 11.4612 0.0472375 11.3827 0.120198C9.29125 2.11239 7.32647 4.23345 5.49986 6.47097C5.44475 6.53881 5.41063 6.62126 5.4017 6.70821C5.39277 6.79516 5.4094 6.88282 5.44956 6.96046C6.11626 8.38778 7.07127 9.66159 8.25447 10.7017C9.03495 11.3533 9.1827 11.8244 9.14677 11.9963C9.14093 12.0246 9.12881 12.0862 8.99723 12.1234C8.6748 12.2191 7.76632 12.0942 6.61715 10.9401C5.86309 10.2368 5.28301 9.36771 4.9228 8.40153C4.89442 8.32554 4.84599 8.25866 4.78264 8.20798C4.7193 8.15731 4.64342 8.12474 4.56305 8.11374C4.48269 8.10273 4.40084 8.1137 4.32621 8.14547C4.25157 8.17724 4.18694 8.22864 4.13917 8.2942C3.92946 8.58161 3.70582 8.87395 3.47904 9.16989C2.88601 9.90512 2.34577 10.6814 1.86238 11.4929C1.82226 11.5651 1.80279 11.6469 1.80612 11.7293C1.80945 11.8118 1.83544 11.8918 1.88124 11.9604C2.56877 12.9933 4.45756 15.4237 7.13897 15.7596C7.9473 15.8611 8.50639 16.1768 8.63168 16.6038C8.66452 16.7509 8.65294 16.9044 8.59841 17.0449C8.54389 17.1853 8.44887 17.3064 8.32542 17.3928C7.7515 17.8729 6.49725 18.0664 4.70141 17.1647C4.00821 16.8426 3.39026 16.3788 2.88748 15.803C2.38469 15.2273 2.00824 14.5525 1.78244 13.8223C1.75354 13.735 1.69855 13.6587 1.62491 13.6037C1.55127 13.5487 1.46252 13.5176 1.37065 13.5147C1.27846 13.5099 1.18714 13.5344 1.10977 13.5848C1.03241 13.6351 0.97297 13.7087 0.939985 13.7949C0.352599 15.2521 0.011305 16.3362 0.011305 17.5657C-0.0298728 18.0445 0.0417916 18.5263 0.220544 18.9725C0.399297 19.4186 0.680158 19.8165 1.04058 20.1344C1.06064 20.1546 1.08259 20.1728 1.10614 20.1888C2.43899 21.0941 3.1081 21.4812 5.02519 21.161C6.89378 20.8466 7.82336 21.0779 8.05103 21.368C8.07663 21.4008 8.13681 21.4776 8.05867 21.6586C7.8256 22.1975 6.80127 22.8414 5.3593 22.9726C3.86594 23.0549 2.39093 22.6114 1.19057 21.7192C1.11341 21.6573 1.01799 21.6227 0.919123 21.6206C0.820253 21.6185 0.72346 21.6491 0.643767 21.7077C0.564074 21.7662 0.505937 21.8495 0.47838 21.9444C0.450823 22.0394 0.455386 22.1408 0.491362 22.2329C0.840597 23.2046 1.39362 24.0902 2.11332 24.8305C2.83302 25.5709 3.70275 26.1486 4.66414 26.5252C5.44659 26.8103 6.27342 26.9543 7.10619 26.9504C8.70589 26.9128 10.2737 26.495 11.68 25.7317C13.9415 26.9661 16.2367 27.2509 18.3316 26.5543C19.3523 26.2015 20.2858 25.6347 21.0697 24.8919C21.8536 24.1491 22.4698 23.2475 22.8771 22.2473C22.9158 22.1565 22.9234 22.0555 22.8988 21.9599C22.8743 21.8643 22.819 21.7795 22.7414 21.7185C22.6638 21.6575 22.5683 21.6238 22.4696 21.6225C22.3709 21.6213 22.2746 21.6526 22.1954 21.7116C20.9767 22.5733 19.5111 23.0158 18.0191 22.9726C16.578 22.8414 15.5528 22.1979 15.3197 21.6586C15.2416 21.4789 15.3017 21.4008 15.3273 21.368C15.5492 21.0775 16.4792 20.8489 18.3491 21.161ZM14.4912 22.0142C14.8985 22.9573 16.3144 23.7207 17.9333 23.8667C19.0927 23.9235 20.2491 23.7053 21.3081 23.2299C20.5179 24.3847 19.3739 25.2516 18.0483 25.6998C16.2071 26.3114 14.1656 26.0456 12.1362 24.9462V20.5354L14.5235 19.7397L14.2397 18.8865L12.1362 19.5892V15.2036L14.4552 14.817L14.308 13.9314L12.1362 14.2933V10.9675L14.6991 8.40467L14.0641 7.76968L12.1362 9.69755V3.14739H11.2381V7.00312L9.53477 5.29979L8.89978 5.93478L11.2381 8.27309V15.3316L9.24197 14.0006L8.7435 14.7478L11.2381 16.4107V20.2727L9.24197 18.9417L8.7435 19.6889L11.2381 21.3505V24.9431C8.97028 26.0967 6.80845 26.3595 4.97489 25.6845C3.74318 25.2162 2.69936 24.3563 2.00384 23.2371C3.07897 23.731 4.26051 23.9483 5.44103 23.8694C7.05993 23.7221 8.47586 22.9595 8.88317 22.0169C8.97525 21.8248 9.01234 21.611 8.9903 21.3991C8.96826 21.1872 8.88797 20.9856 8.75832 20.8166C8.21944 20.1295 6.87851 19.9427 4.877 20.2777C3.2527 20.5494 2.80273 20.2579 1.64727 19.4729C1.37965 19.2381 1.17279 18.942 1.04432 18.6099C0.91585 18.2778 0.869578 17.9196 0.909448 17.5657C0.92668 16.747 1.08529 15.9374 1.37828 15.1726C2.01963 16.3993 3.04656 17.3811 4.30084 17.9668C7.05005 19.345 8.51762 18.4033 8.90292 18.0817C9.16144 17.8837 9.35562 17.6136 9.46102 17.3055C9.56641 16.9974 9.57832 16.665 9.49525 16.3501C9.26308 15.5575 8.44487 15.0173 7.24989 14.8682C5.08177 14.596 3.42694 12.5905 2.78567 11.6896C3.21719 11.0059 3.68582 10.3462 4.18947 9.71371L4.3929 9.44787C4.79903 10.2405 5.33483 10.9596 5.97812 11.5756C7.33072 12.9322 8.554 13.1922 9.2532 12.9852C9.44438 12.9357 9.61795 12.8338 9.75434 12.691C9.89073 12.5482 9.98453 12.3701 10.0252 12.1769C10.1572 11.536 9.73236 10.7672 8.82973 10.0123C7.80817 9.11842 6.976 8.02895 6.38228 6.80822C8.04858 4.79042 9.82733 2.86819 11.7101 1.05067C13.7898 2.79118 15.7062 4.71807 17.4353 6.80732C16.824 8.01811 15.9956 9.10642 14.9914 10.0182C14.0583 10.7982 13.6173 11.5832 13.7498 12.2281C13.7875 12.4108 13.8755 12.5793 14.0038 12.7148C14.132 12.8503 14.2955 12.9474 14.4759 12.9951C15.3116 13.2439 16.5268 12.7027 17.6468 11.5801C18.3013 10.9355 18.8784 10.2167 19.3663 9.43843C19.6968 9.97058 19.9838 10.5216 20.2824 11.0951C20.3839 11.2903 20.4863 11.4849 20.5896 11.6789C19.5567 13.1428 18.311 14.6486 16.5695 14.8673C15.3458 15.0204 14.5064 15.5781 14.2662 16.3972C14.1815 16.7076 14.1907 17.036 14.2924 17.3411C14.3941 17.6462 14.5839 17.9144 14.8379 18.1118C15.8258 18.9345 17.5004 18.8811 19.3245 17.9659C20.4954 17.3617 21.4287 16.381 21.9741 15.1816C22.2593 15.9464 22.4248 16.7505 22.4649 17.5657C22.5063 17.9191 22.4608 18.2773 22.3324 18.6091C22.2039 18.9409 21.9965 19.2364 21.728 19.4698C20.5604 20.253 20.1046 20.5435 18.4973 20.2754C16.4981 19.9418 15.154 20.1277 14.616 20.8143C14.4863 20.9834 14.4059 21.1851 14.3839 21.3971C14.3619 21.6091 14.399 21.823 14.4912 22.0151V22.0142Z" }),
            React__default['default'].createElement("path", {  d: "M13.4834 5.39282H14.3815V6.29097H13.4834V5.39282Z"}),
            React__default['default'].createElement("path", {  d: "M8.99268 8.0874H9.89082V8.98555H8.99268V8.0874Z" }),
            React__default['default'].createElement("path", {  d: "M8.99268 23.3555H9.89082V24.2536H8.99268V23.3555Z" }),
            React__default['default'].createElement("path", {  d: "M13.0344 22.4573H13.9326V23.3554H13.0344V22.4573Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$J,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$L,
    HomeIcon: Icon$M,
    IfoIcon: Icon$N,
    InfoIcon: Icon$O,
    LanguageIcon: Icon$P,
    LogoIcon: Logo,
    MoonIcon: Icon$Q,
    MoreIcon: Icon$R,
    NftIcon: Icon$S,
    PoolIcon: Icon$T,
    SunIcon: Icon$U,
    TelegramIcon: Icon$V,
    TicketIcon: Icon$W,
    TradeIcon: Icon$X,
    TwitterIcon: Icon$Y,
    RedditIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    HandshakeIcon: Icon$10,
    LayerIcon: Icon$11,
    RoadmapIcon: Icon$12,
    BondsIcon: Icon$13,
    VaultsIcon: Icon$14,
    EggHouseIcon: Icon$15
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  // .mobile-icon {\n  //   width: 36px;\n  //   ", " {\n  //     display: none;\n  //   }\n  // }\n  .desktop-icon {\n    width: 156px;\n    display: block;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  // .mobile-icon {\n  //   width: 36px;\n  //   ", " {\n  //     display: none;\n  //   }\n  // }\n  .desktop-icon {\n    width: 156px;\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "4px" }, isPushed ? (React__default['default'].createElement(Icon$L, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$K, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/goosedefi/",
            },
            {
                label: "Docs",
                href: "https://goosedefi.gitbook.io/goose-finance/",
            },
            {
                label: "Blog",
                href: "https://goosefinance.medium.com/",
            },
        ],
    },
];
var MENU_HEIGHT = 88;
var MENU_ENTRY_HEIGHT = 50;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 48;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  a > div {\n    color: ", ";\n    font-weight: ", ";;\n  }\n\n  a:hover > div {\n    color: #aeaeaebd;\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    // background: ", ";\n    background-size: 200% 100%;\n    font-weight: normal;\n    // color: #000;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  a > div {\n    color: ", ";\n    font-weight: ", ";;\n  }\n\n  a:hover > div {\n    color: #000;\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    // background: ", ";\n    background-size: 200% 100%;\n    font-weight: normal;\n    // color: #000;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "15px");
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "#F5E750" : "none");
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "inset 5px 0px 0px rgba#F5E750" : "none");
}, function (_a) {
    var isActive = _a.isActive; _a.theme;
    return (isActive ? "red" : "white");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "#F5E750" : "none");
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "bold" : "normal");
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "#F5E750" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-top: 10px\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-top: 10px\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "35", height: "24", viewBox: "0 0 35 24" }, props),
        React__default['default'].createElement("path", { d: "M21.4228 23.2885C21.4559 21.9055 21.3604 15.7063 17.0086 14.4984C17.0086 14.4984 17.1221 16.9088 18.5889 19.0372C19.8459 20.8618 20.531 21.197 21.1224 22.698C20.8213 21.2969 20.0202 18.4661 18.34 16.4145C20.78 18.9706 21.267 22.0506 21.4228 23.2885ZM22.7972 23.6083C22.7982 23.5725 23.1754 11.3765 13.8671 12.5905C10.4575 13.0359 7.92645 11.655 6.458 9.66925C5.84176 8.83613 5.41242 7.89619 5.18255 6.94121C4.95441 5.98823 4.92543 5.01858 5.10922 4.12505C5.45913 2.4325 6.57804 1.00652 8.5611 0.467934C10.6635 -0.103759 12.1521 0.665893 13.0313 1.9185C13.6284 2.76972 13.9469 3.84381 13.9888 4.87389C14.0311 5.8985 13.7992 6.87704 13.2948 7.54496C12.9716 7.97298 12.5323 8.27331 11.9782 8.37539C12.5074 7.98592 12.7161 7.26747 12.4385 6.63984C12.119 5.91591 11.2729 5.58861 10.5496 5.90939C9.82629 6.23023 9.49958 7.07601 9.81877 7.79994C10.4453 9.21566 12.7029 8.78153 13.5124 7.71116C14.0564 6.99002 14.3073 5.94731 14.2613 4.86226C14.2183 3.78375 13.8821 2.65743 13.255 1.7632C12.3137 0.420833 10.7252 -0.405134 8.48741 0.203419C6.3942 0.773404 5.21053 2.27994 4.84153 4.07147C4.64921 5.00359 4.67851 6.01248 4.91654 7.0057C5.15457 7.99549 5.59963 8.96857 6.2377 9.83276C7.76038 11.8902 10.3791 13.3223 13.9022 12.8632C22.8909 11.6895 22.5247 23.5684 22.5237 23.6022L22.7972 23.6083ZM2.7415 5.31485C2.71967 6.12787 2.72513 12.5799 8.42023 14.0305C8.38715 14.1056 8.38172 14.1909 8.40934 14.2735C8.46968 14.4486 8.66031 14.5428 8.83526 14.4834C9.01122 14.4237 9.10537 14.2322 9.04499 14.0581C9.00306 13.9336 8.89496 13.8503 8.77388 13.8329C3.53574 12.6967 3.04399 7.28251 3.01364 5.68618C3.11799 5.73398 3.23803 5.74219 3.355 5.70258C3.5985 5.62001 3.72944 5.35445 3.64692 5.11041C3.56371 4.86568 3.29805 4.73461 3.05456 4.81724C2.8421 4.88956 2.71592 5.10016 2.7415 5.31485ZM19.6089 21.0216C18.3335 20.4918 12.7124 17.8829 13.3791 13.4127C13.3791 13.4127 15.5327 14.4967 16.8804 16.7033C18.0341 18.5938 18.0624 19.357 19.1932 20.5072C18.0351 19.6631 15.7778 17.7791 14.5867 15.4094C15.9282 18.6791 18.5422 20.3772 19.6089 21.0216ZM14.7104 18.9313C13.7399 18.5273 9.45934 16.5415 9.96679 13.138C9.96679 13.138 11.6068 13.9626 12.6329 15.6425C13.511 17.0821 13.5329 17.6641 14.3936 18.5392C13.5128 17.8968 11.7933 16.4627 10.8869 14.6582C11.9086 17.147 13.8981 18.4402 14.7104 18.9313ZM12.4123 18.8423C12.4123 18.8423 2.9028 18.0559 1.37364 4.99948C1.96226 13.4175 5.76023 19.2253 12.4123 18.8423ZM15.1616 20.5816C15.1616 20.5816 5.97338 23.1568 0 11.4489C3.47948 19.1348 9.0593 23.2574 15.1616 20.5816ZM18.2216 20.8041C18.2216 20.8041 9.01432 26.4132 2.16278 17.8487C6.30692 23.5919 13.8132 24.795 18.2216 20.8041Z", fill: "url(#paint0_radial)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0412 0.920805L11.718 0.43956H22.9462C24.1786 0.43956 25.2955 0.583593 26.2974 0.869266C27.299 1.15529 28.1581 1.55837 28.8732 2.07511C29.5893 2.5939 30.1449 3.22157 30.5415 3.94821C30.9377 4.6759 31.1355 5.49125 31.1355 6.39405C31.1355 7.85379 30.6236 9.08184 29.6003 10.0843C28.5765 11.0867 27.1728 11.7922 25.3893 12.1891C25.8735 12.7782 26.6667 13.7919 27.7672 15.224C28.8688 16.6507 30.2001 18.402 31.763 20.473C32.2033 21.0181 32.545 21.4481 32.7868 21.757C33.0296 22.0659 33.2547 22.2966 33.4644 22.4509C33.6731 22.6048 33.8883 22.6936 34.1082 22.7158C34.3279 22.7376 34.6256 22.7488 35 22.7488V23.4755H33.6789C32.666 23.4755 31.8633 23.4478 31.2682 23.3929C30.6738 23.338 30.151 23.195 29.6998 22.9632C29.2483 22.7321 28.8026 22.3628 28.362 21.8563C27.9228 21.3495 27.3713 20.6559 26.7111 19.7743C25.4558 18.1221 24.3607 16.6732 23.4256 15.4278C22.4899 14.1834 21.7683 13.2414 21.2622 12.6028H18.1255V13.2864C17.5542 12.9775 16.3081 12.4799 14.4601 12.6697V3.61305C14.4601 2.7096 14.2835 2.0478 13.9308 1.63004C13.5792 1.21126 13.0053 1.00135 12.2141 0.935484L12.0412 0.920805ZM21.9558 11.644H21.9886C23.5733 11.644 24.8443 11.1693 25.8023 10.2174C26.7598 9.26988 27.239 7.99716 27.239 6.4053C27.239 4.87966 26.8488 3.66254 26.0669 2.75909C25.2849 1.85019 24.2448 1.39829 22.9465 1.39829H18.059V11.6444H21.9558V11.644Z", fill: "url(#paint1_radial)" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("radialGradient", { id: "paint0_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(11.3996 11.8043) scale(11.3992 11.8036)" },
                React__default['default'].createElement("stop", { offset: "0.3856", stopColor: "#046A38" }),
                React__default['default'].createElement("stop", { offset: "0.5712", stopColor: "#046435" }),
                React__default['default'].createElement("stop", { offset: "0.8249", stopColor: "#03522C" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#034223" })),
            React__default['default'].createElement("radialGradient", { id: "paint1_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(23.3589 11.9577) scale(11.6405 11.5175)" },
                React__default['default'].createElement("stop", { offset: "0.3856", stopColor: "#046A38" }),
                React__default['default'].createElement("stop", { offset: "0.5712", stopColor: "#046435" }),
                React__default['default'].createElement("stop", { offset: "0.8249", stopColor: "#03522C" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#034223" })))));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30" }, props),
        React__default['default'].createElement("path", { d: "M24.7059 0H5.29412C2.37026 0 0 2.37026 0 5.29412V24.7059C0 27.6297 2.37026 30 5.29412 30H24.7059C27.6297 30 30 27.6297 30 24.7059V5.29412C30 2.37026 27.6297 0 24.7059 0Z", fill: "#00A478" }),
        React__default['default'].createElement("path", { d: "M17.7499 10.5005H12.2498C9.21208 10.5005 6.74988 12.9626 6.74988 16.0005C6.74988 17.7532 7.57213 19.3106 8.84908 20.318", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default['default'].createElement("path", { d: "M12.25 21.5001H17.75C20.7878 21.5001 23.25 19.038 23.25 16.0001C23.25 14.2474 22.4278 12.6901 21.1508 11.6826", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default['default'].createElement("path", { d: "M14.5416 19.2085L12.25 21.5002L14.5416 23.7919", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default['default'].createElement("path", { d: "M15.4583 12.7919L17.7499 10.5002L15.4583 8.2085", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icons$1 = IconModule;
Icons$1.MoonIcon; Icons$1.SunIcon; Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  // background-color: ", ";\n  border-top: medium none;\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  // background-color: ", ";\n  border-top: medium none;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang; _a.priceLink;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$l, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement("div", { style: { background: "rgba(133, 142, 161, 0.28)", padding: 20, borderRadius: 20 } },
            // React__default['default'].createElement("div", { style: { marginTop: 7, marginBottom: 7 } }, "Live Trading Deals"),
            // React__default['default'].createElement("div", { style: {
            //         width: "100%",
            //         height: 50,
            //         display: "flex",
            //         alignItems: "center",
            //         position: 'relative',
            //     } },
            //     React__default['default'].createElement(Icon$17, null),
            //     React__default['default'].createElement("div", { style: { display: "flex", flexDirection: "column", marginLeft: 3 } },
            //         React__default['default'].createElement("span", { style: { fontSize: 12, marginBottom: 2 } }, "Swap"),
            //         React__default['default'].createElement("span", { style: { fontSize: 12, color: "#aeaeae" } }, "03:56:40 PM")),
            //     React__default['default'].createElement("div", { style: { display: "flex", flexDirection: "column", position: "absolute", right: 0, textAlign: "right" } },
            //         React__default['default'].createElement("span", { style: { fontSize: 12, marginBottom: 2 } }, "USDT/ETH"),
            //         React__default['default'].createElement("span", { style: { fontSize: 14, color: "rgba(0, 164, 120, 1)" } }, "$2 354.27"))),
            // React__default['default'].createElement("div", { style: {
            //         width: "100%",
            //         height: 50,
            //         display: "flex",
            //         alignItems: "center",
            //         position: 'relative',
            //     } },
            //     React__default['default'].createElement(Icon$17, null),
            //     React__default['default'].createElement("div", { style: { display: "flex", flexDirection: "column", marginLeft: 3 } },
            //         React__default['default'].createElement("span", { style: { fontSize: 12, marginBottom: 2 } }, "Swap"),
            //         React__default['default'].createElement("span", { style: { fontSize: 12, color: "#aeaeae" } }, "03:56:40 PM")),
            //     React__default['default'].createElement("div", { style: { display: "flex", flexDirection: "column", position: "absolute", right: 0, textAlign: "right" } },
            //         React__default['default'].createElement("span", { style: { fontSize: 12, marginBottom: 2 } }, "USDT/WBNB"),
            //         React__default['default'].createElement("span", { style: { fontSize: 14, color: "rgba(0, 164, 120, 1)" } }, "$2 354.27"))),
            true ? (React__default['default'].createElement("div", { style: {
                    width: "100%",
                    height: 50,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                } },
                React__default['default'].createElement("div", { style: { display: "flex", alignItems: "center" } },
                    React__default['default'].createElement(LogoFooter, null),
                    React__default['default'].createElement("span", { style: { fontSize: 13, color: "#AEAEAE", marginLeft: 4 } }, "YNB Price")),
                React__default['default'].createElement(Text, { color: "primary", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  // background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: medium none;\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  // background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: medium none;\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$18,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$1b,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$19,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$1a,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1c,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1d,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "secondary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "secondary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, color:"secondary", href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account,color:"secondary" }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "danger", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "danger", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1e = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$1e, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT);
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n  background: #050505;\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n  background: #050505;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = styled.createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#be3531",
    primary: "#F5E750",
    primaryBright: "#F5E750",
    primaryDark: "#F5E750",
    secondary: "#be3531",
    success: "#00A478",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "linear-gradient(90deg, rgba(213,227,228,0.8) 1%, rgba(232,235,236,1) 100%)", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#f7f7f7", tertiary: "#EFF4F5", text: "#046A38", textDisabled: "#BDC2C4", textSubtle: "#AEAEAE", borderColor: "#E9EAEB", card: "#E7EAF2", gradients: {
        bubblegum: "transparent",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "#F5E750",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#be3531",
        backgroundHover: "#d52c27",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$c;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.CopyToClipboard = CopyToClipboard;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.GooseRoundIcon = Icon$w;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MinusIcon = Icon$s;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$t;
exports.PancakeRoundIcon = Icon$v;
exports.PancakesIcon = Icon$u;
exports.PrizeIcon = Icon$x;
exports.Progress = Progress;
exports.ProgressBunny = Icon$A;
exports.Radio = Radio;
exports.RemoveIcon = Icon$y;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$E;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$F;
exports.SyncAltIcon = Icon$G;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$C;
exports.TicketRound = Icon$D;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$z;
exports.WarningIcon = Icon$H;
exports.Won = Icon$B;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;

export const breakpoints = {
    xs: '479px',
    sm: '768px',
    md: '1023px',
    lg: '1439px',
    xs_sm: {
        minWidth: '480px',
        maxWidth: '768px'
    },
    sm_md: {
        minWidth: '769px',
        maxWidth: '1023px'
    },
    md_lg: {
        minWidth: '1024px',
        maxWidth: '1439px'
    }
};

export const colors = {
    blue: {
        dark: "#040714",
        light: "#0063E5",
        strong: "#0483EE"
    },
    white: {
        original: "#FFF",
        light: "#F9F9F9"
    },
    black: {
        original: "#000",
        opacity3: "rgba(0, 0, 0, .3)",
        opacity6: "rgba(0, 0, 0, .6)",
        opacity8: "rgba(0, 0, 0, .8)",
    },
    gray: {
        black: "#090B13",
        dark: "#969E9E",
        light: "#C6C6C6",
        opacity1: "rgba(249, 249, 249, .1)",
        opacity8: "rgba(249, 249, 249, .8)",
        lightOpacity: "rgba(191, 191, 191, .8)",
        strongOpacity: "rgba(192, 192, 192, .8)",
        strongExtraOpacity: "rgba(255, 255, 255, .2)",
    }
}
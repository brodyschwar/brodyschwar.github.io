export const lightTheme = {
    primaryColor: '#ABC4B4',
    secondaryColor: '#DECABA',
    tertiaryColor: '#EB8258',
    textColor: '#050505',
    backgroundColor: '#FCFCFC',
    primaryFont: "'Nunito', sans-serif",
};

export const darkTheme = {
    ...lightTheme,
    textColor: lightTheme.backgroundColor,
    backgroundColor: lightTheme.secondaryColor,
};

export const screenSize = {
    small: "512px",
    medium: "1024px"
}
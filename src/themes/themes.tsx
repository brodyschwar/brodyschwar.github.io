export const lightTheme = {
    primaryColor: '#739E82',
    secondaryColor: '#2C5530',
    tertiaryColor: '#EB8258',
    textColor: '#050505',
    backgroundColor: '#FCFCFC',
    primaryFont: "'Nunito Sans', sans-serif",
};

export const darkTheme = {
    ...lightTheme,
    textColor: lightTheme.backgroundColor,
    backgroundColor: lightTheme.secondaryColor,
};
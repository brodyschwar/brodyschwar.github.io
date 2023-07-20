export const lightTheme = {
    primaryColor: '#739E82',
    secondaryColor: '#3E885B',
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
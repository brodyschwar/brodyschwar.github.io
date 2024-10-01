export function hexToRgba(hex: string, alpha: number): string {
    // Remove the "#" character from the beginning of the HEX color
    const hexWithoutHash = hex.replace('#', '');
  
    // Convert the HEX color to RGB
    const red = parseInt(hexWithoutHash.substring(0, 2), 16);
    const green = parseInt(hexWithoutHash.substring(2, 4), 16);
    const blue = parseInt(hexWithoutHash.substring(4, 6), 16);
  
    // Construct the RGBA color string with the specified alpha
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
function rot13(str) {
    return str.split('').map(char => {
      const charCode = char.charCodeAt(0);
  
      if (charCode >= 65 && charCode <= 90) {
        
        const shiftedCharCode = ((charCode - 65 + 13) % 26) + 65;
        return String.fromCharCode(shiftedCharCode);
      }
  
      return char;
    }).join('');
  }
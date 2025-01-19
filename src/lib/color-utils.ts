'use client'

export function getBrightness(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

export function darkenColor(r: number, g: number, b: number, factor: number): string {
  return `rgb(${Math.floor(r * factor)}, ${Math.floor(g * factor)}, ${Math.floor(b * factor)})`;
}

export async function getAverageColor(imageUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      
      context?.drawImage(img, 0, 0);
      const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
      
      if (!imageData) {
        resolve('#000000');
        return;
      }

      let r = 0, g = 0, b = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        r += imageData.data[i];
        g += imageData.data[i + 1];
        b += imageData.data[i + 2];
      }

      const pixels = imageData.data.length / 4;
      r = Math.floor(r / pixels);
      g = Math.floor(g / pixels);
      b = Math.floor(b / pixels);

      const brightness = getBrightness(r, g, b);
      if (brightness > 0.6) {
        resolve(darkenColor(r, g, b, 0.6));
      } else {
        resolve(`rgb(${r}, ${g}, ${b})`);
      }
    };

    img.onerror = () => resolve('#000000');
  });
}

from PIL import Image
import os
img = Image.open('public/Udemy.png')
size_kb = os.path.getsize('public/Udemy.png') / 1024
print(f'{img.width}x{img.height}, {size_kb:.1f} KB, ratio: {img.width/img.height:.4f}')
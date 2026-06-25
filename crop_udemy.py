from PIL import Image
import os

img = Image.open('public/Udemy.png')
print(f'Original: {img.width}x{img.height}')

target_w = 483
target_h = 426

# Escalar manteniendo TODA la altura
scale = target_h / img.height  # 0.6406
new_w = int(img.width * scale)  # 656
new_h = target_h
print(f'Scaled: {new_w}x{new_h}')

img_scaled = img.resize((new_w, new_h), Image.LANCZOS)

total_crop = new_w - target_w  # 173
print(f'Total a recortar: {total_crop}px')

# Sesgo izquierda: minimo recorte izq, maximo der
# Contenido importante a la izquierda: titulo, "Amplia tus oportunidades", boton, 3-4 cursos
# El titulo "La seleccion..." empieza muy pegado al borde izquierdo,
# usamos left_crop=0 para no cortarlo
left_crop = 0
right_crop = total_crop  # 172
print(f'Recorte: {left_crop}px izq, {right_crop}px der')

img_final = img_scaled.crop((left_crop, 0, left_crop + target_w, target_h))
print(f'Final: {img_final.width}x{img_final.height}')

img_final.save('public/Udemy.png', optimize=True)
size_kb = os.path.getsize('public/Udemy.png') / 1024
print(f'Guardado: {size_kb:.1f} KB')

img_check = Image.open('public/Udemy.png')
print(f'Verificado: {img_check.width}x{img_check.height}')
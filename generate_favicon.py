from PIL import Image, ImageDraw, ImageFont
import os

img = Image.new('RGBA', (256, 256), (255, 255, 255, 0))
d = ImageDraw.Draw(img)

try:
    # Try more modern fonts first if available
    fonts_to_try = ["C:/Windows/Fonts/Montserrat-Bold.ttf", "C:/Windows/Fonts/segoeuib.ttf", "C:/Windows/Fonts/arialbd.ttf"]
    font = None
    for f in fonts_to_try:
        if os.path.exists(f):
            font = ImageFont.truetype(f, 130)
            break
    if font is None:
        font = ImageFont.load_default()
except:
    font = ImageFont.load_default()

text = "VP."
# Draw VP.
try:
    box = d.textbbox((20, 60), text, font=font)
except AttributeError:
    # older pillow fallback
    size = d.textsize(text, font=font)
    box = (20, 60, 20 + size[0], 60 + size[1])

d.text((20, 60), text, font=font, fill=(17, 21, 28, 255))

# Draw the blue rectangle next to the dot
rect_x1 = box[2] + 4
rect_y1 = box[3] - 25
rect_x2 = rect_x1 + 35
rect_y2 = box[3]
# Deep blue color
d.rectangle([rect_x1, rect_y1, rect_x2, rect_y2], fill=(37, 99, 235, 255))

# Crop to tight bounding box and resize it nicely to center?
# The image is 256x256, let's leave some margin. 
# actually it's fine.
save_path = r'd:\vansh-pandey-dev-space\public\favicon.ico'
img.save(save_path, format='ICO', sizes=[(256, 256), (64, 64), (32, 32), (16, 16)])

print("Successfully created favicon.ico")

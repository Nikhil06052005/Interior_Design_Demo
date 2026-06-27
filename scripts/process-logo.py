from PIL import Image
import os

src = r"C:\Users\lakha\.cursor\projects\c-Users-lakha-OneDrive-Desktop-StreetDevs-Interior-Designer\assets\c__Users_lakha_AppData_Roaming_Cursor_User_workspaceStorage_a7a6dbb68be871ee4bdca60219470031_images_logo-21e6fe4d-de8a-48d5-b5e5-ff34c282f91a.png"
brand_dir = r"c:\Users\lakha\OneDrive\Desktop\StreetDevs\Interior Designer\mankuu-site\public\images\brand"
app_dir = r"c:\Users\lakha\OneDrive\Desktop\StreetDevs\Interior Designer\mankuu-site\src\app"
os.makedirs(brand_dir, exist_ok=True)


def remove_white_bg(img, threshold=235):
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                pixels[x, y] = (255, 255, 255, 0)
            else:
                pixels[x, y] = (r, g, b, 255)
    return img


def trim_transparent(img, padding=16):
    bbox = img.getbbox()
    if not bbox:
        return img
    left = max(0, bbox[0] - padding)
    top = max(0, bbox[1] - padding)
    right = min(img.width, bbox[2] + padding)
    bottom = min(img.height, bbox[3] + padding)
    return img.crop((left, top, right, bottom))


img = Image.open(src)
print("Original size:", img.size, img.mode)
img = remove_white_bg(img)
img = trim_transparent(img, padding=20)

max_w = 480
if img.width > max_w:
    ratio = max_w / img.width
    img = img.resize((max_w, int(img.height * ratio)), Image.Resampling.LANCZOS)

logo_path = os.path.join(brand_dir, "logo.png")
img.save(logo_path, "PNG")
print("Saved logo:", logo_path, img.size)

w, h = img.size
icon_crop = img.crop((int(w * 0.08), 0, int(w * 0.92), int(h * 0.42)))
icon_crop = trim_transparent(icon_crop, padding=12)

icon_size = 512
side = max(icon_crop.width, icon_crop.height)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
ox = (side - icon_crop.width) // 2
oy = (side - icon_crop.height) // 2
square.paste(icon_crop, (ox, oy), icon_crop)
icon_final = square.resize((icon_size, icon_size), Image.Resampling.LANCZOS)

icon_png = os.path.join(app_dir, "icon.png")
icon_final.save(icon_png, "PNG")
print("Saved favicon:", icon_png)

icon_brand = os.path.join(brand_dir, "logo-icon.png")
icon_final.resize((128, 128), Image.Resampling.LANCZOS).save(icon_brand, "PNG")
print("Saved logo-icon:", icon_brand)

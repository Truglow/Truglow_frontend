from PIL import Image
import os

# Base directory
public_dir = r"c:\Users\Balu4\Downloads\truglow-hair-clinic\public"

# Images that need 90-degree clockwise rotation (portrait to landscape)
# These are currently in portrait orientation but need to be landscape
images_to_rotate_cw = [
    "clinic-treatment-room.png",  # Treatment procedure photo
    "clinic-equipment.png",        # Equipment photo
]

# Images that might need 90-degree counter-clockwise rotation
images_to_rotate_ccw = [
    # Add any images that need counter-clockwise rotation here
]

print("Starting image rotation...")
print(f"Working directory: {public_dir}\n")

rotated_count = 0
error_count = 0

# Rotate clockwise (90 degrees)
if images_to_rotate_cw:
    print("Rotating images clockwise (90°):")
    for img_name in images_to_rotate_cw:
        img_path = os.path.join(public_dir, img_name)
        if os.path.exists(img_path):
            try:
                img = Image.open(img_path)
                original_size = img.size
                # Rotate 90 degrees clockwise (which is -90 or 270 in PIL)
                rotated = img.rotate(-90, expand=True)
                rotated.save(img_path)
                new_size = rotated.size
                print(f"  ✓ {img_name}: {original_size} → {new_size}")
                rotated_count += 1
            except Exception as e:
                print(f"  ✗ Error rotating {img_name}: {e}")
                error_count += 1
        else:
            print(f"  ✗ File not found: {img_name}")
            error_count += 1

# Rotate counter-clockwise (90 degrees)
if images_to_rotate_ccw:
    print("\nRotating images counter-clockwise (90°):")
    for img_name in images_to_rotate_ccw:
        img_path = os.path.join(public_dir, img_name)
        if os.path.exists(img_path):
            try:
                img = Image.open(img_path)
                original_size = img.size
                # Rotate 90 degrees counter-clockwise
                rotated = img.rotate(90, expand=True)
                rotated.save(img_path)
                new_size = rotated.size
                print(f"  ✓ {img_name}: {original_size} → {new_size}")
                rotated_count += 1
            except Exception as e:
                print(f"  ✗ Error rotating {img_name}: {e}")
                error_count += 1
        else:
            print(f"  ✗ File not found: {img_name}")
            error_count += 1

print(f"\n{'='*50}")
print(f"Rotation complete!")
print(f"Successfully rotated: {rotated_count} images")
if error_count > 0:
    print(f"Errors: {error_count}")
print(f"{'='*50}")


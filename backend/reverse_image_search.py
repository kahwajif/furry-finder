"""
This script identifies the breed of cat or dog based on an image
"""
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.applications.resnet50 import ResNet50
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
import numpy as np
import os

from breed_lists import dog_breeds
from breed_lists import cat_breeds
# Load the ResNet50 model
model = ResNet50(weights='imagenet')

# Read in the image file
script_dir = os.path.dirname(__file__)
img_path = os.path.join(script_dir, 'cat_dir/bengal.jpg')

# Check if image file exists
if not os.path.exists(img_path):
    print("Image file not found or path is not correct")
else:
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocess the image for the model
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)

    # Make predictions
    preds = model.predict(x)

    # Decode the predictions
    top_k = 3
    results = decode_predictions(preds, top=top_k)[0]

    #the model sometimes returns class labels with one word when the breed is multiple words. We check if the one word breed is available here
    def check_substring_in_array(substring, strings):
        for string in strings:
            if substring in string:
                return True
        return False
    
    #lowercase all breeds
    cat_breeds = [string.lower() for string in cat_breeds]
    dog_breeds = [string.lower() for string in dog_breeds]
    # Extract the class labels and check if cat or dog
    for result in results:
        class_label, prob = result[1], result[2]

        #must be lower case and remove underscore
        class_label = class_label.lower()
        class_label = class_label.replace("_", " ")

        if class_label in cat_breeds:
            print(f'Cat found with breed {class_label}. Probability: {prob:.2f}')
        elif class_label in dog_breeds:
            print(f'Dog found with breed {class_label}. Probability: {prob:.2f}')
        else:

            cat_found = check_substring_in_array(class_label, cat_breeds)
            dog_found = check_substring_in_array(class_label, dog_breeds)
            if cat_found:
                print(f'Cat found with breed {class_label}. Probability: {prob:.2f}')
            elif dog_found:
                print(f'Dog found with breed {class_label}. Probability: {prob:.2f}')
            else:
                print(f'Not found. Class: {class_label}. Probability: {prob:.2f}')

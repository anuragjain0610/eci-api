#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import cv2
import numpy as np
# Cascade item name
CASCADE_ITEM = 'GUN'

# Load image file
image = cv2.imread('../temp/image.png')

# Convert the image to gray
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)	
# Load your cascade file
cascade = cv2.CascadeClassifier('cascade.xml')

# Detect cascade items and put rectangles around them
rectangles = cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=10,
minSize=(75, 75))

for (i, (x, y, w, h)) in enumerate(rectangles):
	# Surround cascade with rectangle
	cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)
	cv2.putText(image, CASCADE_ITEM + " #{}".format(i + 1), (x, y - 10),
		cv2.FONT_HERSHEY_SIMPLEX, 0.55, (0, 0, 255), 2)

# Display the cascade to the user
cv2.imwrite('proc.jpg',image)
cv2.imshow(CASCADE_ITEM + "s", image)
cv2.waitKey(0)

# For more:
# http://docs.opencv.org/2.4/doc/tutorials/objdetect/cascade_classifier/cascade_classifier.html
# http://www.bogotobogo.com/python/OpenCV_Python/python_opencv3_Image_Object_Detection_Face_Detection_Haar_Cascade_Classifiers.php
# https://stackoverflow.com/questions/30857908/face-detection-using-cascade-classifier-in-opencv-python






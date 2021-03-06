# -*- coding: utf-8 -*-
"""conv builder

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1yaOl4pWcexHUxcDa5WoxLhQTkjNwm8mM
"""

import numpy as np
# the size is the size of the image, assign the value you need it to be for your case
#size = np.random.randint(10, 100)
size = 100
# the class_num is number of classes, assign the value you need it to be for your case
#class_num = np.random.randint(size // 5, size // 3)
class_num = 5
list = [int(x) for x in bin(size)[2:]]
conv_num = 1
pool_num = 1
fc_num = 1
n = 3
input = 3
print('image size %dx%d, number of classes %d' % (size, size, class_num))
while (len(list) > 3):
  print('current size of the tensor %dx%d, %d channels' % (size,size, input))
  print('conv layer %d: kernel 3x3, padding 0, stride 1, input channels %d, output channels %d' % (conv_num, input, 2 ** n))
  conv_num += 1
  size -= 2
  input = 2 ** n
  n += 1
  print('current size of the tensor %dx%d, %d channels' % (size,size, input))
  print('pooling layer %d: kernel 2x2, padding %d, stride 2, input channels %d, output channels %d' % (pool_num, list[-1], input, input))
  pool_num += 1
  size = (size + list[-1]) // 2
  list = [int(x) for x in bin(size)[2:]]
print('current size of the tensor %dx%d, %d channels' % (size,size, input))
print('conv layer %d: kernel %dx%d, padding 0, stride 1, input channels %d, output channels %d' % (conv_num, size, size, input, input * 4))
input = input * 4
print('current size of the tensor 1x1, %d channels' % (input))
print('converting to pass to a series of fully connected layers')
while (input > (class_num * 4)):
  print('current size of the tensor 1x%d' % (input))
  print('fully connected layer %d: input size %d, output size %d' % (fc_num, input, input // 4))
  fc_num += 1
  input = input // 4
print('current size of the tensor 1x%d' % (input))
print('fully connected layer %d: input size %d, output size %d' % (fc_num, input, class_num))
print('current size of the tensor 1x%d' % (class_num))
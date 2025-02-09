from PIL import Image

for i in range(1,6):
    # My image is a 200x374 jpeg that is 102kb large
    foo = Image.open(
        'D:\github\maa-the-foundation-org\src\\assets\events\original\\event{}.jpeg'.format(str(i)))

    # downsize the image with an ANTIALIAS filter (gives the highest quality)
    foo = foo.resize((160, 300), Image.ANTIALIAS)

    # The saved downsized image size is 24.8kb

    foo.save('D:\github\maa-the-foundation-org\src\\assets\events\\img{}.jpg'.format(str(i)), optimize=True,
             quality=35)  # The saved downsized image size is 22.9kb

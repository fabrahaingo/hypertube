import piexif from 'piexifjs';

function rotateCounterClockwise() {
  const { image } = this.state;
  let { orientation } = image;
  if (orientation === 1) {
    orientation = 8;
  } else if (orientation === 8) {
    orientation = 3;
  } else if (orientation === 3) {
    orientation = 6;
  } else if (orientation === 6) {
    orientation = 1;
  } else if (orientation === 2) {
    orientation = 5;
  } else if (orientation === 5) {
    orientation = 4;
  } else if (orientation === 4) {
    orientation = 7;
  } else if (orientation === 7) {
    orientation = 2;
  }
  image.orientation = orientation;
  this.setState({ image }, () => this.handleImageAdd(image.inputFile));
}

function rotateClockwise() {
  const { image } = this.state;
  let { orientation } = image;
  if (orientation === 8) {
    orientation = 1;
  } else if (orientation === 1) {
    orientation = 6;
  } else if (orientation === 6) {
    orientation = 3;
  } else if (orientation === 3) {
    orientation = 8;
  } else if (orientation === 2) {
    orientation = 7;
  } else if (orientation === 7) {
    orientation = 4;
  } else if (orientation === 4) {
    orientation = 5;
  } else if (orientation === 5) {
    orientation = 2;
  }
  image.orientation = orientation;
  this.setState({ image }, () => this.handleImageAdd(image.inputFile));
}

function flip() {
  const { image } = this.state;
  let { orientation } = image;
  if (orientation === 1) {
    orientation = 2;
  } else if (orientation === 2) {
    orientation = 1;
  } else if (orientation === 8) {
    orientation = 7;
  } else if (orientation === 7) {
    orientation = 8;
  } else if (orientation === 6) {
    orientation = 5;
  } else if (orientation === 5) {
    orientation = 6;
  } else if (orientation === 3) {
    orientation = 4;
  } else if (orientation === 4) {
    orientation = 3;
  }
  image.orientation = orientation;
  this.setState({ image }, () => this.handleImageAdd(image.inputFile));
}

function handleImageAdd(rawImage) {
  const reader = new FileReader();
  const { image } = this.state;
  image.inputFile = rawImage;
  this.setState({ image });
  let { orientation } = image;
  const { verticalOffset } = image;
  if (!rawImage) {
    return;
  }
  let exif;
  if (rawImage.type.match(/image\/(?:jpg|jpeg|png|gif)/)) {
    reader.onload = (e) => {
      if (rawImage.type.match(/image\/(?:jpg|jpeg)/)) {
        exif = piexif.load(e.target.result);
      } else {
        orientation = orientation !== 0 ? orientation : 1;
      }
      const img = new Image();
      img.onload = () => {
        const scaleWidth = 310 / img.width;
        const scaleHeight = 310 / img.height;

        const scale = Math.max(scaleWidth, scaleHeight);

        img.width *= scale; // 608
        img.height *= scale; // 550
        orientation = orientation || exif['0th'][piexif.ImageIFD.Orientation];
        image.orientation = orientation;
        image.isLandscape = img.width >= img.height;
        this.setState({ image });
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        let x = 0;
        let y = 0;
        ctx.save();
        if (orientation === 2) {
          x = -canvas.width;
          ctx.scale(-1, 1);
        } else if (orientation === 3) {
          x = -canvas.width;
          y = -canvas.height;
          ctx.scale(-1, -1);
        } else if (orientation === 3) {
          x = -canvas.width;
          y = -canvas.height;
          ctx.scale(-1, -1);
        } else if (orientation === 4) {
          y = -canvas.height;
          ctx.scale(1, -1);
        } else if (orientation === 5) {
          canvas.width = img.height;
          canvas.height = img.width;
          ctx.translate(canvas.width, canvas.height / canvas.width);
          ctx.rotate(Math.PI / 2);
          y = -canvas.width;
          ctx.scale(1, -1);
        } else if (orientation === 6) {
          canvas.width = img.height;
          canvas.height = img.width;
          ctx.translate(canvas.width, canvas.height / canvas.width);
          ctx.rotate(Math.PI / 2);
        } else if (orientation === 7) {
          canvas.width = img.height;
          canvas.height = img.width;
          ctx.translate(canvas.width, canvas.height / canvas.width);
          ctx.rotate(Math.PI / 2);
          x = -canvas.height;
          ctx.scale(-1, 1);
        } else if (orientation === 8) {
          canvas.width = img.height;
          canvas.height = img.width;
          ctx.translate(canvas.width, canvas.height / canvas.width);
          ctx.rotate(Math.PI / 2);
          x = -canvas.height;
          y = -canvas.width;
          ctx.scale(-1, -1);
        }
        let imageYoffset = verticalOffset;
        let imageXoffset = verticalOffset;
        if (img.width > img.height) {
          imageYoffset = 0;
          if (orientation <= 4) {
            imageXoffset = 0;
          }
        } else {
          imageXoffset = 0;
          if (orientation > 4) {
            imageYoffset = 0;
          }
        }
        ctx.drawImage(img, x + imageXoffset, y + imageYoffset, img.width, img.height);
        ctx.restore();

        const dataURL = canvas.toDataURL('image/jpeg', 1.0);
        image.rawData = dataURL;
        image.verticalOffset = verticalOffset;
        this.setState({ image });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(rawImage);
  }
}
function offsetY(amount) {
  const { image } = this.state;
  image.verticalOffset += amount;
  this.setState({ image }, () => this.handleImageAdd(image.inputFile));
}
export {
  rotateClockwise,
  rotateCounterClockwise,
  flip,
  handleImageAdd,
  offsetY,
};
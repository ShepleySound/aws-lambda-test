# AWS Lambda / S3 Test

Testing out the process of creating a function in AWS Lambda that interacts with AWS S3. When an image is uploaded to the `images/` folder in the S3 bucket, it grabs a file in that same bucket called `images.json` that contains a single array of objects. It then parses the buffer and either pushes information about the uploaded file to the array, or updates the corresponding object if a file with the same filename already exists.

## Links

[Function Source Code](/lambda.js)

[`images.json` - Hosted in S3 bucket](https://demo-images0927.s3.us-west-2.amazonaws.com/images.json)


## Sample output

The following is a sample of the `images.json` file that lives on the "root" of the S3 bucket.

```json
[
  {
    "name": "images/thomas-de-luze-NAZI4uks8uw-unsplash.jpg",
    "metadata": {
      "path": "images/thomas-de-luze-NAZI4uks8uw-unsplash.jpg",
      "type": "image/jpeg",
      "size": 480970
    }
  },
  {
    "name": "images/stefan-cosma-w6XVB8Xy-gE-unsplash.jpg",
    "metadata": {
      "path": "images/stefan-cosma-w6XVB8Xy-gE-unsplash.jpg",
      "type": "image/jpeg",
      "size": 2662449
    }
  },
  {
    "name": "images/luke-white-j_hoIzD3_Ns-unsplash.jpg",
    "metadata": {
      "path": "images/luke-white-j_hoIzD3_Ns-unsplash.jpg",
      "type": "image/jpeg",
      "size": 5453808
    }
  },
  {
    "name": "images/daniele-franchi-1TT8ckTEUWQ-unsplash.jpg",
    "metadata": {
      "path": "images/daniele-franchi-1TT8ckTEUWQ-unsplash.jpg",
      "type": "image/jpeg",
      "size": 1426316
    }
  },
  {
    "name": "images/jeppe-monster-_j95TVqh9lg-unsplash.jpg",
    "metadata": {
      "path": "images/jeppe-monster-_j95TVqh9lg-unsplash.jpg",
      "type": "image/jpeg",
      "size": 3895775
    }
  },
  {
    "name": "images/simon-barber-ROVOapUxDsA-unsplash.jpg",
    "metadata": {
      "path": "images/simon-barber-ROVOapUxDsA-unsplash.jpg",
      "type": "image/jpeg",
      "size": 7022717
    }
  },
  {
    "name": "images/zach-miller-SKKEHtvTZLQ-unsplash.jpg",
    "metadata": {
      "path": "images/zach-miller-SKKEHtvTZLQ-unsplash.jpg",
      "type": "image/jpeg",
      "size": 1253987
    }
  }
]
```

## Helpful Resources

[AWS Tutorial: Using an Amazon S3 trigger to invoke a Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html)

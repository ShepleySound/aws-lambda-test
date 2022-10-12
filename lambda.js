const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key);

    let uploadedImage;
    try {
        const uploadParams = {
            Bucket: bucket,
            Key: key
        };
        uploadedImage = await s3.getObject(uploadParams).promise();
        console.log(uploadedImage.ContentType)
    } catch (error) {
        console.log(error);
        return;
    }
    
    let dictionaryParsed;
    try {
        const dictParams = {
            Bucket: bucket,
            Key: 'images.json'
        };
        const dictionaryResponse = await s3.getObject(dictParams).promise();
        const dictionaryJSON = dictionaryResponse.Body.toString();
        dictionaryParsed = JSON.parse(dictionaryJSON);
    } catch (error) {
        console.log(error);
        return;
    }
    
    const imgEntry = {
            name: key,
            metadata: {
                path: key,
                type: uploadedImage.ContentType,
                size: uploadedImage.ContentLength
            }
        }
    
    const foundIndex = dictionaryParsed.findIndex(img => {
        if (img.name === key) {
            return true
        }
    })
    
    if (foundIndex === -1) {
        dictionaryParsed.push(imgEntry)
    } else {
        dictionaryParsed[foundIndex] = imgEntry
    }
    
    try {
        const destinationParams = {
          Bucket: bucket,
          Key: 'images.json',
          Body: Buffer.from(JSON.stringify(dictionaryParsed)),
        };
        
        const putResult = await s3.putObject(destinationParams).promise();
    } catch(error) {
        console.log(error);
        return;
    }
    
    console.log(`Successfully added ${key} to dictionary at ${bucket}/images.json`)
    
};
import AWS from "aws-sdk";
import path from "path";
import fs from "fs";
import { awsS3BucketName, awsS3BucketPath, awsS3DefaultAccessRights } from "../../config";

class FileService {
  static async storeBlob(file, options = {}) {
    const svc = new FileService(options);
    return svc.storeBlob(file);
  }

  constructor(options = {}) {
    this.client = new AWS.S3();
    this.bucketName = options.bucketName || awsS3BucketName;
    this.bucketPath = options.bucketPath || awsS3BucketPath;
    this.accessRights = options.accessRights || awsS3DefaultAccessRights;
  }

  async storeBlob(file) {
    const fileStream = fs.createReadStream(file);

    fileStream.on("error", function (err) {
      console.log("File Error", err);
    });

    const key = `${this.bucketPath}/${path.basename(file)}`;

    const uploadParams = {
      Bucket: this.bucketName,
      Key: key,
      Body: fileStream,
      ACL: "public-read",
    };

    try {
      const res = await this.client.upload(uploadParams).promise();
      return res ? res.Location : null;
    } catch (err) {
      // TODO: log error
      console.log(err);
      return null;
    }
  }
}

export default FileService;

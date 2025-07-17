// upload.ts
type FileData = {
  name: string;
  size: number; // in bytes
  type: string;
};

class Uploader {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  upload(file: FileData): Promise<string> {
    console.log(`Preparing to upload: ${file.name} (${file.size} bytes)`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (file.size < 5000000) {
          console.log(`Uploading to ${this.endpoint}...`);
          resolve(`✅ Uploaded ${file.name} successfully.`);
        } else {
          reject(`❌ File ${file.name} is too large.`);
        }
      }, 1000);
    });
  }
}

// Fake usage
const dummyFile: FileData = {
  name: "profile-pic.png",
  size: 243812,
  type: "image/png",
};

const uploader = new Uploader("https://api.fakeupload.com/upload");

uploader
  .upload(dummyFile)
  .then((message) => console.log(message))
  .catch((err) => console.error(err));

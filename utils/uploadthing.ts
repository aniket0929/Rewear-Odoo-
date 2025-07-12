import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";


import { OurFileRouter, ourFileRouter } from "@/app/pages/api/uploadthing/core";

ourFileRouter

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

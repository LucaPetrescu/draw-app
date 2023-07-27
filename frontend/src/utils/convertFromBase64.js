import { saveAs } from "file-saver";

export default function convertFromBase64(base64Data, fileName) {
  let arr = base64Data.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let uint8Array = new Uint8Array(n);
  while (n--) {
    uint8Array[n] = bstr.charCodeAt(n);
  }
  let file = new File([uint8Array], fileName, { type: mime });
  saveAs(file, fileName);
}

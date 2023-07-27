export default function dowloadImage(blob, fileName) {
  const imageUrl = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = imageUrl;

  downloadLink.download = fileName;

  downloadLink.click();

  URL.revokeObjectURL(imageUrl);
}

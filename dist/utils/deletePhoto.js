import fs from 'fs';
export default function (filename) {
    fs.unlink(`uploads/${filename}`, (err) => {
        if (err) {
            console.error("Error ao deletar a imagem");
            return;
        }
    });
}
//# sourceMappingURL=deletePhoto.js.map
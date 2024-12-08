import { ExperienceList } from "../components/ExperienceList"


export const Career = () => {
  const cv = "https://portfolio-images-reinaldo.s3.sa-east-1.amazonaws.com/CV_REINALDO_BUSTAMANTE_2024.docx.pdf"

  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener el archivo');
      }

      const blob = await response.blob();
      const fileURL = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = fileURL;
      link.download = "CV_REINALDO_BUSTAMANTE.pdf";
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <div className="page-career">
      <h1>Experiencia</h1>
      <button className="btn btn-primary" onClick={() => handleDownload(cv)}>Descargar CV</button>
      <ExperienceList />
    </div>
  )
}
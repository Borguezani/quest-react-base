import "./App.css";
import AlertButton from "./components/AlertButton/button";
import TextDecoration from "./components/TextDecoration/textDecoration";
function App() {
  return (
    <div className="container">
      <TextDecoration
        texto="Esse daqui é um parágrafo contendo um texto colorido."
        textColor="red"
        bgColor="#F4A460"
      ></TextDecoration>
      <TextDecoration
        texto="Esse daqui é um parágrafo contendo um texto colorido."
        textColor="#000080"
        bgColor="#00CED1"
      ></TextDecoration>
      <TextDecoration></TextDecoration>
      <AlertButton label="Baixar Jogos"></AlertButton>
      <AlertButton label="Baixar Vídeos"></AlertButton>
      <AlertButton label="Baixar Músicas"></AlertButton>
    </div>
  );
}
export default App;

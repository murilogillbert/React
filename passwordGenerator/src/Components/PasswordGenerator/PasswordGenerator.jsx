import { useState } from "react";
import styles from "./PasswordGenerator.module.css";
import Input from "../Input/Input";
const passwordCharacters = [
    // Letras maiúsculas (A-Z)
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

    // Letras minúsculas (a-z)
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

    // Dígitos (0-9)
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',

    // Símbolos especiais
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
];

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [passwordSize, setPasswordSize] = useState(14);
    const [copyText, setCopyText] = useState("Copy");
    const [showInput, setShowInput] = useState(false);

    function generate() {
        let newPassword = "";
        for (let index = 0; index < passwordSize; index++) {
            const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
            newPassword += passwordCharacters[randomIndex];
        }
        setPassword(newPassword);
        setCopyText("Copy");
    }

    function handlePasswordSizeChange(event) {
        setPasswordSize(Number(event.target.value));
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(password).then(() => {
            setCopyText("Copied");
        });
    }

    return (
        <div className={styles.container}>
            <h1>Gerador de senhas</h1>
            <label htmlFor="showInput"> Customizar tamanho da Senha</label>
            <input type={"checkbox"} value={showInput} onChange={()=>setShowInput(!showInput)}>
            </input>
        {showInput ? (
                <Input passwordSize={passwordSize} handlePasswordSizeChange={handlePasswordSizeChange}/>
        ) : null}
            <div>
                <label htmlFor="passwordSize">Tamanho: {passwordSize}</label>
            </div>
            <div>
                <button onClick={generate}>Gerar Senha de tamanho {passwordSize}!</button>
                <button onClick={copyToClipboard}>{copyText}</button>
            </div>
            <div>Sua senha segura: {password}</div>
        </div>
    );
}

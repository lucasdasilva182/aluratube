import React from "react";
import { StyledRegisterVideo } from "./styles";
import { videoService } from "../../services/videoService";

//Custom Hook
function useForm() {
    const [values, setValues] = React.useState({ titulo: "", playlist: "", url: "", thumb: "" })
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo(){
    const service = videoService();
    const formCadastro = useForm();
    const [formVisivel, setFormVisivel] = React.useState(false);
    let urlThumb = '';

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            {formVisivel && ( //&& equivale ao operador ternário
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const dataVideo = {
                        titulo: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        playlist: formCadastro.values.playlist,
                        thumb: formCadastro.values.thumb
                    }

                    service.setVideos(dataVideo)
                    .then((response) =>{
                    }).catch((err) => {
                        console.log(err);
                    });

                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => {
                            setFormVisivel(false);
                            formCadastro.clearForm();
                        }}>X</button>
                        <input 
                            type="text" 
                            name="titulo"
                            placeholder="Titulo do Vídeo" 
                            value={formCadastro.values.titulo} 
                            onChange={formCadastro.handleChange}
                        />
                        <select name="playlist" value={formCadastro.values.playlist} onChange={formCadastro.handleChange}>
                            <option value=''>Selecione uma playlist</option>
                            <option value='jogos'>Jogos</option>
                            <option value='front-end'>Front-End</option>
                            <option value='back-end'>Back-end</option>
                        </select>
                        <input 
                            type="text" 
                            name="url"
                            placeholder="URL"  
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />
                        {formCadastro.values.url && (
                            urlThumb = formCadastro.values.url.replace('https://www.youtube.com/watch?v=', ''),
                            formCadastro.values.thumb = `https://img.youtube.com/vi/${urlThumb}/hqdefault.jpg`,
                            <img src={formCadastro.values.thumb} alt="" />
                        )}
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}
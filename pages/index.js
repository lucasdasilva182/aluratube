import React, { useEffect, useState } from "react";
import config from "../config.json"
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";
import { videoService } from "../src/services/videoService";
import RegisterVideo from "../src/components/RegisterVideo";
import { StyledModal } from "../src/components/RegisterVideo/styles";


const service = videoService();
function HomePage() {
    const [playlists, setPlaylists] = useState({});
    const [valorDoFiltro, setValorDoFiltro] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        service.getAllVideos()
            .then((dados) => {
                const novasPlaylists = { ...playlists }
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = []
                    novasPlaylists[video.playlist].unshift(video)
                })
                setPlaylists(novasPlaylists);
            });

    }, [refresh]);

    return (
        <>
            <div >
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists} clearArray={setPlaylists} refresh={setRefresh} />
                <Favoritos favoritos={config.favoritos} />
                <RegisterVideo refresh={setRefresh} clearArray={setPlaylists} />
            </div>
        </>
    )
}
export default HomePage

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    .banner{
        margin-top: 56px;
        width: 100%;
        height: 230px;
        background: url(${config.bannerBG});
        background-position: center center;
    } 
    .imgPerfil{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
function Header() {
    return (
        <StyledHeader>
            <div className="banner"></div>
            <section className="user-info">
                <img className="imgPerfil" src={`http://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ searchValue, ...props }) {
    const playlistName = Object.keys(props.playlists);
    const [formVisivel, setFormVisivel] = useState(false);
    const [idVideoToDelete, setIdVideoToDelete] = useState(0);

    let count = 0;

    //Statement - Não usado no React
    //Retorno por Expressão
    function deleteVideo(videoID) {
        service.deleteVideoDB(String(videoID))
            .then(() => {
                props.clearArray({});
                props.refresh(() => {
                    count++
                });
                setFormVisivel(false);
            });
    }
    return (
        <>
            <StyledTimeline>
                {playlistName.map((playlistName) => {
                    const videos = props.playlists[playlistName];
                    return (
                        <section key={playlistName}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.filter((video) => {
                                    const titleNormalized = video.titulo.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized);
                                }).map((video) => {
                                    return (
                                        <p className="eachVideo">
                                            <a key={video.id} href={video.url}>
                                                <img src={video.thumb} />
                                                <span>{video.titulo}</span>
                                            </a>
                                            <button onClick={() => { setFormVisivel(true), setIdVideoToDelete(video.id) }}><span>-</span></button>
                                        </p>
                                    )

                                })}
                            </div>
                        </section>
                    )
                })}
            </StyledTimeline>
            {formVisivel && (
                <StyledModal >
                    <div className="modal-base">
                        <div className="modal-confirmation">
                            <button type="button" className="close-modal" onClick={() => {
                                setFormVisivel(false);
                            }}>X</button>
                            <p>Deseja realmente escluir este vídeo?</p>
                            <div className="buttons-content">
                                <button type="text" className="btn btn-cancelar" onClick={() => setFormVisivel(false)}>Cancelar</button>
                                <button type="text" className="btn" onClick={() => deleteVideo(idVideoToDelete)}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </StyledModal>
            )}
        </>
    )
}

function Favoritos(props) {
    const canaisFavoritos = Object.keys(props.favoritos)
    return (
        <StyledFavoritos>
            {canaisFavoritos.map((canaisFavoritos) => {
                const canais = props.favoritos[canaisFavoritos];
                return (
                    <section key={canaisFavoritos}>
                        <h2>{canaisFavoritos}</h2>
                        <div>
                            {canais.map((canais) => {
                                return (
                                    <a key={canais.url} href={canais.url} target="_blank">
                                        <img src={canais.imgPerfil} />
                                        <span>{canais.username}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledFavoritos>
    )
}

<RegisterVideo />
import { Routes } from '@angular/router';
import { ListaDeMusicasComponent } from './pages/lista-de-musicas/lista-de-musicas.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { AlbunsComponent } from './pages/albuns/albuns.component';
import { AlbumComponent } from './pages/album/album.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { CriarplaylistComponent } from './pages/criarplaylist/criarplaylist.component';
import { CriarAlbumComponent } from './pages/criar-album/criar-album.component';
import { CriarMusicaComponent } from './pages/criar-musica/criar-musica.component';

export const routes: Routes = [  
    {
        path: "",
        component: ListaDeMusicasComponent
    },
    {
        path: "musica/:id",
        component: MusicaComponent
    },
    {
        path: "albuns",
        component: AlbunsComponent
    },
    {
        path: "album/:id",
        component: AlbumComponent
    },
    {
        path: "playlists",
        component: PlaylistsComponent
    },
    {
        path: "playlist/:id",
        component: PlaylistComponent
    },
    {
        path: "playlists/criar",
        component: CriarplaylistComponent
    },
    {
        path: "albuns/criar",
        component: CriarAlbumComponent
    },
    {
        path: "musicas/criar",
        component: CriarMusicaComponent
    }
];

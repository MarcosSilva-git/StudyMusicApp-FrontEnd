import { Component, OnInit } from '@angular/core';
import { InitialValueMusicaDTO, MusicaDTO } from 'src/shared/DTOs/musicaDTO';

@Component({
  selector: 'app-cadastrar-musica',
  templateUrl: './cadastrar-musica.component.html',
  styleUrls: ['./cadastrar-musica.component.css'],
})
export class CadastrarMusicaComponent implements OnInit {

  NovaMusica: MusicaDTO = InitialValueMusicaDTO

  constructor() { }

  ngOnInit(): void {
  }

}

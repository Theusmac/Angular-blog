import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  photoCover:string = ""
  conteudoTitle:string = ""
  conteudoDescription:string = ""
  conteudoDescription2:string | undefined = ""
  conteudoDescription3:string | undefined = ""
  conteudoDescription4:string | undefined = ""
  conteudoDescription5:string | undefined = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.conteudoTitle = result.title
    this.conteudoDescription = result.description
    this.conteudoDescription2 = result.description2
    this.conteudoDescription3 = result.description3
    this.conteudoDescription4 = result.description4
    this.conteudoDescription5 = result.description5
    this.photoCover = result.photoCover
  }

}

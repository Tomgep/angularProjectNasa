import { Component, HostListener, OnInit } from '@angular/core';
import { ConfigServiceFinalSpace, ConfigServiceFinalSpaceCharacter } from '../services/config.service';



@Component({
  selector: 'app-final-space',
  template: `
<section class="row">
  <div class="col-5">
    <table class="table table-borderless mt-5" style="border-radius: 15px ;">
      <tbody >
        <tr class="row justify-content-center text-center">
            <td *ngFor="let list of lists" Class="col-5 mb-4 mt-4" >
                <div >
                    <img src="{{quote[list].image}}" class="rounded " alt="">
                </div>
                <div class=" text-center ">
                      <h2 class="text-light" style="font-style: italic;">"{{quote[list].quote}}"</h2>
                      <h3><figcaption class="blockquote-footer text-light mt-2">
                          By {{quote[list].by}}
                      </figcaption></h3>
                </div>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-6">
    <table class="table table-light table-sm mt-5 me-4 ">
      <tbody>
        <tr class="row justify-content-center text-center">
        <td class="text-dark col-6 mb-4 mt-3" *ngFor="let perso of persos">
              <dl class="row mt-2 mb-4">
                <dt class="col-5"><h3>Name: </h3></dt>
                <dd class="col-5"><h4 style="font-style: italic ;">{{description[perso].name}}, alias {{description[perso].alias[0]}}</h4></dd>
              </dl>
              <dl class="row mt-4 mb-4">
                <dt class="col-5"><h3>Status: </h3></dt>
                <dd class="col-5"><h4 style="font-style: italic ;">{{description[perso].status}}</h4></dd>
              </dl>
              <dl class="row mt-4 mb-4">
                <dt class="col-5"><h3>Species: </h3></dt>
                <dd class="col-5"><h4 style="font-style: italic ;">{{description[perso].species}}</h4></dd>
              </dl>
              <dl class="row mt-4 mb-5">
                <dt class="col-5 text-truncate"><h3>Origin: </h3></dt>
                <dd class="col-5"><h4 style="font-style: italic ;">{{description[perso].origin}}</h4></dd>
              </dl>
              <dl class="row mt-4">
                <dt class="col-5"><h3>Abilities: </h3></dt>
                <dd class="col-5">
                  <dl class="row justify-content-around">
                    <dd class="col-6"><h4 style="font-style: italic ;">{{description[perso].abilities[0]}},</h4></dd>
                    <dd class="col-6"><h4 style="font-style: italic ;">{{description[perso].abilities[1]}}</h4></dd>
                  </dl>
                </dd>
              </dl>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`
  ,
  styleUrls: ['./final-space.component.scss']
})

export class FinalSpaceComponent implements OnInit {

  public quote: any ;
  public description: any;
  public lists = [0,5,9,14,18,22,34,45]
  public persos = [0,1,2,3,4,5,8,9]
  
  @HostListener('click')
  onClick(){
      
  }

  replacePicture(){

  }
  constructor(private configServiceFinalSpace: ConfigServiceFinalSpace, private configServiceFinalSpaceCharacter: ConfigServiceFinalSpaceCharacter) { }

  ngOnInit(): void {
    this.configServiceFinalSpace.getConfig2().subscribe((reponse2: any) => {
      this.quote = reponse2;
      console.log(reponse2)
    })

    this.configServiceFinalSpaceCharacter.getConfig2().subscribe((reponse: any) =>{
      this.description = reponse;
      console.log(reponse)
    })

  }

  

  // link(lists: any = [], persos: any = []){
  //   var fiche: any = [];
  //   var list: any =[];
  //   var perso: any = [];

  //   fiche.push(list, perso)

  //   for (let i=0; i <= lists.length; i++ ){
  //     fiche[list].push(lists[i]);
  //     fiche[perso].push(persos[i]);

  //     return fiche;
  //   }
  // }
}

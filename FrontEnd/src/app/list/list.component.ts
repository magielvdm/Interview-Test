import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  heroesList: Hero[] = [];
  message:string = null;

  ngOnInit() {
    //Get heroes from api
    this.apiService.getHeroes().subscribe((data: any[]) => {
      this.heroesList = data;      
    });    
  }

  //Evolve hero
  evolveHero(name: string)
  {   //Get eveolve hero stats from api
      this.apiService.evolve(name, "evolve").subscribe((hero: Hero)=>{      
      
        //Create message to display
        this.message = `${hero.name} updated with: `;
        for (let stat of hero.stats) {
          this.message += `${stat.key} ${stat.value}, `;
        }   
        //Update table with new values  
        let itemIndex = this.heroesList.findIndex(item => item.name == hero.name);
        this.heroesList[itemIndex] = hero;
        
    });
  }
  //Generate random class
  getRandomColorClass(): string {
    const classes = ['color-cyan', 'color-purple', 'color-red', 'color-green'];
    const index = Math.floor(Math.random() * classes.length);
    return classes[index];
  }

}
